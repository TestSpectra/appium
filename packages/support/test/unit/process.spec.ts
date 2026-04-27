import {expect, use} from 'chai';
import chaiAsPromised from 'chai-as-promised';
const teenProcess = require('teen_process');
import {createSandbox} from 'sinon';
import {process, system} from '../../lib';
import {retryInterval} from 'asyncbox';

const SubProcess = teenProcess.SubProcess;

describe('process', function () {
  let sandbox: ReturnType<typeof createSandbox>;

  before(function () {
    use(chaiAsPromised);
  });

  beforeEach(function () {
    sandbox = createSandbox();
    (globalThis as any).execMock.mockClear();
  });

  afterEach(function () {
    sandbox.verify();
    sandbox.restore();
  });

  describe('getProcessIds', function () {
    let proc: InstanceType<typeof SubProcess> | undefined;
    before(async function () {
      if (system.isWindows()) {
        return this.skip();
      }
      proc = new SubProcess('tail', ['-f', __filename]);
      await proc.start();
    });
    after(async function () {
      if (proc) {
        await proc.stop();
      }
    });
    it('should get return an array for existing process', async function () {
      const pids = await process.getProcessIds('tail');
      expect(pids).to.be.an.instanceof(Array);
    });
    it('should get process identifiers for existing process', async function () {
      const pids = await process.getProcessIds('tail');
      expect(pids.length).to.be.at.least(1);
    });
    it('should get an empty array when the process does not exist', async function () {
      const pids = await process.getProcessIds('sadfgasdfasdf');
      expect(pids).to.have.length(0);
    });
    it('should throw an error if pgrep fails', async function () {
      (globalThis as any).execMock.mockImplementationOnce(async () => {
        throw {message: 'Oops', code: 2};
      });
      await expect(process.getProcessIds('tail')).to.eventually.be.rejectedWith(/Oops/);
    });
  });

  describe('killProcess', function () {
    let proc: InstanceType<typeof SubProcess>;
    before(function () {
      if (system.isWindows()) {
        return this.skip();
      }
    });
    beforeEach(async function () {
      proc = new SubProcess('tail', ['-f', __filename]);
      await proc.start();
    });
    afterEach(async function () {
      if (proc.isRunning) {
        await proc.stop();
      }
    });
    it('should kill process that is running', async function () {
      expect(proc.isRunning).to.be.true;
      await process.killProcess('tail');

      await retryInterval(10, 100, async () => {
        expect(proc.isRunning).to.be.false;
      });
    });
    it('should do nothing if the process does not exist', async function () {
      expect(proc.isRunning).to.be.true;
      await process.killProcess('asdfasdfasdf');

      await expect(
        retryInterval(10, 100, async () => {
          expect(proc.isRunning).to.be.false;
        })
      ).to.eventually.be.rejected;
    });
    it('should throw an error if pgrep fails', async function () {
      (globalThis as any).execMock.mockImplementationOnce(async () => {
        throw {message: 'Oops', code: 2};
      });
      await expect(process.killProcess('tail')).to.eventually.be.rejectedWith(/Oops/);
    });
    it('should throw an error if pkill fails', async function () {
      (globalThis as any).execMock.mockImplementation(async (cmd: string) => {
        if (cmd === 'pgrep') {
            return {stdout: '42\n'};
        }
        throw {message: 'Oops', code: 2};
      });
      await expect(process.killProcess('tail')).to.eventually.be.rejectedWith(/Oops/);
    });
  });
});
