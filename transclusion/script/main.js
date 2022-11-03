
var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope){

}]);

app.directive('message1', function(){

    return {
        templateUrl: 'template/msg.html'
    }
})

// Transclusion by using ng-include

app.directive('message2', function(){

    return {
        templateUrl: 'template/msg2.html',
        transclude: true
    }
})

// Transclusion made by using link function

app.directive('message3', function(){

    return {
        templateUrl: 'template/msg5.html',
        transclude: true,
        link: function(scope, iElement, iAttrs, controller, transclude){
            var content = transclude();
            iElement.find("#innerPanel").append(content);
        }
    }
})

// Using directive controller

app.directive('message4', function(){

    return {
        templateUrl: 'template/msg5.html',
        transclude: true,
        controller: function($scope, $element, $attrs, $transclude){
            var content = $transclude();
            $element.find("#innerPanel").append(content);
        }
    }
})

// Using my own transclude directive

app.directive('message5', function(){

    return {
        templateUrl: 'template/msg5.html',
        transclude: true
    }
})

// My own ng-transclude directive - " my-transclude "

app.directive("myTransclude", function(){
    return{
        link: function(scope, iElement, iAttrs, controller, transclude){
            iElement.append(transclude());
        }
    }
})