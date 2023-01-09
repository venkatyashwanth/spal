(function ($) {
  var slide = function (ele, options) {
    var $ele = $(ele);
    var setting = {
      speed: 1000,
      interval: 4000,
    };
    $.extend(true, setting, options);

    $(window).resize(function () {
      location.reload();
    });
    var screensize = screen.width;
    var states = [
      {
        $zIndex: 5,
        $active: true,
        width: "50%",
        top: "40%",
        left: "0",
        $opacity: 1,
      },
      {
        $zIndex: 4,
        $active: false,
        width: "25%",
        top: "180%",
        left: "50%",
        $opacity: 1,
      },
      {
        $zIndex: 3,
        $active: false,
        width: "25%",
        top: "180%",
        left: "80%",
        $opacity: 1,
      },
      {
        $zIndex: 2,
        $active: false,
        width: "25%",
        top: "180%",
        left: "100%",
        $opacity: 0,
      },
      {
        $zIndex: 1,
        $active: false,
        width: "25%",
        top: "180%",
        left: "-120%",
        $opacity: 0,
      },
    ];

    if (screensize < 575) {
      var states = [
        {
          $zIndex: 5,
          $active: true,
          width: "100%",
          top: "50%",
          left: "10%",
          $opacity: 1,
        },
        {
          $zIndex: 4,
          $active: false,
          width: "25%",
          top: "70%",
          left: "120%",
          $opacity: 1,
        },
        {
          $zIndex: 3,
          $active: false,
          width: "25%",
          top: "70%",
          left: "120%",
          $opacity: 0,
        },
        {
          $zIndex: 2,
          $active: false,
          width: "25%",
          top: "70%",
          left: "100%",
          $opacity: 0,
        },
        {
          $zIndex: 1,
          $active: false,
          width: "25%",
          top: "70%",
          left: "-120%",
          $opacity: 0,
        },
      ];
    }

    var $lis = $ele.find(".carouselItems");
    var timer = null;
    $("#hiSlidenext").on("click", function () {
      next();
    });

    $("#nextPromoSliderCarousel").on("swiped-left", (event) => {
      next();
    });

    // navigate by clicking on image.
    $("#nextPromoSliderImg").on("click", function () {
      next();
    });

    // Reference
    $("#doublenextPromoSliderImg").on("click", function () {
      doubleNext();
    });

    $("#hiSlideprev").on("click", function () {
      states.push(states.shift());
      move();
    });

    $("#nextPromoSliderCarousel").on("swiped-right", (event) => {
      states.push(states.shift());
      move();
    });

    $ele
      .on("mouseenter", function () {
        clearInterval(timer);
        timer = null;
      })
      .on("mouseleave", function () {
        autoPlay();
      });

    move();
    autoPlay();

    var videoSources = [
      "",
      "./assets/videos/promo_video_1.mp4",
      "./assets/videos/promo_video_2.mp4",
      "./assets/videos/promo_video_3.mp4",
      "./assets/videos/promo_video_4.mp4",
      "./assets/videos/promo_video_5.mp4",
      "./assets/videos/promo_video_6.mp4",
      "./assets/videos/promo_video_7.mp4",
    ];

    function move() {
      $lis.each(function (index, element) {
        var state = states[index];

        $(element)
          .css("zIndex", state.$zIndex)
          .finish()
          .animate(state, setting.speed)
          .find("img")
          .css("opacity", state.$opacity);

        $(element).find("p").css("opacity", state.$opacity);

        if (state.$active) {
          $(element).addClass("active");
          var indexValue = index + 1;
          $("#nextSlideNumberPromo").text(indexValue);
          $("#hiSlideprev").css("color", "#fff");

          // Dont delete functionality - reference
          // if (indexValue === 1) {
          //   $("#hiSlideprev").css("color", "#be6ad1");
          //   $("#hiSlideprev").css("pointer-events", "none");
          // } else {
          //   $("#hiSlideprev").css("color", "#fff");
          //   $("#hiSlideprev").css("pointer-events", "initial");
          // }

          // if (indexValue === states.length) {
          //   $("#hiSlidenext").css("color", "#be6ad1");
          //   $("#hiSlidenext").css("pointer-events", "none");
          //   $("#nextPromoSliderImg").css("pointer-events", "none");
          // } else {
          //   $("#hiSlidenext").css("color", "#fff");
          //   $("#hiSlidenext").css("pointer-events", "initial");
          //   $("#nextPromoSliderImg").css("pointer-events", "initial");
          // }
        } else {
          $(element).removeClass("active");
        }

        if (state.$active) {
          $(element).on("click", function () {
            $("#previewPromoModal").css("display", "block");
            var slideNumber = $("#nextSlideNumberPromo");
            var slideValue = slideNumber.text();
            var sourceFile = videoSources[slideValue];
            $("#nextPromoVideoContent").attr("src", sourceFile);
            $("#nextPromoVideoContent").get(0).play();

            $("#modalPromoClose").click(function () {
              $("#nextPromoVideoContent").get(0).pause();
              $("#previewPromoModal").css("display", "none");
            });

            $(window).on("click", function (event) {
              if (event.target == $("#previewPromoModal")[0]) {
                $("#nextPromoVideoContent").get(0).pause();
                $("#previewPromoModal").css("display", "none");
              }
            });
          });
        } else {
          $(element).off("click");
        }
      });

      let totalLength = states.length;
      $("#nextSlideTotalNumberPromo").text(totalLength);
    }

    function next() {
      states.unshift(states.pop());
      move();
    }

    function doubleNext() {
      states.unshift(states.pop());
      move();
      setTimeout(function(){
        states.unshift(states.pop());
        move();
      },600);
    }
    function autoPlay() {
      timer = setInterval(next, setting.interval);
    }
  };

  $.fn.hiSlide = function (options) {
    $(this).each(function (index, ele) {
      slide(ele, options);
    });
    return this;
  };
})(jQuery);
