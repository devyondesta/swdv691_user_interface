$(document).ready(function () {
  $('.logo-carousel').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});

$("#search_form").submit(function (event) {
  event.preventDefault();
  var search_query = $("#search").val();
  window.location.href = "search.html?q=" + search_query;
});