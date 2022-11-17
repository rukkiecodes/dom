const _emailField = document.querySelector('.emailField');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

_emailField.addEventListener('focus', () => {
  _emailField.previousElementSibling.classList.add('raise')
  _emailField.previousElementSibling.querySelector('i').classList.add('raiseIcon')
  _emailField.nextElementSibling.classList.add('activeLabel')
})



_emailField.addEventListener('keypress', () => {
  if (!_emailField.value.match(emailRegex)) {
    _emailField.previousElementSibling.classList.remove('raise')
    _emailField.previousElementSibling.querySelector('i').classList.remove('raiseIcon')
    _emailField.nextElementSibling.classList.remove('activeLabel')

    _emailField.previousElementSibling.classList.add('raiseError')
    _emailField.previousElementSibling.querySelector('i').classList.add('raiseIconError')
    _emailField.nextElementSibling.classList.add('activeLabelError')
    _emailField.classList.add('inputError')
  } else {
    _emailField.previousElementSibling.classList.add('raise')
    _emailField.previousElementSibling.querySelector('i').classList.add('raiseIcon')
    _emailField.nextElementSibling.classList.add('activeLabel')

    _emailField.previousElementSibling.classList.remove('raiseError')
    _emailField.previousElementSibling.querySelector('i').classList.remove('raiseIconError')
    _emailField.nextElementSibling.classList.remove('activeLabelError')
    _emailField.classList.remove('inputError')
  }
})


_emailField.addEventListener('blur', () => {
  _emailField.previousElementSibling.classList.remove('raise')
  _emailField.previousElementSibling.querySelector('i').classList.remove('raiseIcon')
  _emailField.nextElementSibling.classList.remove('activeLabel')
})