'use strict';

module.exports = {
  require: ['ts-node/register', './test/setup.ts'],
  recursive: true,
  timeout: 5000
};