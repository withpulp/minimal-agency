Template.header.rendered = function () {
  // Hide logo on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 0;
  var navbarHeight = $('.logo').outerHeight();

  $(window).scroll(function(event){
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 0);

  function hasScrolled() {
    var scroll = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - scroll) <= delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (scroll > lastScrollTop && scroll > navbarHeight){
      // Scroll Down
      $('header').removeClass('down').addClass('up');
    } else {
      // Scroll Up
      if (scroll + $(window).height() < $(document).height()) {
        $('header').removeClass('up').addClass('down');
      }
    }

    lastScrollTop = scroll;
  }
}
