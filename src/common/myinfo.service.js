(function () {
  "use strict";

  angular.module('common')
  .service('MyInfoService', MyInfoService);

  function MyInfoService() {
    var service = this;

    // retrieve data from user's browser
    service.getMyInfo = function() {
      var myInfo = localStorage.getItem('myInfoSaved');
      return JSON.parse(myInfo);
    };

    // store data locally within user's browser
    service.saveMyInfo = function(myInfo) {
      var myInfoSaved = JSON.stringify(myInfo);
      localStorage.setItem('myInfoSaved', myInfoSaved);
    };
  }

})();
