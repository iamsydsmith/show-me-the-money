'use strict';

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
    .controller('coursesShowCtrl', function($http, $state, $stateParams) {
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
                $state.go('cart');
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
                ctrl.cartDetails(ctrl.carts);
            });
        };

        ctrl.cartDetails = function(cartItems) {
            ctrl.itemsInCart = [];
            ctrl.carttemp = cartItems[0].courses;
            ctrl.carttemp.forEach(function(course) {
                $http.get('/api/courses/' + course).then(function(response) {
                    ctrl.itemsInCart.push(response.data);
                    console.log('full description of items in cart:', ctrl.itemsInCart);
                });
            });
        }
        ctrl.getCarts();
    });
