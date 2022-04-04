$(document).on("ready", () => {
  $("header,.info").ripples({
    dropRadius: 25,
    perturbance: 0.8,
  });

  $(".navbar-toggler").on("click", () => {
    $(".navbar-toggler").toggleClass("change");
  });
});

$(document).ready(($) => {
  $(".parent-container").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: { enabled: true },
  });

  $('.carrosel').slick({
    centerMode:true,
    centerPadding:'30px',
    slidesToShow:3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode:true,
          centerPadding:'40px',
          slidesToShow:3
        }
      },{
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode:true,
          centerPadding:'40px',
          slidesToShow:1
        }
      }
    ]
  })

  $('.photos').slick({
    dots: true,
    autoplay:true,
    autoplaySpeed:700,
    speed:true,
    infinite: true,
    speed: 500,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  });

  $(window).scroll(() =>  {
    let position  = $(this).scrollTop();

    if(position >= 718){
      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
    }
  })

  $(window).scroll(() =>  {
    let position  = $(this).scrollTop();

    if(position >= 718){
      $('#back-top').addClass('scroll-top');
    } else {
      $('#back-top').removeClass('scroll-top');
    }
  })
})