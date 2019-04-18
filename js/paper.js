import animate from './common/animateplus.js';
let paperEl = document.getElementsByClassName('paper-page')[0];

let str = `<h3>周年快乐</h3>
            <p>
              小胖孩，周年快乐，我们已经在一起一年啦 ~~~ <br />
              老公是不是特别好，嘿嘿
              每年都会给你准备周年小惊喜哦
            </p>`;
paperEl.innerHTML = str;

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
