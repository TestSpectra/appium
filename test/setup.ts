import { describe as bunDescribe, it as bunIt, beforeAll, beforeEach as bunBeforeEach, afterAll, afterEach as bunAfterEach } from 'bun:test';
import { use } from 'chai';
import chaiAsPromised from 'chai-as-promised';

use(chaiAsPromised);

const noop = () => {};

const createMochaContext = () => ({
  timeout: noop,
  slow: noop,
  skip: function() {
    // In Bun, skipping inside a test is not as simple as this.skip()
    // but for compatibility we provide the stub.
    console.warn('this.skip() called but not fully supported in Bun transition yet');
  },
  retries: noop,
});

// Inject bun:test hooks into global scope for Mocha compatibility
(globalThis as any).describe = function(name: string, fn: Function) {
  return bunDescribe(name, function(this: any) {
    return fn.call(createMochaContext());
  });
};

(globalThis as any).it = function(name: string, fn: Function) {
  return bunIt(name, function(this: any) {
    return fn.call(createMochaContext());
  });
};

(globalThis as any).before = beforeAll;
(globalThis as any).beforeEach = function(fn: Function) {
    return bunBeforeEach(function(this: any) {
        return fn.call(createMochaContext());
    });
};
(globalThis as any).after = afterAll;
(globalThis as any).afterEach = function(fn: Function) {
    return bunAfterEach(function(this: any) {
        return fn.call(createMochaContext());
    });
};

// Global Mocks for Bun Migration
import { mock } from 'bun:test';

console.log('[Setup] Initializing Global Mocks...');

const { exec: realExec } = require('/Volumes/DATA/appium/packages/support/lib/exec');
const execMock = mock(realExec);
const osTypeMock = mock(() => 'Darwin');

(globalThis as any).execMock = execMock;
(globalThis as any).osTypeMock = osTypeMock;

// Mock the local exec module used throughout @appium/support
mock.module('/Volumes/DATA/appium/packages/support/lib/exec', () => {
    console.log('[Mock] Providing @appium/support/exec mock');
    return {
        exec: execMock,
    };
});

mock.module('node:os', () => {
    console.log('[Mock] Providing node:os mock');
    const os = require.resolve('node:os') ? require('node:os') : {};
    const mockedOs = {
        ...os,
        type: osTypeMock,
    };
    return {
        ...mockedOs,
        default: mockedOs,
    };
});
