import Fullpage from 'fullpage.js';

const handleFullpage = (() => {
  const myFullpage = new Fullpage('#fullpage', {
    licenseKey: '34AAD86E-133F4E86-B264FE61-AE7318D7',
    responsiveWidth: 1280,
    verticalCentered: false
  });
})();

export default handleFullpage;
