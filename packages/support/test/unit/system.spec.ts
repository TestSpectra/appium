import {expect, use} from 'chai';
import chaiAsPromised from 'chai-as-promised';
const {system} = require('../../lib');
import os from 'node:os';
import {createSandbox} from 'sinon';
import _ from 'lodash';

// Access global mocks from setup.ts
const execMock = (globalThis as any).execMock;
const osTypeMock = (globalThis as any).osTypeMock;

describe('system', function () {
  let sandbox: ReturnType<typeof createSandbox>;

  before(function () {
    use(chaiAsPromised);
  });

  beforeEach(function () {
    sandbox = createSandbox();
    execMock.mockClear();
    osTypeMock.mockClear();
  });

  afterEach(function () {
    sandbox.verify();
    sandbox.restore();
  });

  describe('isX functions', function () {
    it('should correctly return Windows System if it is a Windows', function () {
      osTypeMock.mockReturnValue('Windows_NT');
      expect(system.isWindows()).to.be.true;
    });

    it('should correctly return Mac if it is a Mac', function () {
      osTypeMock.mockReturnValue('Darwin');
      expect(system.isMac()).to.be.true;
    });

    it('should correctly return Linux if it is a Linux', function () {
      osTypeMock.mockReturnValue('Linux');
      expect(system.isLinux()).to.be.true;
    });
  });

  describe('mac OSX version', function () {
    it('should return correct version for 10.10.5', async function () {
      execMock.mockImplementation(async () => ({stdout: '10.10.5'}) as any);
      await expect(system.macOsxVersion()).to.eventually.equal('10.10');
    });

    it('should return correct version for 10.12', async function () {
      execMock.mockImplementation(async () => ({stdout: '10.12.0'}) as any);
      await expect(system.macOsxVersion()).to.eventually.equal('10.12');
    });

    it('should return correct version for 10.12 with newline', async function () {
      execMock.mockImplementation(async () => ({stdout: '10.12   \n'}) as any);
      await expect(system.macOsxVersion()).to.eventually.equal('10.12');
    });

    it("should throw an error if OSX version can't be determined", async function () {
      const invalidOsx = 'error getting operation system version blabla';
      execMock.mockImplementation(async () => ({stdout: invalidOsx}) as any);
      await expect(system.macOsxVersion()).to.eventually.be.rejectedWith(
        new RegExp(_.escapeRegExp(invalidOsx))
      );
    });
  });

  describe('architecture', function () {
    beforeEach(function () {
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('should return correct architecture if it is a 64 bit Mac/Linux', async function () {
      osTypeMock.mockReturnValue('Darwin');
      execMock.mockImplementation(async () => ({stdout: 'x86_64'}) as any);
      const arch = await system.arch();
      expect(arch).to.equal('64');
    });

    it('should return correct architecture if it is a 32 bit Mac/Linux', async function () {
      osTypeMock.mockReturnValue('Linux');
      execMock.mockImplementation(async () => ({stdout: 'i686'}) as any);
      const arch = await system.arch();
      expect(arch).to.equal('32');
    });

    it('should return correct architecture if it is a 64 bit Windows', async function () {
      const arch = await (system.arch as any).call({
        isLinux: () => false,
        isMac: () => false,
        isWindows: () => true,
        isOSWin64: () => true,
      });
      expect(arch).to.equal('64');
    });

    it('should return correct architecture if it is a 32 bit Windows', async function () {
      const arch = await (system.arch as any).call({
        isLinux: () => false,
        isMac: () => false,
        isWindows: () => true,
        isOSWin64: () => false,
      });
      expect(arch).to.equal('32');
    });
  });

  it('should know architecture', function () {
    return system.arch();
  });
});
