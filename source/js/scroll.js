const arrowTop = document.querySelector('#arrowTop');


const onArrowClick = (evt) => {
  evt.preventDefault();
  window.scrollTo({
    left: pageXOffset,
    top: 0,
    behavior: 'smooth',
  });

}

window.addEventListener('scroll', () => {
  const isScrolling = pageYOffset > document.documentElement.clientHeight / 2;

  if(isScrolling) {
    arrowTop.classList.add('page__scroll--show')
  }

  if (pageYOffset === 0) {
    arrowTop.classList.remove('page__scroll--show')
  }
})


arrowTop.addEventListener('click', onArrowClick)
