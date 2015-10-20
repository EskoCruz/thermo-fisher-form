(function() {
  'use strict';

  angular
    .module('thermoFisherForm')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
