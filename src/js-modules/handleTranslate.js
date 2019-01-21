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

  pieMenu.addEventListener('click', translate);
})();

export default handleTranslate;
