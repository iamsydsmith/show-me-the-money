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

angular.module('coursesApp')
    .controller('coursesCtrl', function($http, $state) {
        console.log('coursesCtrl is alive!');

        var ctrl = this;
        ctrl.courses = [];

        ctrl.getCourses = function() {
            $http.get('/api/courses').then(function(response) {
                ctrl.courses = response.data;
                console.log('ctrl.courses:', ctrl.courses);
            });
        };

        ctrl.goShowPage = function(course) {
            $state.go('courses-show', { courseId: course._id });
        };

        ctrl.getCourses();
    });

angular.module('coursesApp')
    .controller('coursesShowCtrl', function($http, $stateParams) {
        console.log('coursesShowCtrl is alive!');

        var ctrl = this;
        ctrl.course = {};
        ctrl.cart;
        var courseId = $stateParams.courseId;

        $http.get('/api/courses/' + courseId).then(function(response) {
            ctrl.course = response.data;
        });

        ctrl.buy = function() {
            console.log(courseId);
            $http.post('api/carts/buy/' + courseId, {}).then(function(response) {
                console.log('Your updated cart is:', response.data);
                ctrl.cart = response.data;
            });
        }
    });

angular.module('coursesApp')
    .controller('cartsCtrl', function($http, $stateParams) {
        console.log('cartsCtrl is alive!');

        var ctrl = this;
        ctrl.carts = [];

        ctrl.getCarts = function() {
            $http.get('/api/carts').then(function(response) {
                ctrl.carts = response.data;
                console.log('ctrl.carts:', ctrl.carts);
            });
        };


        ctrl.getCarts();
    });
