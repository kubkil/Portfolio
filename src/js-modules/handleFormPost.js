import { hasError, showError } from './handleValidation';
const handleFormPost = (() => {
  const form = document.querySelector('.contact__form');
  const name = document.querySelector('.contact__input--name');
  const email = document.querySelector('.contact__input--email');
  const message = document.querySelector('.contact__input--message');
  const preventSpam = document.querySelector(
    '.contact__input--spam-prevention'
  );
  const postError = document.querySelector('.contact__post-error');
  const postSuccess = document.querySelector('.contact__post-success');
  const button = document.querySelector('.contact__button');

  const validateBeforePost = (event, callback) => {
    const fields = [name, email, message, preventSpam];
    let error;
    let hasErrors;

    for (let i = 0; i < fields.length; i++) {
      error = hasError(fields[i]);
      if (error) {
        showError(fields[i], error);
        if (!hasErrors) {
          hasErrors = fields[i];
        }
      }
    }

    if (hasErrors) {
      event.preventDefault();
      hasErrors.focus();
    } else {
      callback(event);
    }
  };

  const changeFormDisplay = response => {
    if (response.status !== 200) {
      form.style.display = 'none';
      postError.style.display = 'block';
    } else {
      form.style.display = 'none';
      postSuccess.style.display = 'block';
    }
  };

  const sendForm = event => {
    event.preventDefault();
      const url = form.getAttribute('action');
      const method = form.getAttribute('method');
      const data = {
        name: name.value,
        email: email.value,
        message: message.value
      };
      const jsonData = JSON.stringify(data);

      button.disabled = true;
      button.classList.add('contact__button--sending');

      fetch(url, {
        method: method.toUpperCase(),
        headers: {
          'Content-Type': 'application/json'
        },
        body: jsonData
      })
        .then(res => changeFormDisplay(res))
        .catch(err => console.log(err));
  };

  form.addEventListener('submit', e => {
    validateBeforePost(e, sendForm);
  });
})();

export default handleFormPost;
