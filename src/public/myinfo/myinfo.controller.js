(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['myinfo', 'ApiPath'];
function MyInfoController(myinfo, ApiPath) {
  var myinfoCtrl = this;
  myinfoCtrl.myinfo = myinfo;
  myinfoCtrl.basePath = ApiPath;
}

})();
