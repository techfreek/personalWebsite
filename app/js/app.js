'use strict';


// Declare app level module which depends on filters, and services
angular.module('bahmApp', [
  'ngRoute',
  'bahmApp.filters',
  'bahmApp.services',
  'bahmApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
  $routeProvider.when('/resume', {templateUrl: 'partials/resume.html', controller: 'resumeCtrl'});
  $routeProvider.when('/blog', {templateUrl: 'partials/blog.html'});
  $routeProvider.when('/projects', {templateUrl: 'partials/projects.html', controller: 'projectsCtrl'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'contactCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);