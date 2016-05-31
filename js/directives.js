'use strict';

var nestleDirectives = angular.module('nestleDirectives', []);

nestleDirectives.directive('nestleBackground', function($interval) {
    function link(scope, element, attrs) {
        var sliderTimer = $interval(function() {
            scope.bgCtrl.activeSlide = (scope.bgCtrl.activeSlide + 1) % scope.bgCtrl.slides.length;
        }, 5000);
    }

    return {
        scope: {},
        replace: true,
        controller: 'BackgroundController',
        controllerAs: 'bgCtrl',
        templateUrl: 'partials/nestle-background.html',
        // link: link
    }
});

nestleDirectives.directive('nestleLogo', function(){
    return {
        replace: true,
        templateUrl: 'partials/nestle-logo.html'
    }
});

nestleDirectives.directive('nestleProductMenu', function(){
    return {
        scope: {},
        replace: true,
        controller: 'ProductMenuController',
        controllerAs: 'pmCtrl',
        templateUrl: 'partials/nestle-product-menu.html',
        link: function(scope, element, attrs) {

        }
    }
});

nestleDirectives.directive('nestleSidebar', function(){
    return {
        scope: {},
        replace: true,
        controller: 'SidebarController',
        controllerAs: 'sbCtrl',
        templateUrl: 'partials/nestle-sidebar.html',
        link: function(scope, element, attrs) {

        }
    }
});

nestleDirectives.directive('nestleContact', function(){
    return {
        replace: true,
        templateUrl: 'partials/nestle-contact.html'
    }
});

nestleDirectives.directive('nestleFooter', function(){
    return {
        scope: {},
        replace: true,
        controller: 'FooterController',
        controllerAs: 'ftrCtrl',
        templateUrl: 'partials/nestle-footer.html',
        link: function(scope, element, attrs) {

        }
    }
});
