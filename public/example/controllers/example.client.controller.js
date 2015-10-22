//angular.module() retrieves the example module
//controller() creates a new ExampleController constructor function
angular.module('example').controller('ExampleController', ['$scope', 'Authentication', function($scope, Authentication) {
	$scope.name = Authentication.user ? Authentication.user.fullName : 'MEAN Application'; //Used the $scope object to define a name property, which will be used in view
  }
]);