import './common/device-init.js';
import './air-balloon.js';
import './envelope.js';
import paperPlay from './paper.js';

let heartEl = document.getElementsByClassName('heart')[0];
heartEl.addEventListener('click', paperPlay);
