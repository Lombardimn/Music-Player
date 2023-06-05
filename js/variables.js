//  Variables de actions---->

const song = [
    {
        name: 'song1',
        displayName: 'In the End',
        artista: 'Linkin Park',
        img:'LinkinPark_HybridTheory',
    },

    {
        name: 'song2',
        displayName: 'Quedate - Music Sessions #52',
        artista: 'QUEVEDO || BZRP',
        img:'bzrquevedo',
    },

    {
        name: 'song3',
        displayName: 'Un finde',
        artista: 'Ke Personajes - FMK - Big One',
        img:'bigone',
    },
];

const image = document.getElementById('img__cover');
const titleSong = document.getElementById('home__title');
const artiste = document.getElementById('home__artiste');
const progressBar = document.getElementById('progressBar');
let progress = document.getElementById('home__avance');
const progressTime = document.getElementById('currentTime');
const totalTime = document.getElementById('totalTime');
const duration = document.getElementById('home__duraction')
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const coverBorder = document.querySelector('.cover__border');

//volume
const sliderCtr = document.getElementById('volume_slider');
const avanceVol = document.getElementById('range__slider');
const voloBtn = document.getElementById('volo');
const volhBtn = document.getElementById('volh');

// Other elements
const bucleBtn = document.getElementById('bucle');

// Single variables
let isPlaying = false; // Check if it is playing
let songIndex = 0;
let repeatBucle = false;



//  Variables de search---->
const searchIcon = document.getElementById('navbar__search');
const searchInput = document.getElementById('search__input');
const clearBtn = document.getElementById('clear__button');
const searchBtn = document.getElementById('search__button');
const blockInput = document.getElementById('search__block');
const microphone = document.getElementById('search__button--mic');
const popup = document.getElementById('modal__article');
let resultList = document.getElementById('resultList');
