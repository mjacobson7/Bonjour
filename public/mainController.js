angular.module('myApp')
  .controller('mainController', function($scope, mainService) {



    $scope.sideNav = function() {
      var sideMenu = document.querySelector('.sideNav');
      var page = document.querySelector('.pageContainer');

      if(page.classList.contains("sideNavPadding") && sideMenu.classList.contains("sideNavPadding2")) {
        page.classList.remove("sideNavPadding");
        sideMenu.classList.remove("sideNavPadding2");
        page.classList.add('noPadding');
        sideMenu.classList.add('noPadding2');
      } else {
        page.classList.remove("noPadding");
        sideMenu.classList.remove("noPadding2");
        page.classList.add('sideNavPadding');
        sideMenu.classList.add('sideNavPadding2');
      }
    }



});  //end controller
