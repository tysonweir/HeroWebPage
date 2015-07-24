var myApp = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'NavCtrl'
        })
        .when('/partials/about/', {
            templateUrl: 'partials/about.html',
            controller: 'NavCtrl'
        })
        .when('/partials/store/', {
            templateUrl: 'partials/store.html',
            controller: 'NavCtrl'
        })
        .when('/partials/contact/', {
            templateUrl: 'partials/contact.html',
            controller: 'NavCtrl'
        })
        .when('/partials/history/', {
            templateUrl: 'partials/history.html',
            controller: 'NavCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);

myApp.controller('NavCtrl', ['$scope', function ($scope) {
    $scope.links = [
        {"name": "about", "url": "#/partials/about"},
        {"name": "store", "url": "#/partials/store"},
        {'name': 'contact', 'url': '#/partials/contact'},
        {'name': 'history', 'url': '#/partials/history'}
    ];
    $scope.isCollapsed = false;
}]);

myApp.controller('contactCtrl', ['$scope', function ($scope) {
    $scope.master = {};

    $scope.update = function (form) {
        $scope.master = angular.copy(form);
    };
}]);

myApp.controller('ScrollCtrl', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
    $scope.gotoTop = function () {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('bodyArea');

        // call $anchorScroll()
        $anchorScroll();
    };
}]);

myApp.controller('Images', ['$scope', function ($scope) {
    var hero = {
        imageTyson: 'images/Heros/IMG_0527.JPG',
        imageBanner: 'images/Heros/IMG_0419.JPG',
        superman: 'images/Heros/superman.jpg',
        batman: 'images/Heros/batman.jpg',
        flash: 'images/Heros/flash.jpg',
        message: 'Hello, all',
    };

    //var cities = {
    //   tower:'images/cities/Banner.jpg',
    //   empire: 'images/cities/empire.jpg',
    //   blur: 'images/cities/Blur.jpg',
    //   colored: 'images/cities/colored.jpg',
    //   ocean: 'images/cities/ocean.jpg',
    //   dark: 'images/cities/dark.jpg',
    //
    //};

    $scope.hero = hero;
    //$scope.cities = cities;
}]);

myApp.controller('Slider', ['$scope', function ($scope) {

    $scope.slides = [
        {image: 'images/cities/Banner.jpg', description: 'tower'},
        {image: 'images/cities/empire.jpg', description: 'empire'},
        {image: 'images/cities/Blur.jpg', description: 'blur'},
        {image: 'images/cities/colored.jpg', description: 'colored'},
        {image: 'images/cities/ocean.jpg', description: 'ocean'},
        {image: 'images/cities/dark.jpg', description: 'dark'}
    ];

}]);