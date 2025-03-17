import '../scss/style.scss'

const burgerInput = document.querySelector('.burger-input');
const modal = document.querySelector('.modal');

burgerInput.addEventListener('change', () => {
  if (burgerInput.checked) {
    modal.classList.add('active');
  } else {
    modal.classList.remove('active');
  }
});