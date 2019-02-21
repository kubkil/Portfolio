const handleValidation = (() => {
  const validationInput = document.querySelector('#validation');
  const form = document.querySelector('.contact__form');
  const name = document.querySelector('#name');
  const email = document.querySelector('#name');
  const message = document.querySelector('#message');

  const sendForm = event => {
    event.preventDefault();
    if (validationInput.value === '15') {
      const data = new FormData(form);
      let dataJSON = {};
      for (const [key, value] of data) {
        dataJSON[key] = value;
      }
      const url = form.getAttribute('action');
      const method = form.getAttribute('method');
      const data = {
        name: name.value,
        email: email.value,
        message: message.value
      };
      const jsonData = JSON.stringify(data);
      // const formData = new FormData(this);
      // const searchParams = new URLSearchParams();

      // for (const pair of formData) {
      //   searchParams.append(pair[0], pair[1]);
      // }

      fetch(url, {
        method: method.toUpperCase(),
        body: jsonData
      })
        .then(res => res.json())
        .catch(err => console.log(err));
    }
  };

  form.addEventListener('submit', e => sendForm(e));
})();

export default handleValidation;
