$(document).ready(function() {
  $('.animate__fadeInUp').waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        $(this.element).addClass('animate__animated animate__fadeInUp');
      }
    },
    offset: '90%', // Adjust this value as needed
  });
});
$(document).ready(function() {
  $('.navbar-toggler').on('click', function() {
    $('#navbarSupportedContent').collapse('toggle');
  });
});

$(document).on("scroll", function(){
  var pixels = $(document).scrollTop();
  var pageHeight = $(document).height() - $(window).height();
  var progress = 100 * pixels / pageHeight;
  
  $("div.progress").css("width", progress + "%");
})
