const $slideContainer = document.querySelector('.content-slideImg');
const $wrapper = document.querySelector('.content-slideImg-wrapper');
const $rightBtn = document.querySelector('.content-slideImg-btn-right');
const $leftBtn = document.querySelector('.content-slideImg-btn-left');
const getImgs = () => document.querySelectorAll('.content-slide-img');
const interval = 5000;
let slides = getImgs();
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

$wrapper.append(firstClone);
$wrapper.prepend(lastClone);

const slidesWidth = slides[index].clientWidth;
$wrapper.style.transform = `translateX(${-slidesWidth * index}px)`;

const startSlide = () => {
  slideId = setInterval(() => {
    index++;
    $wrapper.style.transform = `translateX(${-slidesWidth * index}px)`;
    $wrapper.style.transition = '.7s';
  }, interval);
};
$wrapper.addEventListener('transitionend', () => {
  slides = getImgs();
  if (slides[index].id === firstClone.id) {
    $wrapper.style.transition = 'none';
    index = 1;
    $wrapper.style.transform = `translateX(${-slidesWidth * index}px)`;
  }
  if (slides[index].id === lastClone.id) {
    $wrapper.style.transition = 'none';
    index = slides.length - 2;
    $wrapper.style.transform = `translateX(${-slidesWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getImgs();
  if (index >= slides.length - 1) return;
  index++;
  $wrapper.style.transform = `translateX(${-slidesWidth * index}px)`;
  $wrapper.style.transition = '.7s';
};
const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  $wrapper.style.transform = `translateX(${-slidesWidth * index}px)`;
  $wrapper.style.transition = '.7s';
};
$slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});
$slideContainer.addEventListener('mouseleave', startSlide);

$rightBtn.addEventListener('click', moveToNextSlide);
$leftBtn.addEventListener('click', moveToPreviousSlide);

startSlide();
