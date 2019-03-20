const handleFormPost = (() => {
  const preventSpam = document.querySelector('#spam-prevention');
  const form = document.querySelector('.contact__form');
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');
  const error = document.querySelector('.contact__error');
  const success = document.querySelector('.contact__success');
  const wrongAnswer = document.querySelector('.contact__wrong-answer');
  const button = document.querySelector('.contact__button');

  const changeFormDisplay = response => {
    if (response.status !== 200) {
      form.style.display = 'none';
      error.style.display = 'block';
    } else {
      form.style.display = 'none';
      success.style.display = 'block';
    }
  };

  const sendForm = event => {
    event.preventDefault();
    if (preventSpam.value === '15') {
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
    } else {
      preventSpam.value = '';
      wrongAnswer.style.display = 'block';
    }
  };

  form.addEventListener('submit', e => sendForm(e));
})();

export default handleFormPost;
