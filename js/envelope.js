import animate from './common/animateplus.js';
var el = document.getElementsByClassName('envelope-page')[0];

const play = async () => {
  const options = await animate({
    elements: el,
    duration: 3000,
    transform: ['translateY(-100vh)', 0]
  });
};
window.onload = function() {
  setTimeout(() => {
    play();
  }, 2000);
};