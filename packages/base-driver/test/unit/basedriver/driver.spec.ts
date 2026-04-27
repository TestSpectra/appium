import {expect} from 'chai';
import type {InitialOpts} from '@testspectra/types';
import {BaseDriver} from '../../../lib';
import {driverUnitTestSuite} from '@testspectra/driver-test-support';

driverUnitTestSuite(BaseDriver as any, {
  platformName: 'iOS',
  'appium:deviceName': 'Delorean',
});

describe('BaseDriver', function () {
  describe('constructor', function () {
    it('should initialize "opts"', function () {
      const driver = new BaseDriver({} as InitialOpts);
      expect(driver.opts).to.exist;
    });
  });
});
