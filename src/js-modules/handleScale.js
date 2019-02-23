import TweenLite, { TimelineLite } from 'gsap/TweenMax';

const handleScale = (() => {
  const nav = document.querySelector('.nav__links-container');
  const mq = window.matchMedia('(min-width: 500px)');
  const tl = new TimelineLite();

  let scale;

  TweenLite.set(nav, { svgOrigin: '250 250' });

  if (mq.matches) {
    scale = () => {
      tl.fromTo(nav, 0.4, { scale: 0 }, { scale: 1.2 })
        .to(nav, 0.3, {
          scale: 1
        })
        .delay(0.8);
    };
  } else {
    scale = () => {
      TweenLite.from(nav, 0.4, { scale: 0 }).delay(0.8);
    };
  }

  window.onload = scale();
})();

export default handleScale;
