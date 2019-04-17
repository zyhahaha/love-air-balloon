import animate from './common/animateplus.js';
let paperEl = document.getElementsByClassName('paper-page')[0];

const paperPlay = async () => {
  await animate({
    elements: paperEl,
    duration: 1000,
    transform: ['scale(0)', 1]
  });
};

// document.addEventListener('click', () => {
//   paperPlay();
// });

export default paperPlay;
