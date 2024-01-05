/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */


// // Lấy tham chiếu đến phần tử menu và nút hiển thị menu
// const navMenu = document.getElementById('nav-menu');
// const navShow = document.getElementById('nav-toggle');

// // Hàm để hiển thị menu
// function showMenu() {
//   navMenu.classList.add('show-menu'); // Hiển thị menu bằng cách loại bỏ lớp 'hide'
// }

// // Hàm để ẩn menu
// function hideMenu() {
//   navMenu.classList.remove('show-menu'); // Ẩn menu bằng cách thêm lớp 'hide'
// }

// // Lắng nghe sự kiện khi người dùng nhấp chuột bên ngoài menu
// document.addEventListener('click', function (event) {
//   const targetElement = event.target; // Phần tử mà người dùng nhấp chuột

//   // Kiểm tra nếu người dùng nhấp chuột bên ngoài menu và nút hiển thị menu
//   if (targetElement !== navMenu && targetElement !== navShow) {
//     hideMenu(); // Ẩn menu khi nhấp chuột bên ngoài
//   }
// });




// const navMenu = document.getElementById('nav-menu'),
//   navToggle = document.getElementById('nav-toggle'),
//   navClose = document.getElementById('nav-close');

// if (navToggle) {
//   navToggle.addEventListener('click', () => {
//     navMenu.classList.add("show-menu");
//   })
// }

// if (navClose) {
//   navToggle.addEventListener('click', () => {
//     navMenu.classList.remove("show-menu");
//   })
// }


// <!-- Thêm mã JavaScript sau vào cuối phần <body> của trang HTML của bạn -->

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navMenu = document.getElementById('nav-menu');

  // Thêm sự kiện click vào navToggle để hiển thị navMenu
  navToggle.addEventListener('click', function () {
    navMenu.classList.add('show-menu');
  });

  // Thêm sự kiện click vào navClose để ẩn navMenu
  navClose.addEventListener('click', function () {
    navMenu.classList.remove('show-menu');
  });

  // Thêm sự kiện click ra ngoài để ẩn navMenu
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







