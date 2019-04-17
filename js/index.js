import './common/device-init.js';
import './air-balloon.js';
import './envelope.js';
import paperPlay from './paper.js';

// var myAuto = document.getElementById('myaudio');
// myAuto.play();

let heartEl = document.getElementsByClassName('heart')[0];
heartEl.addEventListener('click', paperPlay);
