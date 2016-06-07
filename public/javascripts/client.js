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
    .state('about',  {
      url:"/about",
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
    });
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
    $state.go('courses-show', { courseId : course._id } );
  };

  ctrl.getCourses();
});

angular.module('coursesApp')
.controller('coursesShowCtrl', function($http, $stateParams) {
  console.log('moviesShowCtrl is alive!');

  var ctrl = this;
  ctrl.course = {};

  $http.get('/api/courses/' + $stateParams.courseId).then(function(response) {
    ctrl.course = response.data;
  });
});
