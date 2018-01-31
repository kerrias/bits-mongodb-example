(() => {
  'use strict';

  const Messenger = global.helper.Messenger;

  class ManualMessenger extends Messenger {
    constructor(manager) {
      super();

      this._manager = manager;
      //  These request listeners will be automatically added and removed as needed.
      this.addRequestListener('ListManualModule', {scopes: ['example']}, this._list.bind(this));
    }

    _list() {
      return this._manager.list();
    }
  }

  module.exports = ManualMessenger;
})();
