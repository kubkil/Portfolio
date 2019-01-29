import Fullpage from 'fullpage.js';

const handleFullpage = (() => {
  const myFullpage = new Fullpage('#fullpage', {
    licenseKey: process.env.LICENSE,
    responsiveWidth: 1280,
    verticalCentered: false,
    scrollBar: true
  });

  const aboutSection = document.querySelector('.about');
  const portfolioSection = document.querySelector('.portfolio');
  const contactSection = document.querySelector('.contact');
  const sections = [aboutSection, portfolioSection, contactSection];

  const handleAutoHeight = mediaQ => {
    if (mediaQ.matches) {
      if (
        !sections.forEach(section =>
          section.classList.contains('fp-auto-height')
        )
      ) {
        sections.forEach(section => section.classList.remove('fp-auto-height'));
        console.log('class removed');
      }
    } else {
      sections.forEach(section => section.classList.add('fp-auto-height'));
      console.log('class added');
    }
  };

  if (matchMedia) {
    const mq = window.matchMedia('(min-width: 769px)');
    mq.addListener(handleAutoHeight);
    handleAutoHeight(mq);
  }
})();

export default handleFullpage;
