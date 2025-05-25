(function() {
  'use strict';

  function NodeJSApp () {
    this.app = {
      hello: 'world',
      world: 'hello'
    };
  }

  module.exports = new NodeJSApp();
})();
