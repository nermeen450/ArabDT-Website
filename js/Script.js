$('.slick-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  // autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
});


/* $(document).ready(function() {
  $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');
    if(value=="all"){
      $('.filter').show('1000');

    }
    else{
      $(".filter").not('.'+value).hide('3000');
      $(".filter").not('.'+value).show('3000');
    }
  });
    if($(".filter-button").removeClass("active")){
      $(this).removeClass("active");
    }

    $(this).addClass("active");



}) */
