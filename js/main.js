let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 12,
        width: 1240,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
        width: 1240,
      },
    },

    mousewheel: {
      sensitivity: 1,
    },
  });