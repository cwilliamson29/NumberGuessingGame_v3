app.controller('PlayerController', function($scope) {
    $scope.p1name = {name: 'Player 1'};
    $scope.p1guess = {guess: 0};
    $scope.p1score = {score: 0};

    $scope.p2name = {name: 'Player 2'};
    $scope.p2guess = {guess: 0};
    $scope.p2score = {score: 0};

    $scope.p3name = {name: 'Player 3'};
    $scope.p3guess = {guess: 0};
    $scope.p3score = {score: 0};

    $scope.p4name = {name: 'Player 4'};
    $scope.p4guess = {guess: 0};
    $scope.p4score = {score: 0};
    
    $scope.dname = {name: 'Dealer'};
    $scope.dscore = {score: 0};
    $scope.dguess = {guess: 0};
    $scope.dealerNum = function(){
        $scope.dguess = {guess: Math.floor((Math.random() * 10) + 1)};
    };
    
    $scope.player2Box = {show: true};
    $scope.player3Box = {show: true};
    $scope.player4Box = {show: true};
    
    $scope.toggle1Player = function(){
        $scope.player2Box.show = false;
        $scope.player3Box.show = false;
        $scope.player4Box.show = false;
    };
    $scope.toggle2Player = function(){
        $scope.player2Box.show = true;
        $scope.player3Box.show = false;
        $scope.player4Box.show = false;
    };
    $scope.toggle3Player = function(){
        $scope.player2Box.show = true;
        $scope.player3Box.show = true;
        $scope.player4Box.show = false;
    };
    $scope.toggle4Player = function(){
        $scope.player2Box.show = true;
        $scope.player3Box.show = true;
        $scope.player4Box.show = true;
    };
});
