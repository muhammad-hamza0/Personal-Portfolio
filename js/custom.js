$(document).ready(function(){
    // menus 
    $('ul.menu-bar li a').mouseenter(function(){
      $('ul.menu-bar li a').removeClass('show')
        $(this).addClass('show');
    });

    // Color changer

    $('.dark-mode').click(function(){
        $('body').toggleClass('light-mode')
    });

    // Color changer

    // experience counter 

    let counter = document.querySelectorAll(".numberup");
    let text = document.querySelectorAll(".text");
    let arr = Array.from(counter);
    let arry = Array.from(text);
    arr.map((item) => {
    let count = item.innerHTML;
    item.innerHTML = "";
    let number = 0;
    function countUp() {
        item.innerHTML = number++;
        if (number > count) {
        clearInterval(stop);
        }
    }

    let stop = setInterval(() => {
        countUp();
    }, item.dataset.time / count);
    });

    arry.map((type) => {
    let value = type.innerHTML;
    type.innerHTML = "";
    let point = 0;
    function textRun() {
        type.innerHTML += value.charAt(point++);
        if (value.length < point) {
        clearInterval(stop);
        }
    }

    let stop = setInterval(() => {
        textRun();
    }, type.dataset.time);
    });
    // 
    $('.exp-box').mouseenter(function(){
        $('.exp-box').removeClass('active');
        $(this).addClass('active');
    });

    // experience counter 

    // typing animation 

    var typing=new Typed(".hero-bio h1 span", {
      strings: ["", "Freelancer", "UI/UX Expert", "Web Developer"],
      typeSpeed: 200,
      backSpeed: 40,
      loop: true,
    });

    // typing animation 

    // fancybox 
      $('[data-fancybox="gallery"]').fancybox({
        buttons: [
          "slideShow",
          "thumbs",
          "zoom",
          "fullScreen",
          "close"
        ],
        loop: false,
        protect: true
      });
    // fancybox 

    // portfolio slider 

    $('.porfolio-slider').slick({
        centerMode: true,
        arrows: true,
        dots: false,
        centerPadding: '220px',
        slidesToShow: 3,
        prevArrow: '.port-prev',
        nextArrow: '.port-next',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              centerPadding: '130px',
            }
          },
          {
            breakpoint: 991,
            settings: {
              centerPadding: '250px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              centerPadding: '150px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 575,
            settings: {
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
      
    // portfolio slider 

    // featured box 

    $('.feature-box').mouseenter(function(){
      $('.feature-box').removeClass('active');
      $(this).addClass('active');
    });

    // featured box 

    // color changer 

    $('.color-changer').click(function(){
      $('.color-choice').fadeToggle();
    })
    $('.color-choice').hide();

    $('.color-choice span:first-child').click(function(){
      $('body').addClass('primary')
      $('body').attr('class', 'primary');
    });
    $('.color-choice span:nth-child(2)').click(function(){
      $('body').attr('class', 'green');
    });
    $('.color-choice span:nth-child(3)').click(function(){
      $('body').attr('class', 'blue');
    });
    $('.color-choice span:nth-child(4)').click(function(){
      $('body').attr('class', 'light-brown');
    });
    $('.color-choice span:nth-child(5)').click(function(){
      $('body').attr('class', 'brown');
    });
    $('.color-choice span:nth-child(6)').click(function(){
      $('body').attr('class', 'red');
    }); 
      
    // }
    $('.dark-mode').on('click', function(){
      if ($("body").hasClass("light-mode")) {
        $('.color-choice span:nth-child(5)').click(function(){
          $('body').attr('class', 'brown');
          $('body').addClass('light-mode');
        });
        $('.color-choice span:first-child').click(function(){
          $('body').attr('class', 'primary')
          $('body').addClass('light-mode');
        });
        $('.color-choice span:nth-child(2)').click(function(){
          $('body').attr('class', 'green');
          $('body').addClass('light-mode');
        });
        $('.color-choice span:nth-child(3)').click(function(){
          $('body').attr('class', 'blue');
          $('body').addClass('light-mode');
        });
        $('.color-choice span:nth-child(4)').click(function(){
          $('body').attr('class', 'light-brown');
          $('body').addClass('light-mode');
        });
        $('.color-choice span:nth-child(5)').click(function(){
          $('body').attr('class', 'brown');
          $('body').addClass('light-mode');
        });
        $('.color-choice span:nth-child(6)').click(function(){
          $('body').attr('class', 'red');
          $('body').addClass('light-mode');

        }); 
      } else {
        
      }
    });

    // color changer 

    // contact form 

    $('form.contact-form input, form.contact-form textarea').click(function(){
      $('form.contact-form input, form.contact-form textarea').parent().removeClass('focused');
      $(this).parent().addClass('focused');
    });

    // contact form 

    // bulb 
    $('.dark-mode').click(function(){
      $(this).toggleClass('icon-changer');
    });
});

// mobile menu navigation 

$(document).ready(function() {
  $('.icon-bar').click(function() {
      $(this).toggleClass('icon-bar-click')
      $('.nav-menus').toggleClass('nav-show')
      $('body').toggleClass('overflow-hidden')

  });
  $('ul.menu-bar li').click(function(){
      $('.nav-menus').removeClass('nav-show')
      $('body').removeClass('overflow-hidden')
      $('.icon-bar').removeClass('icon-bar-click')
  });

});
function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
  progressBarScroll();
};










