$(function () {
  $(".main-slider__inner").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  var productMixer = mixitup(".week-product__list", {
    selectors: {
      control: ".week-product__btn",
    },
  });
  var desidnMixer = mixitup(".design__list", {
    selectors: {
      control: ".design__btn",
    },
  });
});
