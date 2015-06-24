$(document).foundation({
    "magellan-expedition": {
        active_class: 'active', // specify the class used for active sections
        threshold: 1, // how many pixels until the magellan bar sticks, 0 = auto
        destination_threshold: 20, // pixels from the top of destination for it to be considered active
        throttle_delay: 20, // calculation throttling to increase framerate
        fixed_top: 0, // top distance in pixels assigend to the fixed element on scroll
        offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
    }
});

(function(){

	angular.module('Chips', ['ngRoute']) 
		.controller('PageCtrl', function () {
        console.log("Page Controller here.");
    })

		    .config(function($routeProvider) {


				$routeProvider.when('/main', {
		            templateUrl: 'views/main.html',
		            controller: 'PageCtrl'
		        });
		        $routeProvider.when('/beer', {
		            templateUrl: 'views/beer.html',
		            controller: 'PageCtrl'
		        });
		         $routeProvider.when('/bloody', {
		            templateUrl: 'views/bloody.html',
		            controller: 'PageCtrl'
		        });
		          $routeProvider.when('/whiskey', {
		            templateUrl: 'views/whiskey.html',
		            controller: 'PageCtrl'
		        });
		           $routeProvider.when('/naked', {
		            templateUrl: 'views/naked.html',
		            controller: 'PageCtrl'
		        })
		           .otherwise({
                templateUrl: 'views/main.html',
                controller: 'PageCtrl'
				  })




		    });










}());
