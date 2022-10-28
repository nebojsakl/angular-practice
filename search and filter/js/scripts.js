
var app = angular
    .module("myModule", [])
    .controller("myController", function($scope) {
    
    
        var employees = [
            
            { name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000, city: "Washington"},
            { name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 45000, city: "New York"},
            { name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 40000, city: "Kentucky"},
            { name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 50000, city: "Los Angeles"},
            { name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 38000, city: "New York"},
            { name: "Drake", dateOfBirth: new Date("July 13, 1995"), gender: "Male", salary: 41000, city: "Georgia"},
            { name: "Lucy", dateOfBirth: new Date("February 2, 1982"), gender: "Female", salary: 56000, city: "Wisconsin"},
            { name: "James", dateOfBirth: new Date("October 15, 1976"), gender: "Male", salary: 60000, city: "Utah"},
            { name: "Martha", dateOfBirth: new Date("November 14, 1990"), gender: "Female", salary: 72000, city: "Boston"},
            { name: "Elenor", dateOfBirth: new Date("December 6, 1988"), gender: "Female", salary: 48000, city: "New Jersey"},
            { name: "Peter", dateOfBirth: new Date("January 22, 1992"), gender: "Male", salary: 105000, city: "Charlotte"},
            { name: "Kate", dateOfBirth: new Date("June 18, 1985"), gender: "Female", salary: 86000, city: "Chicago"},
            { name: "Ethan", dateOfBirth: new Date("March 11, 1996"), gender: "Male", salary: 90000, city: "San Francisco"},
            { name: "Phillip", dateOfBirth: new Date("September 20, 1979"), gender: "Male", salary: 66000, city: "Boston"},
            { name: "Layla", dateOfBirth: new Date("August 8, 1997"), gender: "Female", salary: 49000, city: "Kentucky"}
            
        ];

        var countries = [
            {
                name: "USA",
                cities:[
                    {name: "Washington"},
                    {name: "New York"},
                    {name: "Kentucky"},
                    {name: "Los Angeles"},
                    {name: "Georgia"},
                    {name: "Wisconsin"},
                    {name: "Utah"},
                    {name: "Boston"},
                    {name: "Chicago"},
                    {name: "San Francisco"},
            
                ]
            }
        ];

    $scope.employees = employees;
    $scope.countries = countries;
    $scope.sortColumn = "name";
    $scope.reverseSort = false;
    

    $scope.sortData = function (column){
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false
        $scope.sortColumn = column;
    }
    $scope.getSortClass = function(column){
        if($scope.sortColumn == column){
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
        }
        return '';
    }
 
}); 