const handleValidation = (() => {
  const validationInput = document.querySelector('#validation');
  const form = document.querySelector('.contact__form');
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');

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
        .then(res => res.json())
        .catch(err => console.log(err));
    }
  };

  form.addEventListener('submit', e => sendForm(e));
})();

export default handleValidation;
