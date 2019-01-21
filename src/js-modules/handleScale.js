import TweenLite, { TimelineLite } from 'gsap/TweenMax';

const handleScale = (() => {
  const menu = document.querySelector('.home__links-container');
  const tl = new TimelineLite();

  const winWidth = Math.min(
    window.innerWidth,
    document.documentElement.clientWidth
  );

  let scale;

  if (winWidth > 450) {
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
