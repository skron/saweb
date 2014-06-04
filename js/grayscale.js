//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// WAYPOINTS
$(function() {

  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated rotateIn');
  }, {
    offset: '75%'
  });

  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated bounceIn');
  }, {
    offset: '75%'
  });

  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated bounceInLeft');
  }, {
    offset: '75%'
  });

  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated bounceIn');
  }, {
    offset: '75%'
  });
  
  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated rollIn');
  }, {
    offset: '75%'
  });

  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated fadeInUp');
  }, {
    offset: '100%'
  });
  
  $('.wp7').waypoint(function() {
    $('.wp7').addClass('animated bounceInLeft');
  }, {
    offset: '100%'
  });

  $('.wp8').waypoint(function() {
    $('.wp8').addClass('animated fadeInUp');
  }, {
    offset: '100%'
  });  
});
