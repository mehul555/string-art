console.log("images.js");
// Initialise Carousel
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
  Dots: false,
});

// Thumbnails
const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
  Sync: {
    target: mainCarousel,
    friction: 0,
  },
  Dots: false,
  Navigation: false,
  center: true,
  slidesPerPage: 1,
  infinite: false,
});

// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
  Carousel: {
    on: {
      change: (that) => {
        mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
          friction: 0,
        });
      },
    },
  },
});
// Initialise Carousel
const mainCarousel1 = new Carousel(document.querySelector("#mainCarousel1"), {
  Dots: false,
});

// Thumbnails
const thumbCarousel1 = new Carousel(document.querySelector("#thumbCarousel1"), {
  Sync: {
    target: mainCarousel1,
    friction: 0,
  },
  Dots: false,
  Navigation: false,
  center: true,
  slidesPerPage: 1,
  infinite: false,
});

// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery2"]', {
  Carousel: {
    on: {
      change: (that1) => {
        mainCarousel1.slideTo(mainCarousel1.findPageForSlide(that1.page), {
          friction: 0,
        });
      },
    },
  },
});
// Initialise Carousel
const mainCarousel2 = new Carousel(document.querySelector("#mainCarousel2"), {
  Dots: false,
});

// Thumbnails
const thumbCarousel2 = new Carousel(document.querySelector("#thumbCarousel2"), {
  Sync: {
    target: mainCarousel2,
    friction: 0,
  },
  Dots: false,
  Navigation: false,
  center: true,
  slidesPerPage: 1,
  infinite: false,
});

// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery2"]', {
  Carousel: {
    on: {
      change: (that1) => {
        mainCarousel1.slideTo(mainCarousel1.findPageForSlide(that1.page), {
          friction: 0,
        });
      },
    },
  },
});
