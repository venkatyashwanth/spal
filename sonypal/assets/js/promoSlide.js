(function ($) {
  var slide = function (ele, options) {
    var $ele = $(ele);
    var setting = {
      speed: 400,
      interval: 3000,
    };
    $.extend(true, setting, options);

    var screensize = screen.width;
    var states = [
      {
        $zIndex: 5,
        $active: true,
        width: "50%",
        top: "50%",
        // left: 0,
        left: "0",
        $opacity: 1,
      },
      {
        $zIndex: 4,
        $active: false,
        width: "25%",
        top: "70%",
        left: "50%",
        $opacity: 1,
      },
      {
        $zIndex: 3,
        $active: false,
        width: "25%",
        top: "70%",
        left: "80%",
        $opacity: 1,
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
    
    if (screensize < 575){
      var states = [
        {
          $zIndex: 3,
          $active: true,
          width: "100%",
          top: "50%",
          left: "10%",
          $opacity: 1,
        },
        {
          $zIndex: 2,
          $active: false,
          width: "25%",
          top: "70%",
          left: "120%",
          $opacity: 1,
        },
        {
          $zIndex: 1,
          $active: false,
          width: "25%",
          top: "70%",
          left: "120%",
          $opacity: 1,
        }
      ];
    }



    var $lis = $ele.find(".carouselItems");
    var timer = null;
    $("#hiSlidenext").on("click", function () {
      next();
    });
    $("#hiSlideprev").on("click", function () {
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
    function move() {
      $lis.each(function (index, element) {
        var state = states[index];

        $(element)
          .css("zIndex", state.$zIndex)
          .finish()
          .animate(state, setting.speed)
          // .find("img")
          .css("opacity", state.$opacity);

        //   $(element).addClass(state.$active);
        if (state.$active) {
          $(element).addClass("active");
          var indexValue = index + 1;
          $("#nextSlideNumberPromo").text(indexValue);
        } else {
          $(element).removeClass("active");
        }
      });

      let totalLength = states.length;
      $("#nextSlideTotalNumberPromo").text(totalLength);

      //   $lisCont.each(function (index, element) {
      //     var state = statesCont[index];
      //     console.log(element)
      //     $(element)
      //       .css("zIndex", state.$zIndex)
      //       .finish()
      //       .animate(state, setting.speed)
      //       .find("img")
      //       .css("opacity", state.$opacity);
      //   });
    }

    function next() {
      states.unshift(states.pop());
      move();
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
