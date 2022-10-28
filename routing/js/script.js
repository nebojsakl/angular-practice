
 var app = angular

    .module("demo", ["ui.router"])
    .config(function ($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider){

        $urlRouterProvider.otherwise("/home");
        $urlMatcherFactoryProvider.caseInsensitive(true);
        $stateProvider
    
        .state("home", {
            url:"/home",
            templateUrl: "templates/home.html",
            controller:"homeController as homeCtrl",
            data : {
                customData1 : "Home state custom data 1",
                customData2 : "Home state custom data 2"
            }
        })

        .state("courses", {
            url:"/courses",
            templateUrl: "templates/courses.html",
            controller:"coursesController as coursesCtrl",
            data : {
                customData1 : "Courses state custom data 1",
                customData2 : "Courses state custom data 2"
            }
        })

        .state("students", {
            url:"/students", 
            templateUrl: "templates/students.html",
            controller:"studentsController as studentsCtrl"
        })

        $locationProvider.html5Mode(true);

    })


    .controller("homeController", function($state){
        this.message = "Home Page";

        this.homeCustomData1 = $state.current.data.customData1;
        this.homeCustomData2 = $state.current.data.customData2;

        this.coursesCustomData1 = $state.get("courses").data.customData1;
        this.coursesCustomData2 = $state.get("courses").data.customData2;
    })

    .controller("coursesController", function(){
        this.courses = ["Angular", "JAVA", "C#", "Scala"];
    })

    .controller("studentsController", function(){
        this.message = ["Ben", "Maya", "Frank", "Lucy"];
    });