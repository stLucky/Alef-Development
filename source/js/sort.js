const sort = document.querySelector('.sort')
const sortPrice = document.querySelector('#sortPrice');
const sortAge = document.querySelector('#sortAge');
const cardsContainer = document.querySelector('.cats__list');
const cards = document.querySelectorAll('.card');

const arrayCards = Array.from(cards);


const onSortClick = (evt) => {
  evt.preventDefault();

  const target = evt.target;

  const isPrice = () => {
    return target === sortPrice;
  };

  const isAge = () => {
    return target === sortAge;
  };

  const isUpPrice = sortPrice.classList.contains('sort__item-content--up');
  const isUpAge = sortAge.classList.contains('sort__item-content--up');

  const getSortPriceCards = () => {
    const sortedCards = arrayCards.sort((a, b) => {
      const priceElA = a.querySelector('.card__price');
      const priceElB = b.querySelector('.card__price');

      const getPrice = (el) => parseInt(el.innerHTML.replace(/ /g, ''));

      if (isUpPrice) {
        return getPrice(priceElB) - getPrice(priceElA);
      }

      return getPrice(priceElA) - getPrice(priceElB);
    });

    return sortedCards;
  }


  const getSortAgeCards = () => {
    const sortedCards = arrayCards.sort((a, b) => {
      const ageElA = a.querySelector('.card__features-item--age .card__features-term');
      const ageElB = b.querySelector('.card__features-item--age .card__features-term');

      const getAge = (el) => parseInt(el.innerHTML.replace(/ /g, ''));

      if (isUpAge) {
        return getAge(ageElB) - getAge(ageElA);
      }

      return getAge(ageElA) - getAge(ageElB);
    });

    return sortedCards;
  }

  const setSortingCards = (sortedCards) => {
    target.classList.toggle('sort__item-content--up');

    // cardsContainer.innerHTML = null;
    sortedCards.forEach(el => cardsContainer.appendChild(el));
  }


  if(isPrice()) {
    setSortingCards(getSortPriceCards());
  }

  if(isAge()) {
    setSortingCards(getSortAgeCards());
  }
}


sort.addEventListener('click', onSortClick );
