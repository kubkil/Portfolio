const handleValidation = (() => {
  const validationInput = document.querySelector('#validation');
  const form = document.querySelector('.contact__form');

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
      console.log(dataJSON);

      fetch(url, {
        method: method.toUpperCase(),
        body: data
      })
        .then(res => res.json())
        .catch(err => console.log(err));
    }
  };

  form.addEventListener('submit', e => sendForm(e));
})();

export default handleValidation;
