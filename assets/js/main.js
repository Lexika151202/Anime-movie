/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navMenu = document.getElementById('nav-menu');

  // Add click event to navToggle to show navMenu
  navToggle.addEventListener('click', function () {
    navMenu.classList.add('show-menu');
  });

  // Add click event to navToggle to hide navMenu
  navClose.addEventListener('click', function () {
    navMenu.classList.remove('show-menu');
  });

  window.addEventListener('click', function (event) {
    if (!navMenu.contains(event.target) && event.target !== navToggle) {
      navMenu.classList.remove('show-menu');
    }
  });
});


/*=============== SCROLL HEADER ===============*/

window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  const scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


/*=============== BRAND SWIPER ===============*/
var brandSwiper = new Swiper(".brand-swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    452: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },
});

/*=============== ANIME SWIPER ===============*/

//-----special------//
var animeSwiper = new Swiper(".special__anime .anime-swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    452: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },

  navigation: {
    nextEl: '.special__anime .swiper-button-next',
    prevEl: '.special__anime .swiper-button-prev',
  },
});


//-----popular------//
var animeSwiper = new Swiper(".popular__anime .anime-swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    452: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },

  navigation: {
    nextEl: '.popular__anime .swiper-button-next',
    prevEl: '.popular__anime .swiper-button-prev',
  },
});


//-----treding------//
var trendingSwiperAnime = new Swiper(".trending__anime .anime-swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    452: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },

  navigation: {
    nextEl: '.trending__anime .swiper-button-next',
    prevEl: '.trending__anime .swiper-button-prev',
  },
});







