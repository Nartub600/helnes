'use strict';

var nestleControllers = angular.module('nestleControllers', []);

nestleControllers.controller('OperatorController', function($interval){

    this.showLogo = true;
    this.showHeader = true
    this.showInfotext = true;
    this.showContact = false;
    this.showSidebar = true;

    this.toggleContact = function() {
        this.showContact = !this.showContact;
    }

    // var self = this;

    // $interval(function(){
    //     self.showLogo = !self.showLogo;
    // }, 3000)

});

nestleControllers.controller('BackgroundController', function(){

    this.activeSlide = 0;

    this.nextSlide = function() {
        this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    }

    this.slides = [
        {
            src: 'img/bg.png'
        },
        {
            src: 'img/bg-interior.png'
        }
    ];

});

nestleControllers.controller('ProductMenuController', function(){

    this.products = [
        {
            src: 'img/helado_01.png'
        },
        {
            src: 'img/helado_02.png'
        },
        {
            src: 'img/helado_03.png'
        },
        {
            src: 'img/helado_04.png'
        },
        {
            src: 'img/helado_05.png'
        },
        {
            src: 'img/helado_06.png'
        },
        {
            src: 'img/helado_07.png'
        },
        {
            src: 'img/helado_08.png'
        },
        {
            src: 'img/helado_09.png'
        },
        {
            src: 'img/helado_10.png'
        },
        {
            src: 'img/helado_11.png'
        },
        {
            src: 'img/helado_12.png'
        },
        {
            src: 'img/helado_13.png'
        },
        {
            src: 'img/helado_14.png'
        },
        {
            src: 'img/helado_15.png'
        },
        {
            src: 'img/helado_16.png'
        },
        {
            src: 'img/helado_17.png'
        },
        {
            src: 'img/helado_18.png'
        },
        {
            src: 'img/helado_19.png'
        },
        {
            src: 'img/helado_20.png'
        },
    ];

});

nestleControllers.controller('SidebarController', function(){

    this.products = [
        {
            src: 'img/helado_01.png'
        },
        {
            src: 'img/helado_02.png'
        },
        {
            src: 'img/helado_03.png'
        },
        {
            src: 'img/helado_04.png'
        },
        {
            src: 'img/helado_05.png'
        },
        {
            src: 'img/helado_06.png'
        },
        {
            src: 'img/helado_07.png'
        },
        {
            src: 'img/helado_08.png'
        },
        {
            src: 'img/helado_09.png'
        },
        {
            src: 'img/helado_10.png'
        },
        {
            src: 'img/helado_11.png'
        },
        {
            src: 'img/helado_12.png'
        },
        {
            src: 'img/helado_13.png'
        },
        {
            src: 'img/helado_14.png'
        },
        {
            src: 'img/helado_15.png'
        },
        {
            src: 'img/helado_16.png'
        },
        {
            src: 'img/helado_17.png'
        },
        {
            src: 'img/helado_18.png'
        },
        {
            src: 'img/helado_19.png'
        },
        {
            src: 'img/helado_20.png'
        },
    ];

});
