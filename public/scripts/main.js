'use strict';

var body = document.body;
var html = document.documentElement;

var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

document.getElementById('sidebar').style.height = height + 'px';

var app = {};

// app.hamburger = () => {
//   $('#nav-icon3').click(() => {
//     $('ul').toggleClass('active');
//   });
// }

// app.closeHamburger = () => {
//   $('.header__nav__list__item__link').click(() => {
//     $('ul').removeClass('active');
//     $('#nav-icon3').removeClass('open');
//   });
// }

// app.hamburgerAnimate = () => {
//   $('#nav-icon3').click(function () {
//     $(this).toggleClass('open');
//   });
// }

app.smoothScroll = function () {
  $("a").on('click', function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
};

app.init = function () {
  app.smoothScroll();
  // app.hamburger();
  // app.closeHamburger();
  // app.hamburgerAnimate();
};

$(function () {
  app.init();
});