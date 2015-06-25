;(function(){

'use strict';

	angular.module('Chips', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html'
        })
        .state('ourChips', {
            url: '/ourChips',
            templateUrl: 'views/ourChips.html'
        })
        
        .state('ourChips.beer', {
            url: '/beer',
            templateUrl: 'views/beer.html'
        })

        .state('ourChips.bloody', {
            url: '/bloody',
            templateUrl: 'views/bloody.html'
        })

        .state('ourChips.naked', {
            url: '/naked',
            templateUrl: 'views/naked.html'
        })
        
        .state('ourChips.whiskey', {
            url: '/whiskey',
            templateUrl: 'views/whiskey.html'
        })
        


       
        
});

}());
