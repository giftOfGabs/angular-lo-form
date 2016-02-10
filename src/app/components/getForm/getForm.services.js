(function() {
  'use strict';

  angular
    .module('angularLoForm')
    .factory('getForm', getForm);

  /** @ngInject */
  function getForm($log, $http) {
    var apiHost = 'https://secure3.convio.net/prkorg/site/CRDonationAPI?method=getDonationFormInfo&api_key=s3rv1ce&v=1.0&form_id=5841';

    var service = {
      apiHost: apiHost,
      getContributors: getContributors
    };

    return service;

    function getContributors(limit) {
      if (!limit) {
        limit = 30;
      }

      return $http.get(apiHost)
        .then(getContributorsComplete)
        .catch(getContributorsFailed);

      function getContributorsComplete(response) {
        return response.data;
      }

      function getContributorsFailed(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
