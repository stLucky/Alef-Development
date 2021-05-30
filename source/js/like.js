const TIME_SHOW_POPUP = 2000;

const listCards = document.querySelector('.cats__list');


listCards.addEventListener('click', (evt) => {
  const target = evt.target;
  const isLike = target.classList.contains('like');
  const isActiveLike = target.classList.contains('like--active')
  const currentCard = evt.target.closest('.card')
  const currentPopup = currentCard.querySelector('.card__popup');

  const setPopup = () => {
    currentPopup.classList.add('card__popup--show');

    setTimeout(() => {
      currentPopup.classList.remove('card__popup--show');
    }, TIME_SHOW_POPUP);
  }

  if (isLike ) {
    target.classList.toggle('like--active');

    if (!isActiveLike) {
      setPopup();
    }
  }
})
