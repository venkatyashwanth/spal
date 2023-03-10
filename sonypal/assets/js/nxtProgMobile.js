(function ($) {
  var slide = function (ele, options) {
    var $ele = $(ele);
    var setting = {
      speed: 800,
      interval: 4000,
    };
    $.extend(true, setting, options);
    var states = [
      {
        $zIndex: 7,
        $active: true,
        bottom: "0%",
        left: "0%",
        right: "0%",
        $opacity: 1,
      },
      {
        $zIndex: 6,
        $active: false,
        left: "100%",
        $opacity: 0,
      },
      {
        $zIndex: 5,
        $active: false,
        left: "200%",
        $opacity: 0,
      },
      {
        $zIndex: 4,
        $active: false,
        left: "200%",
        $opacity: 0,
      },
      {
        $zIndex: 3,
        $active: false,
        left: "200%",
        $opacity: 0,
      },
      {
        $zIndex: -1,
        $active: false,
        left: "200%",
        $opacity: 0,
      },
      {
        $zIndex: 1,
        $active: false,
        left: "-100%",
        $opacity: 0,
      },
    ];

    $("#nextMobileProg").on("click", function () {
      next();
    });

    $("#imageRotatorMobileNext").on("swiped-left",(event)=>{
      next();
    })

    $("#previousProg").on("click", function () {
      states.push(states.shift());
      move();
    });
    var $lis = $ele.find(".carouselItems");
    var timer = null;

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

        var textContent = [
          ["तारक मेहता का उल्टा चश्मा", "शाम", "6", "बजे"],
          ["मेरे साईं", "शाम", "7", "बजे"],
          ["विघ्नहर्ता गणेश", "शाम", "8", "बजे"],
          ["शुभ लाभ", "रात", "9", "बजे"],
          ["मैडम सर", "रात", "9.30", "बजे"],
          ["क्राइम पेट्रोल", "रात", "10", "बजे"],
          ["सीआइडी", "रात", "11", "बजे"],
        ];


        $(element)
          .css("zIndex", state.$zIndex)
          .finish()
          .animate(state, setting.speed);

        $(element)
          .css("transform",state.$transform)

        if (state.$active) {
          var titleEl = $("#programTitleContainerMobile").find("h2");
          var timeEl = $("#programTitleContainerMobile").find(
            ".scheduleBoxText"
          );
          var boxEl1 = $("#scheduleBoxContainerMobile").find(".box1");

          $(titleEl).text(textContent[index][0]);
          $(timeEl).text(textContent[index][1]);
          $(boxEl1).text(textContent[index][2]);
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

  $.fn.hiSlideMobileNext = function (options) {
    $(this).each(function (index, ele) {
      slide(ele, options);
    });
    return this;
  };
})(jQuery);
