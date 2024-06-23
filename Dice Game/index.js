window.onload = function() {
    if (performance.navigation.type === 1) {
        game();
    }
};

function game(){


    var arr= ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];

    var player1= Math.floor(Math.random()*(arr.length));
    var player2= Math.floor(Math.random()*(arr.length));

    document.querySelector(".img1").setAttribute("src",arr[player1]);
    document.querySelector(".img2").setAttribute("src",arr[player2]);

    if (player1==player2){
        document.querySelector("h1").innerHTML="Draw!";
    }
    else if(player1>player2){
        document.querySelector("h1").innerHTML="🚩Player1 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML="Player2 Wins!🚩";
    }

}