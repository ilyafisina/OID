document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
      direction: 'vertical', // Вертикальное направление слайдов
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true, // Переключение слайдов с помощью прокрутки мыши
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });
  