/* eslint-disable consistent-return */
let hasError;
let showError;

const handleValidation = (() => {
  const form = document.querySelector('.contact__form');
  const name = document.querySelector('.contact__input--name');
  const email = document.querySelector('.contact__input--email');
  const message = document.querySelector('.contact__input--message');
  const preventSpam = document.querySelector(
    '.contact__input--spam-prevention'
  );
  const fields = [name, email, message, preventSpam];

  form.setAttribute('novalidate', true);

  hasError = field => {
    // eslint-disable-next-line prefer-destructuring
    const validity = field.validity;

    if (validity.valid) return '';
    if (validity.valueMissing) return 'Please fill out this field.';
    if (validity.typeMismatch) return 'Please enter an email address.';
    if (validity.tooShort) {
      if (field.name === 'name') {
        return `Please lengthen the name. The minimum number of characters is ${field.getAttribute(
          'minLength'
        )}.`;
      }
      if (field.name === 'message') {
        return `Please lengthen the message. The minimum number of characters is ${field.getAttribute(
          'minLength'
        )}.`;
      }
    }
    if (validity.tooLong)
      return `Please shorten the name. The maximum number of characters is ${field.getAttribute(
        'maxLength'
      )}.`;
    if (validity.rangeOverflow || validity.rangeUnderflow)
      return 'Please give a correct number';
    return 'The value you entered for this field is invalid.';
  };

  showError = (field, error) => {
    field.classList.remove('contact__input--ok');
    field.classList.add('contact__input--error');
    const fieldId = field.id;
    const errorMessage = document.querySelector(`.contact__error--${fieldId}`);

    field.setAttribute('aria-describedby', `aria-error-${fieldId}`);
    errorMessage.innerHTML = error;
    errorMessage.style.visibility = 'visible';
  };

  const removeError = field => {
    field.classList.remove('contact__input--error');
    field.classList.add('contact__input--ok');
    field.removeAttribute('aria-describedby');
    const fieldName = field.name;
    const errorMessage = document.querySelector(
      `.contact__error--${fieldName}`
    );
    errorMessage.innerHTML = '';
    errorMessage.style.visibility = 'hidden';
  };

  fields.forEach(field =>
    field.addEventListener(
      'blur',
      e => {
        const error = hasError(e.target);

        if (error) {
          showError(e.target, error);
        } else {
          removeError(e.target);
        }
      },
      true
    )
  );
})();

export { hasError, showError };
export default handleValidation;
