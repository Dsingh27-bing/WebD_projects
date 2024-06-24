

for (var ind=0; ind<document.querySelectorAll(".drum").length;ind++){
    document.querySelectorAll(".drum")[ind].addEventListener("click", handleclick);
    function handleclick(){
        var whichButton= this.innerHTML;
        drumsound(whichButton);
        buttonAnimation(whichButton);
        
}
}



document.addEventListener("keypress",function(event)
{

    drumsound(event.key);
    buttonAnimation(event.key);

});

function drumsound(kpressed){

    switch(kpressed){
        case "w":
            var audio= new Audio("./sounds/crash.mp3");
            break;
        case "a":
            var audio= new Audio("./sounds/kick-bass.mp3");
            break;
        case "s":
            var audio= new Audio("./sounds/snare.mp3");
            break;
        case "d":
            var audio=new Audio("./sounds/tom-1.mp3");
            break;
        case "j":
            var audio= new Audio("./sounds/tom-2.mp3");
            break;
        case "k":
            var audio= new Audio("./sounds/tom-3.mp3");
            break;
        case "l":
            var audio=new Audio("./sounds/tom-4.mp3");
            break;
        default:
            console.log(kpressed);

    }

    audio.play();

}


function buttonAnimation(currentkey){

    var activekey= document.querySelector("."+currentkey);
    activekey.classList.add("pressed");

    setTimeout(function(){
        activekey.classList.remove("pressed");
    },100);


}


