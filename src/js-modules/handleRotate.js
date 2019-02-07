import TweenLite from 'gsap/TweenMax';
import Draggable from 'gsap/Draggable';

const handleRotate = (() => {
  const nav = document.querySelector('.nav__links-container');
  const face = document.querySelector('.nav__face');
  const aboutLink = document.querySelector('.nav__link--about');
  const portfolioLink = document.querySelector('.nav__link--portfolio');
  const contactLink = document.querySelector('.nav__link--contact');
  const aboutSection = document.querySelector('.about');
  const portfolioSection = document.querySelector('.portfolio');
  const contactSection = document.querySelector('.contact');

  TweenLite.set(nav, { svgOrigin: '250 250' });

  Draggable.create(nav, {
    type: 'rotation',
    dragClickables: true
  });

  let degree = 120;
  const rotate = () => {
    TweenLite.to(nav, 0.5, { rotation: degree });
    degree += 120;
  };

  const rotateLink = matrix => {
    TweenLite.to(nav, 0.5, { transform: matrix });
  };

  const rotateOnScroll = mutation => {
    if (mutation['0'].target.classList.contains('active')) {
      if (mutation['0'].target.matches('.about')) {
        rotateLink('matrix(1,0,0,1,0,0)');
      } else if (mutation['0'].target.matches('.portfolio')) {
        rotateLink(
          'matrix(-0.49999,0.86602,-0.86602,-0.49999,591.5063509461096,158.49364905389027)'
        );
      } else if (mutation['0'].target.matches('.contact')) {
        rotateLink(
          'matrix(-0.5,-0.86602,0.86602,-0.5,158.4936490538905,591.5063509461097)'
        );
      }
    }
  };

  const observer = new MutationObserver(rotateOnScroll);

  const observerOptions = {
    attributes: true
  };

  face.addEventListener('click', rotate);

  aboutLink.addEventListener('click', () => rotateLink('matrix(1,0,0,1,0,0)'));

  portfolioLink.addEventListener('click', () =>
    rotateLink(
      'matrix(-0.49999,0.86602,-0.86602,-0.49999,591.5063509461096,158.49364905389027)'
    )
  );

  contactLink.addEventListener('click', () =>
    rotateLink(
      'matrix(-0.5,-0.86602,0.86602,-0.5,158.4936490538905,591.5063509461097)'
    )
  );
})();

export default handleRotate;
