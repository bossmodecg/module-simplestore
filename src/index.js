/* eslint-disable class-methods-use-this, no-empty-function */

import Module from '@bossmodecg/module';

export default class SimpleStoreModule extends Module {
  constructor(config = {}) {
    super("simplestore", config);
  }

  get defaultConfig() { return {}; }
}
