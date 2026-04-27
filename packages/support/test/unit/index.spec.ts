import {expect} from 'chai';
import AppiumSupport from '../../lib/';

const {system, tempDir, util} = AppiumSupport;

describe('index', function () {
  describe('default', function () {
    it('should expose an object', function () {
      expect(AppiumSupport).to.exist;
      expect(typeof AppiumSupport).to.equal('object');
    });
    it('should expose system object', function () {
      expect(AppiumSupport.system).to.exist;
      expect(typeof AppiumSupport.system).to.equal('object');
    });
    it('should expose tempDir object', function () {
      expect(AppiumSupport.tempDir).to.exist;
      expect(typeof AppiumSupport.tempDir).to.equal('object');
    });
    it('should expose util object', function () {
      expect(AppiumSupport.util).to.exist;
      expect(typeof AppiumSupport.util).to.equal('object');
    });
  });

  it('should expose an object as "system" ', function () {
    expect(typeof system).to.equal('object');
  });

  it('should expose an object as "tempDir" ', function () {
    expect(typeof tempDir).to.equal('object');
  });

  it('should expose an object as "util" ', function () {
    expect(typeof util).to.equal('object');
  });
});
