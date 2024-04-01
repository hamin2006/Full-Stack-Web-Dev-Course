const buttons = document.getElementsByTagName("button");


for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",function () {
        checkInput(this.innerHTML);
        animate(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    checkInput(event.key);
    animate(event.key);
});

function checkInput(key) {
    switch(key) {
        case 'w':
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case 'a':
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case 's':
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case 'd':
            new Audio("./sounds/tom-4.mp3").play();
            break;
        case 'j':
            new Audio("./sounds/snare.mp3").play();
            break;
        case 'k':
            new Audio("./sounds/crash.mp3").play();
            break;
        case 'l':
            new Audio("./sounds/kick-bass.mp3").play();
            break;
    }
}

function animate(key) {
    var b = document.getElementsByClassName(key)[0];
    b.classList.add("pressed");
    setTimeout(function() {
        b.classList.remove("pressed");
    }, 50);
}