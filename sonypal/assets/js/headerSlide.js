(function ($) {
  var slide = function (ele, options) {
    var $ele = $(ele);
    var setting = {
      speed: 400,
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
        width: "70%",
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
        $opacity: 1,
      },
      {
        $zIndex: 3,
        $active: false,
        width: "70%",
        height: "100vh",
        top: "0%",
        left: "100%",
        $opacity: 1,
      },
      {
        $zIndex: 2,
        $active: false,
        width: "70%",
        height: "100vh",
        top: "0%",
        left: "100%",
        $opacity: 1,
      },
      {
        $zIndex: 1,
        $active: false,
        width: "70%",
        height: "100vh",
        top: "0%",
        left: "100%",
        $opacity: 1,
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
          $zIndex: 1,
          $active: false,
          width: "70%",
          height: "100vh",
          top: "0%",
          // left: "100%",
          left: "0%",
          $opacity: 1,
        },
        {
          $zIndex: 1,
          $active: false,
          width: "70%",
          height: "100vh",
          top: "0%",
          // left: "100%",
          left: "0%",
          $opacity: 1,
        },
        {
          $zIndex: 1,
          $active: false,
          width: "70%",
          height: "100vh",
          top: "0%",
          // left: "100%",
          left: "0%",
          $opacity: 1,
        },
        {
          $zIndex: 1,
          $active: false,
          width: "70%",
          height: "100vh",
          top: "0%",
          // left: "100%",
          left: "0%",
          $opacity: 1,
        },
        {
          $zIndex: 1,
          $active: false,
          width: "70%",
          height: "100vh",
          top: "0%",
          // left: "100%",
          left: "0%",
          $opacity: 1,
        },
        {
          $zIndex: 1,
          $active: false,
          width: "70%",
          height: "100vh",
          top: "0%",
          left: "0%",
          $opacity: 1,
        },
      ];
    }

    var $lis = $ele.find(".carouselItemsHeader");
    var timer = null;
    $("#hiSlideHeadernext").on("click", function () {
      next();
    });
    $("#hiSlideHeaderprev").on("click", function () {
      states.push(states.shift());
      move();
    });

    $ele
      .on("mouseenter", function () {
        clearInterval(timer);
        timer = null;
      })
      .on("mouseleave", function () {
        // autoPlay();
      });

    move();
    // autoPlay();
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
        } else {
          $(titleImage).addClass("inactive");
          $(titleImage).removeClass("active");
        }
      });
    }

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
