
var app = angular.module('app', []);

app.controller('sample', ['$scope', '$parse', '$interpolate', function($scope, $parse, $interpolate){

    $scope.a = 10;
    $scope.b = 20;

    $scope.emp = {
        name: "John",
        address: {
            city: "Austin"
        }
    };

    $scope.demoEval = function() {
        // var r = $scope.$eval(" a * b ");
        // alert("Result: " + r);

        // var r = $scope.$eval(" emp.address.city ");
        // alert(r);

        // var r = $scope.$eval("a * b * 3 * c", {
        //     c: 5,
        //     a: 2
        // });
        // alert(r);

        // var r = $scope.$eval(function(scope, locals){
        //     return scope.a * scope.b * locals.c * locals.a;
        // }, {a:3, c: 2});

        // alert(r);
    }

    $scope.demoParse = function(){
        // var f = $parse(" a * b "); // returns a function
        // var r1 = f($scope);
        // alert("Result = " + r1);

        // var r2 = f({
        //     a: 2,
        //     b: 3
        // });
        // alert("Result = " + r2);

        // alert("Result = " + $parse("a * b")($scope));

        // alert("Result = " + $parse("a * b")({
        //     a: 2,
        //     b: 3
        // }));

        // alert($parse("emp.address.city")($scope));
        $parse("emp.address.city").assign($scope, "Dallas"); // digest cycle kicked in
        // alert($parse("emp.address.city")($scope));




    };

    $scope.demoInterpolate = function(){
        // var f = $interpolate("Result =  {{ a * b }}, Some other result: {{ a * b * 10}}"); // returns a function
        // var r1 = f($scope);
        // alert(r1);

        // alert($interpolate("Result = {{ a * b }}")($scope));

        // alert($interpolate("Result = {{ a * b | currency: '$'}}")($scope));

    }

}]);