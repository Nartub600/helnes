'use strict';

var nestleSlider = angular.module('nestleSlider', []);

nestleSlider.controller('SliderCtrl', function SliderCtrl($interval) {
    this.count = 1;

    this.prev = function() {
        this.count > 0 ? this.count-- : this.count = 1;
    };

    this.next = function() {
        this.count < 1 ? this.count++ : this.count = 0;
    };
});

nestleSlider.directive('myNestleSlider', function myNestleSlider($interval) {
    return {
        scope: {},
        bindToController: {
            count: '='
        },
        controller: 'SliderCtrl',
        controllerAs: 'vm',
        templateUrl: 'partials/nestle-slider.html',
        link: function(scope) {
            // $interval(function(){
            //     scope.vm.next();
            // }, 3000);
        }
    }
});
