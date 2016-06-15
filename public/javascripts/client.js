angular.module('coursesApp', ['ui.router']);

angular.module('coursesApp')
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise("/home");
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "views/home.html"
            })
            .state('about', {
                url: "/about",
                templateUrl: "views/about.html"
            })
            .state('courses', {
                url: "/courses",
                templateUrl: "views/courses.html",
                controller: "coursesCtrl",
                controllerAs: "ctrl"
            })
            .state('courses-show', {
                url: "/courses/:courseId",
                templateUrl: "views/courses-show.html",
                controller: "coursesShowCtrl",
                controllerAs: "ctrl"
            })
            .state('cart', {
                url: "/cart",
                templateUrl: "views/cart.html",
                controller: "cartsCtrl",
                controllerAs: "ctrl"
            })

    });


