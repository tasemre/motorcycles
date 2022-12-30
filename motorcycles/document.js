const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider-image');

slider.addEventListener('change', () => {
  const value = slider.value;

  images.forEach((image, index) => {
    if (index + 1 === value) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }