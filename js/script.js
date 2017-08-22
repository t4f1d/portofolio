

$(document).ready(function() {


  setTimeout(function(){
    $('body').addClass('loaded');
  }, 7000);

  /*******************************
  **** FULL SCREEN NAVIGATION ****
  ********************************/

  $('#menu-toggle').click(function() {
    $(this).toggleClass('active');
    $('.logo').toggleClass('logo-menu-open');
    $('.menu-overlay').toggleClass('open');
  });

  $('.main-nav li a').click(function() {
    $('#menu-toggle').removeClass('active');
    $('.logo').removeClass('logo-menu-open');
    $('.menu-overlay').removeClass('open');
  });

  $('a[href="#top"]').click(function() {
    $('#menu-toggle').removeClass('active');
    $('.logo').removeClass('logo-menu-open');
    $('.menu-overlay').removeClass('open');
  });


  /***********************
  *** STICKY NAVIGATION **
  ************************/

  $('.js-section-profile').waypoint(function(direction) {
    if (direction === 'down') {
      //fadeout hide the nav
      // nav must be fadeOut first in order to fadeIn
      $('nav').fadeOut("fast", function() {
        // then add the sticky class to the nav while is hidden
        $('nav').addClass('sticky');
      });
      //show the nav again with the class sticky already added
      $('nav').fadeIn("slow");

    } else {
      //fadeout the nav again
      $('nav').fadeOut("slow", function() {
        //remove the sticky class
        $('nav').removeClass('sticky');
      });
      $('nav').fadeIn();
    }
  }, {
    offset: '0;'
  });


  /***************************************
  *** SCROLL ON HEADER SCROLLING BUTTON **
  ***************************************/

  //-- go to section plans when click on Start training now button
  $('.js-scroll-to-profile').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('.js-section-profile').offset().top
      },
      {
        duration: 1000,
        easing: 'linear'
      })
  });

  //-- go to footer when click on let's talk nav link
  $('a[href="#contact"]').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('html, body').height()
      },
      {
        duration: 1000,
        easing: 'linear'
      })
  });


  /**************************
  *** SCROLL ON NAVIGATION **
  **************************/
  /* https://css-tricks.com/snippets/jquery/smooth-scrolling */

    $(function() {
      $('a[href*="#"]:not([href="#"], [href="#contact"], [href*="#modal-project"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              //substract 100 to anchor 100px from the top
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    /******************************
    *** ANIMATIONS ON PAGE LOAD  **
    *******************************/

    // header animations
    $('.js-wp-animate-logo').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function() {
        $(this).removeClass('animated fadeInDown');
      }
    );

    $('.js-wp-animate-menu').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function() {
        $(this).removeClass('animated fadeInDown');
      }
    );

    $('.js-wp-animate-hero-sub-heading-1').addClass('animated fadeInDown');

    $('.js-wp-animate-hero-main-heading').addClass('animated fadeInDown');

    $('.js-wp-animate-hero-sub-heading-2').addClass('animated fadeInDown');

    $('.js-wp-animate-scroll-container').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function() {
        $(this).removeClass('animated fadeInDown');
      }
    );

    // profile section animations
    $('.js-section-profile').waypoint(function(direction) {
      $('.js-wp-animate-profile-head-shot').addClass('animated slideInRight');
      $('.js-wp-animate-profile-description').addClass('animated slideInLeft');
      $('.js-wp-animate-social-wrapper').addClass('animated fadeInUp');

    }, {
      offset: '200px;'
    });


    // expeience section animations
    $('.js-section-experience').waypoint(function(direction) {
      $('.js-wp-animate-icon').addClass('animated fadeInDown');
      $('.js-wp-animate-experience-sub-heading').addClass('animated fadeInDown');
      $('.js-wp-animate-experience-skills').addClass('animated fadeInDown');

    }, {
      offset: '200px;'
    });



  /*******************************
  ****     ANIMATED MODAL     ****
  ********************************/

  // PROJECT 1
  $("#project-1").animatedModal({
      modalTarget:'modal-project-1',
      animatedIn:'zoomInDown',
      animatedOut:'slideOutDown',
      animationDuration: '.75s',
      color: 'transparent',
      afterOpen: function() {
        $('html, body').addClass('stop-scrolling');
      },
      beforeClose: function() {
        $('#modal-project-1').scrollTop(0);
        $('html, body').removeClass('stop-scrolling');
        $('body').scrollTop($('.js-section-works').offset().top);
      }
  });

  // PROJECT 2
  $("#project-2").animatedModal({
      modalTarget:'modal-project-2',
      animatedIn:'zoomInDown',
      animatedOut:'slideOutDown',
      animationDuration: '.75s',
      color: 'transparent',
      afterOpen: function() {
        $('html, body').addClass('stop-scrolling');
      },
      beforeClose: function() {
        $('#modal-project-2').scrollTop(0);
        $('html, body').removeClass('stop-scrolling');
        $('body').scrollTop($('.js-section-works').offset().top);
      }

  });

  // PROJECT 3
  $("#project-3").animatedModal({
      modalTarget:'modal-project-3',
      animatedIn:'zoomInDown',
      animatedOut:'slideOutDown',
      animationDuration: '.75s',
      color: 'transparent',
      afterOpen: function() {
        $('html, body').addClass('stop-scrolling');
      },
      beforeClose: function() {
        $('#modal-project-3').scrollTop(0);
        $('html, body').removeClass('stop-scrolling');
        $('body').scrollTop($('.js-section-works').offset().top);
      }
  });



});
