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
    // $('.section-heading .section-title, .section-heading .section-desc').each(function() {
    //     if (isScrolledIntoView(this) === true) {
    //         $(this).addClass('animated fadeInUp')
    //     }
    // });
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
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./assets/images/character/prev.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./assets/images/character/next.png'>"
  });
$('.story .story-list').slick({
    dots: true,
    arrows:false,
    infinite: false,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./assets/images/character/prev.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./assets/images/character/next.png'>",
    responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
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


$(document).ready(function() {

    
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    console.log($videoSrc);
    
      
      
    $('#videoabout').on('shown.bs.modal', function (e) {
  
    $("#frame_video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;mute" ); 
    })
    $('#videoabout').on('hide.bs.modal', function (e) {
        $("#frame_video").attr('src',$videoSrc); 
    }) 
    });


    
    $(document).ready(function(){
        $(".control-city-view").click(function(){
            $(".content_item_show").removeClass("is-active");
            $(".content-city-view").addClass("is-active");
            $(".how_to_play .btn--close").addClass("is-active");
        })
        $(".how_to_play .btn--close").click(function(){
            $((".content_item_show")).removeClass("is-active");
            $(this).removeClass("is-active");
        })
        $(".control-race").click(function(){
            $(".content_item_show").removeClass("is-active");
            $(".content-race").addClass("is-active");
            $(".how_to_play .btn--close").addClass("is-active");
        })
    })

    $('.library-character .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider-nav-thumbnails',
    });
   
    $('.library-character .slider-nav-thumbnails').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        asNavFor: '.slider',
        dots: false,
        focusOnSelect: true,
        prevArrow:"<div class=\"wrapper-icon icon-left\"><img class='a-left control-c prev slick-prev' src='./assets/images/character/prev.png'></div>",
    nextArrow:"<div class=\"wrapper-icon icon-right\"><img class='a-right control-c next slick-next' src='./assets/images/character/next.png'></div>",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
    ]
    });
   
    // Remove active class from all thumbnail slides
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
   
    // Set active class to first thumbnail slides
    $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');
   
    // On before slide change match active thumbnail to current slide
    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
        $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
   });