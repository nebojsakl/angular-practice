
var app = angular.module('app', []);

app.controller('calc1', ['$scope', '$rootScope', function($scope, $rootScope){
    
    $scope.a = 10;
    $scope.b = 20;

    $scope.doCalc1Emit1 = function() {
        $scope.$emit("MyCalc1Emit1Event");
    }

    $scope.doCalc1Broadcast1 = function() {
        $scope.$broadcast("MyCalc1Broadcast1Event");
    };

    $scope.doCalc1BroadcastRoot = function() {
        $rootScope.$broadcast("MyCalc1BroadcastRootEvent")
    };

  
    
    $scope.$on("MyCalc1Emit1Event", function(e, data){
        console.log("parent.MyCalc1Emit1Event - raised by emit");
    });

    $rootScope.$on("MyCalc1Emit1Event", function(e, data){
        console.log("root.parent.MyCalc1Emit1Event - raised by emit");
    });

    $rootScope.$on("MyCalc1Broadcast1Event", function(e, data){
        console.log("parent.MyCalc1Emit1Event - raised by emit");
    });

    $scope.$on("MyCalc1BroadcastRootEvent", function(e, data){
        console.log("parent.MyCalc1BroadcastRootEvent - raised by broadcast root");
    });

    $rootScope.$on("MyCalc1BroadcastRootEvent", function(e, data){
        console.log("root.parent.MyCalc1BroadcastRootEvent - raised by broadcast root");
    });

    $scope.$on("MyChildCalc1Emit", function(e, data){
        console.log("parent.MyCalc1Emit1Event - raised by emit");
    });

    $rootScope.$on("MyChildCalc1Emit", function(e, data){
        console.log("root.parent.MyChildCalc1Emit - raised by emit");
    });

    $scope.$on("MyChildCalc1Emit2", function(e, data){
        // console.log("root.parent.MyChildCalc1Emit2, data:a: " + data.a);
        $scope.a = data.a;
        $scope.b = data.b;
    });

}]);

app.controller('calc2', ['$scope', '$rootScope', function($scope, $rootScope){

    $scope.c = 30;
    $scope.d = 40;


    $rootScope.$on("MyCalc1Emit1Event", function(e, data){
        console.log("root.sibling.MyCalc1Emit1Event - raised by emit");
    });

    $scope.$on("MyCalc1BroadcastRootEvent", function(e, data){
        console.log("sibling.MyCalc1BroadcastRootEvent - raised by broadcast root");
    });

    $rootScope.$on("MyCalc1BroadcastRootEvent", function(e, data){
        console.log("root.sibling.MyCalc1BroadcastRootEvent - raised by broadcast root");
    });

    $rootScope.$on("MyChildCalc1Emit", function(e, data){
        console.log("root.sibling.MyChildCalc1Emit - raised by emit");
    });

}]);

app.controller('childcalc1', ['$scope', '$rootScope', function($scope, $rootScope){

    $rootScope.$on("MyCalc1Emit1Event", function(e, data){
        console.log("root.child.MyCalc1Emit1Event - raised by emit");
    });

    $scope.$on("MyCalc1Broadcast1Event", function(e, data){
        console.log("child.MyCalc1Broadcast1Event - raised by broadcast")
    });
    
    $scope.$on("MyCalc1BroadcastRootEvent", function(e, data){
        console.log("child.MyCalc1BroadcastRootEvent - raised by broadcast root");
    });

    $rootScope.$on("MyCalc1BroadcastRootEvent", function(e, data){
        console.log("root.child.MyCalc1BroadcastRootEvent - raised by broadcast root");
    });

    $scope.doChildCalc1Emit = function() {
        $scope.$emit("MyChildCalc1Emit");
    }

    $scope.doChildCalc1Emit2 = function() {
        $scope.$emit("MyChildCalc1Emit2", {a : 100, b: 200});
    };

    $scope.$on("MyChildCalc1Emit", function(e, data){
        console.log("child.MyCalc1Emit1Event - raised by emit");
    });

    $rootScope.$on("MyChildCalc1Emit", function(e, data){
        console.log("root.child.MyChildCalc1Emit - raised by emit");
    });

}]);

app.run(['$rootScope', function($rootScope){

    $rootScope.$on("MyCalc1Emit1Event", function(e, data){
        console.log("root.module.MyCalc1Emit1Event - raised by emit");
    });
    
    $rootScope.$on("MyCalc1BroadcastRootEvent", function(e, data){
        console.log("root.module.MyCalc1BroadcastRootEvent - raised by emit");
    });

    $rootScope.$on("MyChildCalc1Emit", function(e, data){
        console.log("root.module.MyChildCalc1Emit - raised by emit");
    });

}]);
