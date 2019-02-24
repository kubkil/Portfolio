import { TimelineLite } from 'gsap/TweenMax';

const handleTranslate = (() => {
  const homeSection = document.querySelector('.home');
  const pieMenu = document.querySelector('.nav__menu');
  const pieLink = document.querySelector('.nav__link');
  const yTo = -(0.4 * homeSection.clientHeight);
  const tl = new TimelineLite();
  const animation = tl
    .to(pieMenu, 0.7, { scale: 0.3, x: xTo, y: yTo }, 0)
    .reverse();

  const translate = () => {
    if (animation.reversed) {
      animation.play();
    }
  };

  const toggleTranslate = mutation => {
    if (mutation['0'].target.classList.contains('active')) {
      animation.reverse();
    } else {
      animation.play();
    }
  };

  const observer = new MutationObserver(toggleTranslate);

  const observerOptions = {
    attributes: true
  };

  const widthChange = mediaQ => {
    if (mediaQ.matches) {
      observer.observe(homeSection, observerOptions);
      pieMenu.addEventListener('click', translate);
    } else {
      observer.disconnect();
      pieMenu.removeEventListener('click', translate);
    }
  };

  if (matchMedia) {
    const mq = window.matchMedia('(min-width: 1280px');
    mq.addListener(widthChange);
    widthChange(mq);
  }
})();

export default handleTranslate;
