'use strict';

// @ts-check

/**
 * This module is here to re-export `@testspectra/base-driver` for Appium extensions.
 *
 * @see https://npm.im/@testspectra/base-driver
 * @example
 * const { BaseDriver, errors } = require('appium/driver');
 */

/** @type {import('@testspectra/base-driver')} */
module.exports = require('@testspectra/base-driver');
