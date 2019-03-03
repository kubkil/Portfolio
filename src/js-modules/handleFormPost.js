const handleValidation = (() => {
  const validationInput = document.querySelector('#validation');
  const form = document.querySelector('.contact__form');
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');
  const error = document.querySelector('.contact__error');
  const success = document.querySelector('.contact__success');
  const wrongAnswer = document.querySelector('.contact__wrong-answer');
  const button = document.querySelector('.contact__button');

  const sendForm = event => {
    event.preventDefault();
    if (validationInput.value === '15') {
      const url = form.getAttribute('action');
      const method = form.getAttribute('method');
      const data = {
        name: name.value,
        email: email.value,
        message: message.value
      };
      const jsonData = JSON.stringify(data);

      fetch(url, {
        method: method.toUpperCase(),
        headers: {
          'Content-Type': 'application/json'
        },
        body: jsonData
      })
        .then(res => {
          if (res.status !== 200) {
            form.style.display = 'none';
            error.style.display = 'block';
          } else {
            form.style.display = 'none';
            success.style.display = 'block';
          }
        })
        .catch(err => console.log(err));
    }
  };

  form.addEventListener('submit', e => sendForm(e));
})();

export default handleValidation;
