(function ($) {
  var slide = function (ele, options) {
    var $ele = $(ele);
    var setting = {
      speed: 1000,
      interval: 4000,
    };
    $.extend(true, setting, options);

    var screensize = screen.width;
    var states = [
      {
        $zIndex: 7,
        $active: true,
        width: "100%",
        height: "100vh",
        top: "0%",
        left: "0%",
        $opacity: 1,
      },
      {
        $zIndex: 6,
        $active: false,
        // width: "70%",
        width: "50%",
        height: "100vh",
        top: "0%",
        left: "50%",
        $opacity: 1,
      },
      {
        $zIndex: 5,
        $active: false,
        width: "70%",
        height: "100vh",
        top: "0%",
        left: "75%",
        $opacity: 1,
      },
      {
        $zIndex: 4,
        $active: false,
        width: "70%",
        height: "100vh",
        top: "0%",
        left: "100%",
        $opacity: 0,
      },
      {
        $zIndex: 3,
        $active: false,
        width: "70%",
        height: "100vh",
        top: "0%",
        left: "100%",
        $opacity: 0,
      },
      {
        $zIndex: -1,
        $active: false,
        width: "70%",
        height: "100vh",
        top: "0%",
        left: "100%",
        $opacity: 0,
      },
      {
        $zIndex: 1,
        $active: false,
        width: "0%",
        height: "100vh",
        top: "0%",
        left: "0%",
        $opacity: 0,
      },
    ];

    if (screensize > 767 && screensize < 992) {
      var states = [
        {
          $zIndex: 7,
          $active: true,
          width: "100%",
          height: "100vh",
          top: "0%",
          left: "0%",
          $opacity: 1,
        },
        {
          $zIndex: 6,
          $active: false,
          width: "0%",
          height: "100vh",

          top: "0%",
          left: "100%",
          $opacity: 0,
        },
        {
          $zIndex: 5,
          $active: false,
          width: "0%",
          height: "100vh",
          top: "0%",
          left: "0%",
          $opacity: 0,
        },
        {
          $zIndex: 1,
          $active: false,
          width: "0%",
          height: "100vh",
          top: "0%",
          left: "0%",
          $opacity: 0,
        },
        {
          $zIndex: 1,
          $active: false,
          width: "0%",
          height: "100vh",
          top: "0%",
          left: "0%",
          $opacity: 0,
        },
        {
          $zIndex: 1,
          $active: false,
          width: "0%",
          height: "100vh",
          top: "0%",
          left: "0%",
          $opacity: 0,
        },
        {
          $zIndex: 1,
          $active: false,
          width: "0%",
          height: "100vh",
          top: "0%",
          left: "0%",
          $opacity: 0,
        },
      ];
    }

    var $lis = $ele.find(".carouselItemsHeader");
    var timer = null;

    $("#hiSlideHeadernext").on("click", function () {
      next();
    });
    // For mobile
    $("#headerSliderTouch").on("swiped-right", (event) => {
      states.push(states.shift());
      move();
    });
    

    $("#hiSlideHeaderprev").on("click", function () {
      states.push(states.shift());
      move();
    });
    // For mobile
    $("#headerSliderTouch").on("swiped-left", (event) => {
      next();
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
    function move() {
      $lis.each(function (index, element) {
        var state = states[index];

        var imageContent = [
          ["./assets/images/tarak_desk_logo.png"],
          ["./assets/images/mereSai_desk_logo.png"],
          ["./assets/images/ganesh_desk_logo.png"],
          ["./assets/images/shubhlabh_desk_logo.png"],
          ["./assets/images/madamsir_desk_logo.png"],
          ["./assets/images/crimepatrol_desk_logo.png"],
          ["./assets/images/cid_desk_logo.png"],
        ];

        $(element)
          .css("zIndex", state.$zIndex)
          .finish()
          .animate(state, setting.speed);

        if (state.$active) {
          $("#presentRunningProgram").empty();
          $("#presentRunningProgram").append(
            `<img class="img-fluid" src=${imageContent[index]} alt="progTitle1">`
          );
        }

        var titleImage = $(element).find(".imageTitle");
        if (state.$active) {
          $(titleImage).addClass("active");
          $(titleImage).removeClass("inactive");
          var indexValue = index + 1;
          $("#headerSlideNumber").text(indexValue);

          if (indexValue === 1) {
            $("#hiSlideHeaderprev").css("color", "#be6ad1");
            $("#hiSlideHeaderprev").css("pointer-events", "none");
          } else {
            $("#hiSlideHeaderprev").css("color", "#fff");
            $("#hiSlideHeaderprev").css("pointer-events", "initial");
          }

          if (indexValue === 7) {
            $("#hiSlideHeadernext").css("color", "#be6ad1");
            $("#hiSlideHeadernext").css("pointer-events", "none");
          } else {
            $("#hiSlideHeadernext").css("color", "#fff");
            $("#hiSlideHeadernext").css("pointer-events", "initial");
          }
        } else {
          $(titleImage).addClass("inactive");
          $(titleImage).removeClass("active");
        }

        // Hide the title
        if (state.$zIndex === 1) {
          $(titleImage).css("opacity", "0");
        } else {
          $(titleImage).css("opacity", "1");
        }
      });
    }

    let totalValue = states.length;
    $("#headerTotalSlideNumber").text(totalValue);

    function next() {
      states.unshift(states.pop());
      move();
    }

    function autoPlay() {
      timer = setInterval(next, setting.interval);
    }
  };

  $.fn.hiSlideHeader = function (options) {
    $(this).each(function (index, ele) {
      slide(ele, options);
    });
    return this;
  };
})(jQuery);
