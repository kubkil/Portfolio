import Fullpage from 'fullpage.js';

const handleFullpage = (() => {
  const myFullpage = new Fullpage('#fullpage', {
    licenseKey: process.env.LICENSE,
    responsiveWidth: 1280,
    verticalCentered: false
  });
})();

export default handleFullpage;
