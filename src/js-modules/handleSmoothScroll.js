import smoothscroll from 'smoothscroll-polyfill';

const handleSmoothScroll = (() => {
  const aboutLink = document.querySelector('.home__link--about');
  const portfolioLink = document.querySelector('.home__link--portfolio');
  const contactLink = document.querySelector('.home__link--contact');
  const aboutSection = document.querySelector('.about');
  const portfolioSection = document.querySelector('.portfolio');
  const contactSection = document.querySelector('.contact');

  const scroll = (e, elem) => {
    e.preventDefault();
    elem.scrollIntoView({
      behavior: 'smooth'
    });
    console.log(e);
  };

  smoothscroll.polyfill();

  aboutLink.addEventListener('click', e => scroll(e, aboutSection));
  portfolioLink.addEventListener('click', e => scroll(e, portfolioSection));
  contactLink.addEventListener('click', e => scroll(e, contactSection));
})();

export default handleSmoothScroll;
