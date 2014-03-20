'use strict';
angular.module('bahmApp.controllers', []).

controller('homeCtrl', ['$scope', '$http', 
	function() {}
]).
controller('resumeCtrl', ['$scope', '$http', 
	function() {}
]).
controller('blogCtrl', ['$scope', '$http', 
	function() {}
]).
controller('projectsCtrl', ['$scope', '$http', 
	function($scope) {
		$scope.projects = [
			{
				'name': 'hungryWSU.com',
				'description': 'Provides WSU students an insight to restaraunts in Pullman that are still open',
				'role': 'Lead Programmer and System Admin',
				'img': 'img/hungryWSU.PNG',
				'url': 'http://hungrywsu.com/'
			},
			{
				'name': 'Wallpaper Manager',
				'description': 'Designed to replace the default windows Wallpaper Manager and provide better multi-screen support. In addition, allow for multiple directories of wallpapers.',
				'github': 'https://github.com/techfreek/WallpaperManager',
			},
			{
				'name': 'LEDs synced to music',
				'description': 'Used an Arduino and an audio analyzer shield to control two RGB Led strips. Currently experiencing hardware problems with the analyzer shield.',
				'github': 'https://github.com/techfreek/ArduinoMusicSyncedLED',
				'url': 'https://www.youtube.com/watch?v=jQ9z0gN9u6Q'
			}
		]
	}
]).
controller('contactCtrl', ['$scope', '$http', 
	function() {}
]);