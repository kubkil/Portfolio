const handleValidation = (() => {
  const validationInput = document.querySelector('#validation');
  const form = document.querySelector('.contact__form');

  form.addEventListener('submit', e => {
    if (!(validationInput.value === '6')) e.preventDefault();
  });
})();

export default handleValidation;
