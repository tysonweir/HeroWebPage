//(function(){
//
//    var MyApp = angular.module("app",['ngRoute', 'ui.bootstrap'])
//
//
//
//}());

var myApp = angular.module('app', ['ngRoute', 'ui.bootstrap']);

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
        //superman: 'images/Villains/BatmanVillains/joker.jpg',
        batman: 'images/Heros/batman.jpg',
        flash: 'images/Heros/flash.jpg',
        message: 'Hello, all',
    };

    $scope.hero = hero;

}]);

myApp.controller('Slider', ['$scope', function ($scope) {

    $scope.myInterval = 5000;
    $scope.slides = [
        {image: 'images/cities/Banner.jpg', description: 'tower'},
        {image: 'images/cities/empire.jpg', description: 'empire'},
        {image: 'images/cities/Blur.jpg', description: 'blur'},
        {image: 'images/cities/colored.jpg', description: 'colored'},
        {image: 'images/cities/ocean.jpg', description: 'ocean'},
        {image: 'images/cities/dark.jpg', description: 'dark'}
    ];
}]);

myApp.controller('VillainsPopulate', ['$scope', '$http', function ($scope, $http) {

    //$http.get('../../Villains/villains.json')
    //    .then(function(res){
    //        $scope.villains = res.data;
    //    });


    $scope.villains = [
        {
            "hero": 'Batman',
            dataSources: [
            {
                "id": "Joker",
                "description": "The Joker, Clown Prince of Crime, is Batman's arch-nemesis. An agent of chaos known for his purple three-piece suit and insidious smile, he has caused Batman more suffering than any other id he has ever faced. His origin, name, and true motivations remain a mystery.",
                img: 'images/Villains/BatmanVillains/joker.jpg'
            },
            {
                "id": "Scar Crow",
                "description": "Often known as the Master of Fear, the Scarecrow is an enemy of Batman. Recently, the Scarecrow was chosen to be the Sinestro of Sector-2814, due to his ability to instill fear. But Scarecrow is losing his sanity due to his lack of fear, knowing only Batman can scare him.",
                img: 'images/Villains/BatmanVillains/scarcrow2.jpg'
            },

            {
                "id": "Bane",
                "description": "Forced to serve a life sentence for the crimes of his father, Bane was born and raised in the underground prison, Peña Duro. There, he forged himself into the pinnacle of physical and mental potential all without seeing the light of day. Escaping to Gotham City, Bane pitted himself against Batman and became famous as 'The Man Who Broke the Bat'. His strength is often enhanced greatly by a drug called 'Venom' that puts him in an unstable mental state.",
                img: 'images/Villains/BatmanVillains/bane2.jpg'
            },

            {
                "id": "Two-Face",
                "description": "Formerly the D.A. of Gotham City, Harvey Dent was an ally of Batman and Commissioner Gordon until he had acid thrown onto the left side of his face by a mob boss, scarring him for life. The incident drove Harvey insane and he became Two-Face, obsessed with chance and always carrying a double-headed coin, which he flips to determine his every decision.",
                img: 'images/Villains/BatmanVillains/twoface.jpg'
            }]

        }
    ];

}]);

