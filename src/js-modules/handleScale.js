import TweenLite, { TimelineLite } from 'gsap/TweenMax';

const handleScale = (() => {
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelector('.nav__links-container');
  const mq = window.matchMedia('(min-width: 500px)');
  const tl = new TimelineLite();

  const showNav = () => {
    nav.style.opacity = '1';
  };

  let scale;
  // https://greensock.com/forums/topic/19467-draggable-transform-origin/?tab=comments#comment-90427
  TweenLite.set(navLinks, { svgOrigin: '250 250' });

  if (mq.matches) {
    scale = () => {
      tl.fromTo(navLinks, 0.4, { scale: 0 }, { scale: 1.2 })
        .to(navLinks, 0.3, {
          scale: 1
        })
        .delay(0.8);
    };
  } else {
    scale = () => {
      TweenLite.from(navLinks, 0.4, { scale: 0 }).delay(0.8);
    };
  }

  scale();
  // window.onload = scale();
})();

export default handleScale;
