var buttons = document.getElementsByClassName("btn-sound");

var playingNow = false;

[...buttons].forEach((btn => {
    const soundPath = btn.getAttribute("data-sound-path");

    const sound = new Audio(`./sounds/${soundPath}`);

    btn.addEventListener("click", function (event) {
        /*
        if(!playingNow) {
            playingNow = true;
            sound.play();
            setTimeout(() => {
                playingNow = false;
            }, sound.duration * 1000);
        }
        */
       sound.play();
    });
}));
