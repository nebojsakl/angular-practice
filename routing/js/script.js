
 angular.module("demo", ["ngRoute"])
    .config(function ($routeProvider){

        $routeProvider
    
        .when("/home", {
            templateUrl: "templates/home.html",
            controller:"homeController as homeCtrl"
        })

        .when("/courses", {
            templateUrl: "templates/courses.html",
            controller:"coursesController as coursesCtrl"
        })

        .when("/students", {
            templateUrl: "templates/students.html",
            controller:"studentsController as studentsCtrl"
        })

        

    })


    .controller("homeController", function(){
        this.message = "Home Page";
    })

    .controller("coursesController", function(){
        this.courses = ["Angular", "JAVA", "C#", "Scala"];
    })

    .controller("studentsController", function(){
        this.message = ["Ben", "Maya", "Frank", "Lucy"];
    });