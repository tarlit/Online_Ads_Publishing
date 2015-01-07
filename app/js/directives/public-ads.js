app.directive('publicAds', 
	function(){
		return {
			controller: 'PublicAdsController',
			restrict: 'E',
			templateUrl: 'templates/public-ads.html',
			replace: true
		};
	}
);