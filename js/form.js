const allReviews = document.querySelector('.reviews__list');
const btnSubmit = document.querySelector('.form__button');
const inputName = document.querySelector('.name');
const input = document.querySelector('.input-group-absolute__input');
const textOfReview = document.querySelector('.form__comments');
const formCheckbox = document.querySelector('.form__checkbox');

btnSubmit.addEventListener('click', createReview);

function createReview() {
  event.preventDefault();

  if (input.value === '' && textOfReview.value === '' && !formCheckbox.checked) {
    alert('Заповніть, будь ласка, всі форми');
  }
  const review = document.createElement('li');
  review.classList.add('reviews__item');
  const name = document.createElement('h3');
  name.classList.add('reviews__name');
  name.textContent = inputName.value;
  const text = document.createElement('p');
  text.classList.add('reviews__text');
  text.textContent = textOfReview.value;
  review.append(name, text);
  allReviews.append(review);
}
