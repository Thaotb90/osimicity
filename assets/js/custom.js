window.addEventListener("load", function () {
    const menu = document.querySelector(".menu-primary");
    const menuBg = document.querySelector(".menu-bg");
    const menuToggle = document.querySelector(".menu-toggle");
    const menuClose = document.querySelector(".menu-close");
    menuToggle.addEventListener("click", handleToggleMenu);
    function handleToggleMenu(e) {
      menuBg.classList.add("is-active");
      menu.classList.add("is-active");
      menuClose.classList.add("is-active");
    }
    menuClose.addEventListener("click", function () {
      menuBg.classList.remove("is-active");
      menu.classList.remove("is-active");
      this.classList.remove("is-active");
      // change
    });
  });
  $(document).ready(function(){
      $('.header .menu-primary .menu-item').click (function(){
          $('.header .menu-primary .menu-item').removeClass('active');
          $(this).addClass('active');
          $('.menu-close').removeClass('is-active');
          $('.menu-primary').removeClass('is-active');
          $('.menu-bg').removeClass('is-active');
      })
      
  })
/* Animated Titles of Sections*/

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {
    $('.section-heading .section-title, .section-heading .section-desc').each(function() {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animated fadeInUp')
        }
    });
    $('.section-heading .boxed-img').each(function() {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animated zoomIn')
        }
    });
    $('#character .character-active').each(function() {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animated fadeInLeft')
        }

    });
    $('#character .character-nav').each(function() {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animated fadeInRight')
        }

    });


});

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("nav.fixed-top").removeClass("change-height", 1000);
	} else {
		$("nav.fixed-top").addClass("change-height", 1000);
	}
});

$(document).ready(function(){
    $('.header .navbar-nav .nav-link').click(function(){
        $('.header .navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    })
})

$(document).ready(function(){
    $('#navbarSupportedContent .nav-link').click(function(){
        $('#navbarSupportedContent').removeClass('show');
    })
});


// Scroll to top animated button

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scroll-up').fadeIn();
    } else {
        $('.scroll-up').fadeOut();
    }
});

         // Back to top smooth scroll

         $('button.navbar-toggler').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top                                                                                                                                         }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });


$('.character-list').slick({
    dots: false,
    arrows:true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
  fade: true,
  cssEase: 'linear',
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./assets/images/character/chevron-back-outline.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./assets/images/character/chevron-forward-outline.svg'>"
  });
$('.team-slider').slick({
    dots: false,
    arrows:true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./assets/images/character/chevron-back-outline.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./assets/images/character/chevron-forward-outline.svg'>",
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
    ]
  });
 


  // AOS.init({
  //   offset: 400, // offset (in px) from the original trigger point
  //   delay: 0, // values from 0 to 3000, with step 50ms
  //   duration: 1000 // values from 0 to 3000, with step 50ms
  // });



$(window).on("load", function(){
  $(".loader-wrapper").fadeOut("slow");
});