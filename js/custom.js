(function($) {

  "use strict";

  // COLOR MODE
  $('.color-mode').click(function() {
    $('.color-mode-icon').toggleClass('active')
    $('body').toggleClass('dark-mode')
  })

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true
  });

  // SMOOTHSCROLL
  $(function() {
    $('.nav-link, .custom-btn-link').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();

  //CURRENT YEAR
  $('#year').text(new Date().getFullYear());

  //CURRENT DOMAIN 
  var currentDomain = window.location.hostname;
  $('#domain').val(`http://${currentDomain}/thanks.html`);

  //DISABLE RIGHTCLICK
  $(document).bind("contextmenu", function(e) {

    return false;
  });

  // F12 Keydown
  $(document).on('keydown', function(e) {
    if (e.which === 123) {
      // location.reload();
      e.preventDefault();
      console.log('The F12 key was pressed!');
    }
  });




})(jQuery);
