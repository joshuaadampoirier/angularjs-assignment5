(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'MyInfoService'];
function SignupController(MenuService, MyInfoService) {
  var signupCtrl = this;
  signupCtrl.clicked = false;

  signupCtrl.submit = function() {
    MenuService.getMenuItem(signupCtrl.favDish)
    .then(function (menuItem) {
      signupCtrl.myinfo.favDish = menuItem;
      MyInfoService.saveMyInfo(signupCtrl.myinfo);
      signupCtrl.completed = true;
      signupCtrl.clicked = true;
    })
    .catch(function (err) {
      signupCtrl.completed = false;
      signupCtrl.clicked = true;
    });
  };
}

})();
