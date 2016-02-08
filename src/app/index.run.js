(function() {
  'use strict';

  angular
    .module('angularLoForm')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
