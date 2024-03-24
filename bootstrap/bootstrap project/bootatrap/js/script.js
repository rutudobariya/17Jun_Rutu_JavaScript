$(window).scroll(function(){
  var scroll = $(window).scorllTop();

  if (scroll >= 10){
    $(".navbar").addClass("nav-scorll");
  $(".back_to_top").addclass("show_btn")
  } else {
    $(".navbar").removeClass("nav-scorll");
    $(".back_to_top").removeClass("show_btn");
  }
});

$('.testimonial_slider').slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


AOS.init();