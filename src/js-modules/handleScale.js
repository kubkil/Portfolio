import TweenLite, { TimelineLite } from 'gsap/TweenMax';

const handleScale = (() => {
  const menu = document.querySelector('.home__links-container');
  const mq = window.matchMedia('(min-width: 450px)');
  const tl = new TimelineLite();

  let scale;

  if (mq.matches) {
    scale = () => {
      tl.fromTo(menu, 0.4, { scale: 0 }, { scale: 1.2 })
        .to(menu, 0.3, {
          scale: 1
        })
        .delay(0.8);
    };
  } else {
    scale = () => {
      TweenLite.from(menu, 0.4, { scale: 0 }).delay(0.8);
    };
  }

  document.addEventListener('DOMContentLoaded', scale);
})();

export default handleScale;
