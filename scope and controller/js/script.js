
var app = angular
    .module("demo", [])

    .controller("countryController", function(){
        this.name = "USA";
    })

    .controller("stateController", function(){
        this.name = "Washington";
    })

    .controller("cityController", function(){
        this.name = "Washington DC";
    })

    .controller("redController", function($scope, $rootScope){
        $scope.red = "I'm red color.";
        $rootScope.rootScopeColor = "I'm Root scope color."
    })

    .controller("greenController", function($scope){
        $scope.green = "I'm green color."
    })