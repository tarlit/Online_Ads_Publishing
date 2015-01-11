'use strict';

app.controller('UserGetAllAdsController',
   function ($scope, userService, notifyService, pageSize) {
      $scope.adsParams = {
          'startPage' : 1,
          'pageSize' : pageSize
      };
	  
	  $scope.reloadUserAds = function() {
          userService.getUserAds(
              $scope.adsParams,
              function success(data) {
                  $scope.ads = data;
              },
              function error(err) {
                  notifyService.showError("Cannot load ads", err);
              }
          );
      };
	  
	  $scope.reloadUserAds();

    $scope.deactivateAd = function(id) {
        userService.deactivateAd(             
            id,
            function success(data) {
                $scope.ads = data;
			          $scope.reloadUserAds();
            },
            function error(err) {
                notifyService.showError("Cannot load ads", err);
            }
        );
    };      
	  
	  // This event is sent by RightSideBarController when the current category is changed
        $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
            $scope.adsParams.categoryId = selectedCategoryId;
            $scope.adsParams.startPage = 1;
            $scope.reloadUserAds();
        });

        // This event is sent by RightSideBarController when the current town is changed
        $scope.$on("townSelectionChanged", function(event, selectedTownId) {
            $scope.adsParams.townId = selectedTownId;
            $scope.adsParams.startPage = 1;
            $scope.reloadUserAds();
        });
   }
);
