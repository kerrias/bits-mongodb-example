(() => {
  'use strict';

  const MongodbCrudManager = global.helper.MongodbCrudManager; //THis comes from the mongodb module using the helper api to export the class

  class ExampleCrudManager extends MongodbCrudManager {
    constructor() {
      super('myCollectionNameCrud', {dbName:'myDbName', tag:'myTag', scopes:['example']});
    }

    load(messageCenter) {
      return super.load(messageCenter)
      .then(() => this.create({dateRan: Date.now()}));
    }

    unload() {
      return super.unload(); //Normally you would unload listeners here
    }
  }

  module.exports = ExampleCrudManager;
})();
