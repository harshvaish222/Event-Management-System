let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }

});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,       // Shows 3 slides at once for better circular effect
  spaceBetween: 30,       // Space between slides
  coverflowEffect: {
    rotate: 50,           // Adds rotation for circular effect
    stretch: 0,
    depth: 100,
    modifier: 1,          // Reduced for smoother circular motion
    slideShadows: true,
  },
  loop: true,             // Enables infinite loop
  loopedSlides: 3,        // Number of slides to duplicate for smooth loop
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,  // Continues even on hover
  },
  speed: 1000,            // Smooth transition speed (1 second)
  breakpoints: {
    // Responsive breakpoints for different screen sizes
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  // Optional: Add these for enhanced circular effect
  watchSlidesProgress: true,
  on: {
    progress: function() {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        var slideProgress = swiper.slides[i].progress;
        var modify = 1;
        if (Math.abs(slideProgress) > 1) {
          modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
        }
        var translate = slideProgress * modify * 260 + 'px';
        var scale = 1 - Math.abs(slideProgress) / 5;
        var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
        swiper.slides[i].style.transform = 'translateX(' + translate + ') scale(' + scale + ')';
        swiper.slides[i].style.zIndex = zIndex;
        swiper.slides[i].style.opacity = 1;
        if (Math.abs(slideProgress) > 3) {
          swiper.slides[i].style.opacity = 0;
        }
      }
    },
    setTransition: function(speed) {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + 'ms';
      }
    }
  }
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    spaceBetween: 10,
    width: window.innerWidth,  // Fixed to full screen width
    breakpoints: {
      0: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1050: {
        slidesPerView: 3,
        spaceBetween: 20,
      },    
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    on: {
      resize: function () {
        // Update width on window resize
        this.params.width = window.innerWidth;
        this.update();
      }
    }
});