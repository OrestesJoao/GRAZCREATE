jQuery(document).ready(function( $){

  window.onscroll = function(){
    if(window.pageYOffset > 140){
      $('#header').addClass("active");
    } else{
      $('#header').removeClass("active");

    }
  };
  //ISOTOPE
  let btns = $("#servicosrecentes .button-group button");
  btns.click(function(e){
    $("#servicosrecentes .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $("#servicosrecentes .grid").isotope({
      filter: selector,
    });
  });
$(window).on("load",function(){
  $("servicosrecentes .grid").isotope({
    filter: "*",
  });
});

  //MAGNIFIC POPUP
  $(".grid .popup-link").magnificPopup({
    type: "image",
    gallery:{
      enabled: true,
      tPrev: "Anterior",
      tNext: "Próxima",
      tCounter: "%curr% de %total%",
    },
  });

  //OWL
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:30,
    autoplay: false,
    autoPlayTimeout: 6000,
    dots:true,
    lazyLoad:true,
    nav:false,
    responsive:{
      0:{
        items:1,
      },
      600: {
        items: 1,
      }, 
      1000: {
        items: 2,
      },
    },
  });
});


