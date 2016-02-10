(function() {
  'use strict';

  angular
    .module('angularLoForm')
    .directive('tabPanels', tabPanels);

  /** @ngInject */
  function tabPanels() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/tabs/tabs.html',
      controller: function(){
        this.tab=1;
        this.selectTab = function(setTab){
          this.tab = setTab;
        };
        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        };
      },
      controllerAs:'panel'
    };
  }

})();
