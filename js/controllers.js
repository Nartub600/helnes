'use strict';

var nestleControllers = angular.module('nestleControllers', []);

nestleControllers.constant("API", {
        "URL": "http://146.20.73.4/PelaPopNuevo/Api"
    })
.controller('HomeController', function($interval, $http, API){
    // ui control
    this.showLogo = true;
    this.showHeader = true;
    this.showInfotext = true;
    this.showSidebar = true;

    this.showContact = false;
    this.toggleContact = function() {
        this.showContact = !this.showContact;
    }

    this.showProductMenu = false;
    this.toggleProductMenu = function() {
        this.showProductMenu = !this.showProductMenu;
    }

    this.showNutrimental = false;
    this.toggleNutrimental = function() {
        this.showNutrimental = !this.showNutrimental;
    }

    this.showNutrimental = false;
    this.toggleNutrimental = function() {
        this.showNutrimental = !this.showNutrimental;
    }

    this.showMobileMenu = false;
    this.toggleMobileMenu = function() {
        this.showMobileMenu = !this.showMobileMenu;
    }

    // desktop slider
    this.activeSlide = 0;

    this.nextSlide = function() {
        this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    }

    // data
    var self = this;

    $http.get(API.URL + '/Slides').then(function(response) {
        self.slides = response.data;
    });

    $http.get(API.URL + '/Products').then(function(response) {
        self.products = response.data;
    });

    $http.get(API.URL + '/Categories').then(function(response) {
        self.categories = response.data;
    });

});
