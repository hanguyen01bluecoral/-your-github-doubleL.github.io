

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  slidesPerView: 1.68,
  speed: 1000,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 60
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



var swiper = new Swiper("#mySwiper", {
  autoplay: {
    delay: 3000,
    speed: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  loop: true
});




$(document).ready(function () {
  var slider = $('#slick-demo');

  slider.slick({
    slidesToShow: 5,
    loop: true,
    slidesToScroll: 1,
    autoplay: false,
    spaceBetween: 20,
    speed: 1000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });


  var slider = $('#slick-demo2');

  slider.slick({

    loop: true,
    slidesToScroll: 1,
    autoplay: false,
    spaceBetween: 20,
    speed: 1000,
    dots: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          spaceBetween: 100,
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.inner5').slick({
    slidesToShow: 7, // Số lượng item hiển thị trên mỗi slide
    slidesToScroll: 1, // Số lượng item chuyển đổi khi bạn nhấp vào nút chuyển tiếp/lùi
    autoplay: true, // Tự động chuyển slide
    autoplaySpeed: 0, // Thời gian chuyển slide (ms)
    speed: 6000, //toc do troi
    cssEase: "linear",
    pauseOnDotsHover: true,
    arrows: false, // Ẩn nút chuyển động
    dots: false, // Hiển thị các chấm chuyển động
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  // var slider = $('#event');

  $('#event').slick({
    slidesPerView: 'auto',
    speed: 1000,
    loop: true,
    spaceBetween: 16,
    centeredSlides: true,
    breakpoints: {
      320: {
        loop: false,
        spaceBetween: 16,
        slidesToShow: 2,
        dots: true
      },
      768: {
        loop: true,
        spaceBetween: 20
      },
      1024: {
        loop: true,
        spaceBetween: 30
      },
      1280: {
        loop: true,
        spaceBetween: 40
      }
    }
  });

  var slider = $('#items');

  slider.slick({
    slidesToShow: 3,
    loop: true,
    slidesToScroll: 1,
    autoplay: false,
    spaceBetween: 20,
    speed: 1000,
    dots: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 0,
          spaceBetween: 20

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          // spaceBetween: 100,
          slidesToShow: 2,
        }
      }
    ]
  });


});





$(function () {
  const dropdown = {
      init() {
          dropdown.create();
          dropdown.hoverElement();
      },
      create() {
          const dropdownEle = $("[data-dropdown-element]");
          const dropdownGroup = $("[data-dropdown]");
          if (!dropdownEle.length) return;

          dropdownGroup.each(function(index, el) {
              if($(this).hasClass('on')) {
                  $(this).find('[data-dropdown-content]').stop().slideDown(350);
              }            
          });

          dropdownEle.on('click', function(event) {
              
              var _time = 0;
              var _this = $(this);
              var dropdownContent = _this.parents('[data-dropdown]').find('[data-dropdown-content]');

              if(_this.parent().hasClass('on')) {
                  event.preventDefault();
                  _this.parent().removeClass('on');
                  dropdownContent.stop().slideUp(350);
              } else {
                  event.preventDefault();
                  var dropdownCurrent = _this.parents('[data-dropdown-group]').find('[data-dropdown].on');

                  if(dropdownCurrent.length > 0) {
                      _time = 350;
                      dropdownCurrent.removeClass('on');
                      dropdownCurrent.find('[data-dropdown-content]').stop().slideUp(350);
                  }

                  setTimeout(function() {
                      _this.parent().toggleClass('on');
                      dropdownContent.stop().slideToggle(350);
                  }, _time)
              }
              
          });
      },
      hoverElement() {
          const dropdownHover = $('[data-dropdown-hover]');
          if(dropdownHover.length == 0) return;

          dropdownHover.each(function(index, el) {
              const $this = $(this);
              $this.on('mouseenter', function(event) {
                  if($(window).width() > 1024) {
                      $this.find('[data-dropdown-element]').trigger('click');
                  }
              });

              $this.on('mouseleave', function(event) {
                  if($(window).width() < 1024) {
                      if($this.find('[data-dropdown]').hasClass('on')) {
                          $this.find('[data-dropdown-element]').trigger('click');
                      }
                  }
              });            
          });
      }
  };

  dropdown.init();
});