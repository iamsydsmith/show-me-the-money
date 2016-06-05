angular.module('coursesApp',[]);

angular.module('coursesApp')
.controller('coursesCtrl', function($http){
  console.log('coursesCtrl is alive!');

    var ctrl = this;
    ctrl.courses = [];

  ctrl.getCourses = function() {
    $http.get('/api/courses').then(function(response) {
      ctrl.courses = response.data;
    });
  };

  ctrl.getCourses();
});
