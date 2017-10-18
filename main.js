// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  $('[data-toggle="tooltip"]').tooltip();

 

$(".typed").typed({
  strings: [" Web UI/UX Designer and Front End Developer Based in Morocco.Take a look at some of my works, <br>and if you like them, feel free to contact me.Let’s create something WOW!"],
  typeSpeed: 1,
  loop: true,
  backDelay: 5000,
  contentType: 'html'
});

window.sr = ScrollReveal();
sr.reveal('.svg', { duration: 3000 }, 100);

sr.reveal('.service1', { 
  duration: 5000,
  origin: 'left',
  distance: '200px'
 });

sr.reveal('.service2', { 
  duration: 5000,
  origin: 'right',
  distance: '200px'
 });

sr.reveal('.img-about', {
  origin: 'left',
  distance: '500px',
  rotate: { x: 360, y: 0, z: 0 },
  duration: 3000,
});
