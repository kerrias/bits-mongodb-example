(() => {
  'use strict';

  const CrudManager = require('./lib/crud-manager/crud-manager.js');
  const ManualManager = require('./lib/manual-manager/manual-manager.js');

  class Module {
    constructor() {
      this._crudManager = new CrudManager();
      this._manualManager = new ManualManager();
    }

    load(messageCenter) {
      return Promise.resolve()
      .then(() => this._crudManager.load(messageCenter))
      .then(() => this._manualManager.load(messageCenter));
    }

    unload() {
      return Promise.resolve()
      .then(() => this._manualManager.unload(messageCenter))
      .then(() => this._crudManager.unload(messageCenter));
    }
  }
  module.exports = new Module();
})();
