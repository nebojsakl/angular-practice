
var app = angular.module('app', []);

app.controller('emp', ['$scope', function($scope){
    $scope.a = 1;
    $scope.b = 2;
    $scope.c = 4;

    $scope.o = {
        a: 1,
        b: 2,
        c: 4
    }

    // $scope.$watch("o", function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.o.c = $scope.o.a * $scope.o.b;
    //     }
    // }, true);

    // $scope.$watchGroup(['o.a', 'o.b'], function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.o.c = $scope.o.a * $scope.o.b;
    //     }
    // });
    
    // $scope.updateC = function(){
    //     $scope.c = $scope.a * 4;
    // };

    // $scope.$watch("a", function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.b = $scope.a * 2;
    //     }
    // });

    // $scope.$watch("b", function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.c = $scope.b * 2;
    //     }
    // }); 

    // $scope.$watchGroup(['a', 'b'], function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.c = $scope.a * $scope.b;
    //         console.log("Updated C to " + newValue);
    //     }
    // });
}]);

