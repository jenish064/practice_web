//making the buttons to listen the clicks: enable event listening
var playButtons = document.querySelectorAll(".set .drum");

for(i = 0; i < playButtons.length; i++){

    //by the button click listening
    playButtons[i].addEventListener("click", function() {

        var keyString = this.innerHTML; //grtting the pressed key as a string to match

        //for changing the button style while being pressed
        var activeKey = document.querySelector("." + keyString);
        activeKey.classList.add("pressed");
        setTimeout(function() {
            activeKey.classList.remove("pressed");
        }, 100);

        switch (this.innerHTML) {
            case "w":
                var audio = new Audio("sounds/crash.mp3");
                audio.play()
                break;

            case "a":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play()
                break;

            case "s":
                var audio = new Audio("sounds/snare.mp3");
                audio.play()
                break;

            case "d":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play()
                break;

            case "j":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play()
                break;

            case "k":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play()
                break;

            case "l":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play()
                break;
        
            default:
                console.log(this.innerHTML);
                break;
        }
               
    });
}

//by the keyboard listening
document.addEventListener("keypress", function(event) { //'event' as a parameter for our anonymous function, it has the properties like which key is pressed etc.

    var keyString = event.key; //grtting the pressed key as a string to match

    //for changing the button style while being pressed
    var activeKey = document.querySelector("." + keyString);
    activeKey.classList.add("pressed");
    setTimeout(function() {
        activeKey.classList.remove("pressed");
    }, 100);
    
    switch (keyString) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play()
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play()
            break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play()
            break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play()
            break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play()
            break;

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play()
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play()
            break;
    
        default:
            console.log(keyString);
            break;
    }
});