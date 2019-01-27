import TweenLite from 'gsap/TweenMax';
import Draggable from 'gsap/Draggable';

const handleRotate = (() => {
  const nav = document.querySelector('.nav__links-container');

  TweenLite.set(menu, { svgOrigin: '250 250' });

  Draggable.create(menu, {
    type: 'rotation',
    dragClickables: true
  });

  let degree = 120;
  const rotate = () => {
    TweenLite.to(menu, 0.5, { rotation: degree });
    degree += 120;
  };

  const rotateLink = matrix => {
    TweenLite.to(menu, 0.5, { transform: matrix });
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
