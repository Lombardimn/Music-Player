// Functions ---->

// Play
function playSong(){
    isPlaying = true;
    playBtn.setAttribute('class', 'fa-solid fa-pause');
    music.play()
};

// Pause
function pauseSong(){
    isPlaying = false;
    playBtn.setAttribute('class', 'fa-solid fa-play');
    music.pause()
};

// Previous
function prevSong(){
    songIndex--;
    if (songIndex < 0){
        songIndex = song.length - 1;
    }

    loadSong(song[songIndex]);
    playSong();
};

// Next
function nextSong(){
    songIndex++;
    if (songIndex > song.length - 1){
        songIndex = 0;
    }

    loadSong(song[songIndex]);
    playSong();
};

// Reading
function loadSong(song){
    titleSong.textContent = song.displayName;
    artiste.textContent = song.artista;
    music.src = `multimedia/music/${song.name}.mp3`;
    image.src = `multimedia/img/covers/${song.img}.jpg`;
    coverBorder.style.background = `url(./multimedia/img/covers/${song.img}.jpg)`;
    coverBorder.style.backgroundSize = 'cover';
};

// Progress and Duraction
function updateProgressBar(e){
    if (isPlaying) {

        // Updates the progress bar
        const {duration, currentTime} = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        
        progress.style.width = `${progressPercent}%`;

        let durationMin = Math.floor(duration / 60);
        let durationSec = Math.floor(duration % 60);

        if (durationSec < 10){
            durationSec = `0${durationSec}`;
        }

        if (durationSec) {
            totalTime.textContent = `${durationMin} : ${durationSec}`;
        }

        // We calculate the progress and reflect the value
        let currentMin = Math.floor(currentTime / 60);
        let currentSec = Math.floor(currentTime % 60);

        if (currentSec < 10){
            currentSec = `0${currentSec}`;
        }

        if (currentSec) {
            progressTime.textContent = `${currentMin} : ${currentSec}`;
        }
    }
};

// Show progress
function setProgressBar(e) {
    let width = this.clientWidth;
    let clickX = e.offsetX;
    let {duration} = music;
    music.currentTime = (clickX / width) * duration;
}

// Volume visual and control
function customSlider(){
    let maxVal = sliderCtr.getAttribute('max');
    let volValue = (sliderCtr.value / maxVal) * 100;

    avanceVol.style.width = (volValue / 100) * 200 + 'px';
}

function zeroVol(){
    if (sliderCtr.value == 0){
        volhBtn.style.display = 'none';
        voloBtn.setAttribute('class', 'fa-solid fa-volume-xmark');
        sliderCtr.style.display = 'none';
        avanceVol.style.display = 'none';
    };
}

function restarVol(){
    volhBtn.style.display = 'block';
    voloBtn.setAttribute('class', 'fa-solid fa-volume-off');
    sliderCtr.style.display = 'block';
    sliderCtr.value = '0.50';
    avanceVol.style.display = 'block';
    music.volume = '0.50';
    customSlider();
}

// Bucle

function bucle(){
    if (repeatBucle == false){
        bucleBtn.style.color = '#2C3E50';
        repeatBucle = true;
    } else{
        bucleBtn.style.color = '#F39C12';
        repeatBucle = false;
    }
}

//  Events ---->

// Reproduction
playBtn.addEventListener('click', () =>(isPlaying ? pauseSong() : playSong()));
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressBar.addEventListener('click', setProgressBar);
bucleBtn.addEventListener('click', bucle);

loadSong(song[songIndex]);

// Volume
customSlider();
sliderCtr.addEventListener('input', ()=>{
    customSlider();
    zeroVol();
    music.volume = sliderCtr.value;
});

voloBtn.addEventListener('click', ()=>{
    restarVol();
})