/**
 *   Created by: Yuri Borovik
 *   Email: yuri.borovik@gmail.com
 *   Date: 27.10.2015
 *   Time: 11:51
 *
 */
(function (angular, app) {
	'use strict';
	app.directive('ltVolumeRange', [function () {
		return {
			restrict: 'EA',
			templateUrl: 'ltVolumeRange.html',
			replace: true
		};
	}]);
	app.directive('ngMouseWheelUp', function () {
		return function (scope, element, attrs) {
			element.bind('DOMMouseScroll mousewheel onmousewheel', function (event) {
				
				// cross-browser wheel delta
				var event = window.event || event; // old IE support
				var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail || -event.originalEvent.detail)));
				
				if (delta > 0) {
					scope.$apply(function () {
						scope.$eval(attrs.ngMouseWheelUp);
					});
					
					// for IE
					event.returnValue = false;
					// for Chrome and Firefox
					if (event.preventDefault) {
						event.preventDefault();
					}
					
				}
			});
		};
	});
	app.directive('ngMouseWheelDown', function () {
		return function (scope, element, attrs) {
			element.bind('DOMMouseScroll mousewheel onmousewheel', function (event) {
				
				// cross-browser wheel delta
				var event = window.event || event; // old IE support
				var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail || -event.originalEvent.detail)));
				
				if (delta < 0) {
					scope.$apply(function () {
						scope.$eval(attrs.ngMouseWheelDown);
					});
					
					// for IE
					event.returnValue = false;
					// for Chrome and Firefox
					if (event.preventDefault) {
						event.preventDefault();
					}
					
				}
			});
		};
	});
})(window.angular, angular.module('app.ui'));	
