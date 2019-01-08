import TweenLite from 'gsap/TweenMax';
import Draggable from 'gsap/Draggable';

const handleRotate = (() => {
  const menu = document.querySelector('.home__links-container');
  const face = document.querySelector('.home__face');

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

  face.addEventListener('click', rotate);
})();

export default handleRotate;
