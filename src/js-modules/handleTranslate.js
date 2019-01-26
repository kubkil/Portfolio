import { TimelineLite } from 'gsap/TweenMax';

const handleTranslate = (() => {
  const sectionMenu = document.querySelector('.home');
  const pieMenu = document.querySelector('.home__menu');
  const xTo = -(0.45 * sectionMenu.clientWidth);
  const yTo = -(0.4 * sectionMenu.clientHeight);
  const tl = new TimelineLite();

  const translate = () => {
    tl.to(pieMenu, 1, { scale: 0.3 });
    tl.to(pieMenu, 1, { x: xTo, y: yTo }, 0);
  };

  const widthChange = mediaQ => {
    if (mediaQ.matches) {
      pieMenu.addEventListener('click', translate);
      console.log('listening');
    } else {
      pieMenu.removeEventListener('click', translate);
      console.log('not listening');
    }
  };

  if (matchMedia) {
    const mq = window.matchMedia('(min-width: 1280px');
    mq.addListener(widthChange);
    widthChange(mq);
  }
})();

export default handleTranslate;
