import animate from './common/animateplus.js';
let paperEl = document.getElementsByClassName('paper-page')[0];

let str = `<h3>周年快乐</h3>
            <p>
              小胖孩，周年快乐 ~~~ <br />
              嘿嘿 <br />
              以后每年都会给你准备周年小惊喜哦
            </p>
            <h5>爱你的  洋  2019.4.18</h5>`;
paperEl.innerHTML = str;

const paperPlay = async () => {
  await animate({
    elements: paperEl,
    duration: 1000,
    transform: ['scale(0)', 1]
  });
};

export default paperPlay;
