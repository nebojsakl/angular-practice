
var app = angular.module("app", []);

app.controller("appController", ['$scope', '$timeout', function($scope, $timeout){

    var words = ["sword", "pool", "school", "elevator", "bag", "track"];
    $scope.incorrectLetters = [];
    $scope.correctLetters = [];

    $scope.guesses = 6;
    $scope.displayWord = '';

    $scope.input = {

        letter : ''
    }

    var selectRandomWord = function(){

        var index = Math.floor(Math.random() * words.length);
        return words[index];
    }

    var newGame = function(){

        $scope.incorrectLetters = [];
        $scope.correctLetters = [];
        $scope.guesses = 6;
        $scope.displayWord = '';

        selectedWord = selectRandomWord();
        var tempDisplayWord = '';
        for (var i = 0; i < selectedWord.length; i++) {

            tempDisplayWord += '*';
        }
        console.log(selectedWord);
        $scope.displayWord = tempDisplayWord;
        
    }

    $scope.letterChosen = function(){

        for (var i = 0; i < $scope.correctLetters.length; i++){

            if($scope.correctLetters[i].toLowerCase() == $scope.input.letter.toLowerCase()){
                $scope.input.letter = "";
                return;
            }
            
        }

        for (var i = 0; i < $scope.incorrectLetters.length; i++){

            if($scope.incorrectLetters[i].toLowerCase() == $scope.input.letter.toLowerCase()){
                $scope.input.letter = "";
                return;
            }
        }

        var correct = false;
        for (var i = 0; i <= selectedWord.length - 1; i++) {
            if(selectedWord[i].toLowerCase() == $scope.input.letter.toLowerCase()){
                
                $scope.displayWord = $scope.displayWord.slice( 0, i ) + $scope.input.letter.toLowerCase() + $scope.displayWord.slice( i + 1 );
                correct = true;
                
            }
            
        }

        if(correct) {

            $scope.correctLetters.push($scope.input.letter.toLowerCase());
        } else {

            $scope.guesses--;
            $scope.incorrectLetters.push($scope.input.letter.toLowerCase());
        }

        $scope.input.letter = "";
        if ($scope.guesses == 0){

            $timeout(function(){
                newGame();
            }, 500);

            alert("GAME OVER!");
        }

        if ($scope.displayWord.indexOf("*") == -1) {

            $timeout(function(){
                newGame();
            }, 500);

            alert("Congratulations! You guessed the word!");
        }
    }

    newGame();

}])