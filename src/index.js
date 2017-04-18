/* eslint-disable class-methods-use-this, no-empty-function */

import BossmodeCG from '@bossmodecg/core';

export default class SimpleStoreModule extends BossmodeCG.BModule {
  constructor(config) {
    super("simplestore", config);
  }

  async _doRegister() {}
}
