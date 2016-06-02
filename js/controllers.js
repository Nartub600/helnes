'use strict';

var nestleControllers = angular.module('nestleControllers', []);

nestleControllers.controller('OperatorController', function($interval, $http){

    this.showLogo = true;
    this.showHeader = true;
    this.showInfotext = true;
    this.showContact = false;
    this.showSidebar = true;
    this.showProductMenu = false;

    this.toggleContact = function() {
        this.showContact = !this.showContact;
    }

    this.toggleProductMenu = function() {
        this.showProductMenu = !this.showProductMenu;
    }

    this.activeSlide = 0;

    this.nextSlide = function() {
        this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    }

    var self = this;

    $http.get('json/slides.json').then(function(response){
        self.slides = response.data;
    });

    $http.get('json/products.json').then(function(response){
        self.products = response.data;
    });

});
