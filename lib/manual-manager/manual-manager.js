(() => {
  'use strict';

  const CollectionApi = global.helper.MongodbCollectionApi;
  const ManualMessenger = require('./manual-messenger');

  class ManualManager {
    constructor() {
      this._collectionApi = null;
      this._manualMessenger = new ManualMessenger(this);
    }

    load(messageCenter) {
      const time = Date.now();
      this._collectionApi = new CollectionApi(messageCenter, 'myCollectionNameManual', {dbName: 'myDbName'});
      return Promise.resolve()
      .then(() => this._manualMessenger.load(messageCenter))
      .then(() => this._collectionApi.findOneAndUpdate({time: time}, {time: time}, {upsert: true, returnOriginal: false})); // The collection api follows the mongo driver api
    }

    unload() {
      return Promise.resolve()
      .then(() => this._manualMessenger.unload(messageCenter));
    }

    list() {
      return Promise.resolve()
      .then(() => this._collectionApi.find());
    }
  }

  module.exports = ManualManager;
})();
