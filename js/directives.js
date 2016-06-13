'use strict';

var nestleDirectives = angular.module('nestleDirectives', []);

nestleDirectives.directive('nestleBackground', function() {
    return {
        replace: true,
        templateUrl: 'partials/nestle-background.html'
    }
});

nestleDirectives.directive('nestleBgControl', function($interval){
    function link(scope, element, attrs) {
        var sliderTimer = $interval(function() {
            scope.home.nextSlide();
        }, 5000);
    }

    return {
        replace: true,
        templateUrl: 'partials/nestle-bg-control.html',
        link: link
    }
});

nestleDirectives.directive('nestleLogo', function(){
    return {
        replace: true,
        templateUrl: 'partials/nestle-logo.html'
    }
});

nestleDirectives.directive('nestleHeader', function(){
    return {
        replace: true,
        templateUrl: 'partials/nestle-header.html'
    }
})

nestleDirectives.directive('nestleProductMenu', function(){
    return {
        replace: true,
        templateUrl: 'partials/nestle-product-menu.html'
    }
});

nestleDirectives.directive('nestleSidebar', function(){
    return {
        replace: true,
        templateUrl: 'partials/nestle-sidebar.html'
    }
});

nestleDirectives.directive('nestleInfotext', function(){
    return {
        replace: true,
        templateUrl: 'partials/nestle-infotext.html'
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
        replace: true,
        templateUrl: 'partials/nestle-footer.html'
    }
});

nestleDirectives.directive('nestleProduct', function(){
    return {
        replace: true,
        templateUrl: 'partials/nestle-product.html'
    }
});

nestleDirectives.directive('nestleProductControl', function(){
    return {
        replace: true,
        templateUrl: 'partials/nestle-product-control.html'
    }
});
