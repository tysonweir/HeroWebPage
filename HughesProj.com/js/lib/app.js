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
        .when('/partials/batmanbio/', {
            templateUrl: 'partials/batmanbio.html',
            controller: 'NavCtrl'
        })
        .when('/partials/supermanbio/', {
            templateUrl: 'partials/supermanbio.html',
            controller: 'NavCtrl'
        })
        .when('/partials/Flashbio/', {
            templateUrl: 'partials/Flashbio.html',
            controller: 'NavCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);


myApp.controller('RadioHeroButton', ['$scope', function ($scope) {
    $scope.heros = [
        {hero: 'Batman', symbol: 'images/Heros/batamanLogo.jpg'},
        {hero: 'Superman', symbol: 'images/Heros/supermanSymbol.png'},
        {hero: 'Flash', symbol: 'images/Heros/flashSymbol.jpg'}
    ];
    $scope.default = {hero: 'Batman', symbol: 'images/Heros/batamanLogo.jpg'}

}]);

myApp.controller('DropDownHero', ['$scope', function ($scope) {
    $scope.heros = [
        {hero: 'Batman', url: "#/partials/batmanbio"},
        {hero: 'Superman', url: "#/partials/supermanbio"},
        {hero: 'Flash', url: "#/partials/Flashbio"}
    ];
}]);

myApp.controller('NavCtrl', ['$scope', function ($scope) {
    $scope.links = [
        {"name": "about", "url": "#/partials/about"},
        {"name": "store", "url": "#/partials/store"},
        {'name': "contact", 'url': "#/partials/contact"},
        {'name': "history", 'url': "#/partials/history"}
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

    $scope.hero = hero;

}]);

myApp.controller('Slider', ['$scope', function ($scope) {

    $scope.myInterval = 5000;
    $scope.slides = [
        {image: 'images/cities/supermanFortress.jpg', description: 'fortress'},
        {image: 'images/cities/gotham.jpg', description: 'gotham'},
        {image: 'images/cities/empire.jpg', description: 'empire'},

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
                    img: 'images/Villains/BatmanVillains/joker2.jpg'
                },
                {
                    "id": "Scar Crow",
                    "description": "Often known as the Master of Fear, the Scarecrow is an enemy of Batman. Recently, the Scarecrow was chosen to be the Sinestro of Sector-2814, due to his ability to instill fear. But Scarecrow is losing his sanity due to his lack of fear, knowing only Batman can scare him.",
                    img: 'images/Villains/BatmanVillains/scarcrow.png'
                },

                {
                    "id": "Bane",
                    "description": "Forced to serve a life sentence for the crimes of his father, Bane was born and raised in the underground prison, Peña Duro. There, he forged himself into the pinnacle of physical and mental potential all without seeing the light of day. Escaping to Gotham City, Bane pitted himself against Batman and became famous as 'The Man Who Broke the Bat'. His strength is often enhanced greatly by a drug called 'Venom' that puts him in an unstable mental state.",
                    img: 'images/Villains/BatmanVillains/bane3.jpg'
                },

                {
                    "id": "Two-Face",
                    "description": "Formerly the D.A. of Gotham City, Harvey Dent was an ally of Batman and Commissioner Gordon until he had acid thrown onto the left side of his face by a mob boss, scarring him for life. The incident drove Harvey insane and he became Two-Face, obsessed with chance and always carrying a double-headed coin, which he flips to determine his every decision.",
                    img: 'images/Villains/BatmanVillains/twoface.jpg'
                }]
        },
        {
            "hero": 'Superman',
            dataSources: [
                {
                    "id": "Darkseid",
                    "description": "Worshipped as the 'God of Evil', Darkseid is the supreme monarch of planet Apokolips. Considered one of Superman's greatest adversaries, the greatest enemy of New Genesis and the greatest threat to the DC Universe, he seeks to control all living things with the Anti-Life Equation.",
                    "img": "images/Villains/SupermanVillains/darkseid.jpg"
                },
                {
                    "id": "Brainiac",
                    "description": "Brainiac is one of Superman's oldest foes. A Coluan genius with a twelfth-level intellect (The entirety of the human race only has a level 1 intellect) and hyper-advanced technology, he travels the universe seeking civilizations to shrink and abduct, which he then adds to his collection of captured worlds.",
                    img: 'images/Villains/SupermanVillains/brainiac.jpg'
                },
                {
                    "id": "Lex Luthor",
                    "description": "Lex Luthor, Superman's arch-nemesis, is one of the most gifted beings alive, whose hatred of 'interfering aliens' pushes him down the path of a sociopath. Known for his 'ends justifies the means' approach to life, his single-minded and often brutal focus puts him at odds with The Man of Steel. Lex Luthor is arguably DC Comic's most iconic id.",
                    "img": 'images/Villains/SupermanVillains/lex.jpg'
                },
                {
                    "id": "Imperiex",
                    "description": "The ultimate conquering force featured in the 'Our Worlds at War.' First appeared in Superman #153. This being literally has the power of the big bang contained within him which he uses for destroying and recreating entire universes.",
                    "img": './images/Villains/SupermanVillains/imperiex.jpg'
                }
            ]
        },
        {
            "hero": 'Flash',
            dataSources: [
                {
                    "id": "Professor Zoom",
                    "description": "Eobard Thawne was a brilliant scientist born in the 25th century, where Barry Allen's heroism as the Flash is the stuff of legend. Seeking to emulate his idol, Thawne traveled back in time to meet the Flash, but learned instead that his destiny was to become the Reverse-Flash, Allen's greatest nemesis. Rendered unstable by this knowledge, Thawne set out to erase Barry Allen from history and establish himself as the one true Flash.",
                    "img": "images/Villains/FlashVillains/professorZoom.jpg"
                },
                {
                    "id": "Gorilla Grodd",
                    "description": "Gorilla Grodd is a super intelligent, telepathic, anthropomorphic gorilla. A deadly opponent to all of the champions of good, Grodd is most well known for his rivalry with The Flash.",
                    "img": "images/Villains/FlashVillains/Grodd.jpg"
                },
                {
                    "id": "Captain Cold",
                    "description": "Leonard Snart is a blue collar criminal who has dubbed himself Captain Cold. He is an honorable id in the fact that he has a strong moral code that he and his team mates must follow. Captain Cold is the leader of the group of ids known as 'The Rogues'.",
                    "img": "images/Villains/FlashVillains/captianCold2.jpg"
                },
                {
                    "id": "Black Flash",
                    "description": "A Dark Aspect of the Speed Force, The Black Flash fulfills the role of death to speedsters within the DC Universe, returning them to the Speed Force.",
                    "img": "images/Villains/FlashVillains/blackFlash.jpg"
                }
            ]
        }
    ];

}]);

