var buttons = document.getElementsByClassName("btn-sound");

var playingNow = false;

[...buttons].forEach((btn => {
    const soundName = btn.getAttribute("data-sound-name");

    const sound = new Audio(`./sounds/${soundName}`);

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
