import animate from './common/animateplus.js';
let envelopeEl = document.getElementsByClassName('envelope-page')[0];

const envelopePlay = async () => {
  await animate({
    elements: envelopeEl,
    duration: 3000,
    transform: ['translateY(-100vh)', 0]
  });
};

export default envelopePlay;