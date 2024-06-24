var buttonColours= ["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern =[];
var level=0;

function nextSequence(){
    userClickedPattern=[];
    
    $("h1").text("Level "+ level);
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    
    
}

$(".btn").click(function(){
    handler($(this).attr("id"));
});

$(document).on("keypress", function(){
    startOver();
    nextSequence();
})

function handler(keys){
    
        var userChosenColour= keys;
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length-1);
    
    

}

function playSound(name){
    var audio = new Audio("./sounds/"+ name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed")
    },100);

}

function startOver(){
    gamePattern=[];
    level =0;
}

function checkAnswer(currentLevel){
    console.log(userClickedPattern,gamePattern);

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    
    }
    else{
        console.log("Failure");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver()
    }

    
}