const header = document.querySelector('.header');
const headerBtn = header.querySelector('.header__btn');
const defaultLabelBurger = headerBtn.ariaLabel;

header.classList.remove('header--nojs');

headerBtn.addEventListener('click', (evt => {
  evt.preventDefault();

  header.classList.toggle('header--opened');

  if (header.classList.contains('header--opened')) {
    headerBtn.ariaLabel = 'Закрыть меню';

    headerBtn.classList.add('burger--close');
  } else {
    headerBtn.ariaLabel = defaultLabelBurger;

    headerBtn.classList.remove('burger--close');
  }
}))
