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
        $lastItem: false,
        top: "-17%",
        bottom: "0%",
        left: 0,
        $opacity: 1,
      },
      {
        $zIndex: 6,
        $active: false,
        $lastItem: false,
        top: "60%",
        bottom: "-50%",
        left: "80%",
        $opacity: 1,
      },
      {
        $zIndex: 5,
        $active: false,
        $lastItem: false,
        top: "50%",
        bottom: "0%",
        left: "100%",
        $opacity: 0,
      },
      {
        $zIndex: 4,
        $active: false,
        $lastItem: false,
        top: "50%",
        bottom: "0%",
        left: "100%",
        $opacity: 0,
      },
      {
        $zIndex: 3,
        $active: false,
        $lastItem: false,
        top: "50%",
        bottom: "0%",
        left: "100%",
        $opacity: 0,
      },
      {
        $zIndex: 2,
        $active: false,
        $lastItem: false,
        top: "50%",
        bottom: "0%",
        left: "100%",
        $opacity: 0,
      },
      {
        $zIndex: 1,
        $active: false,
        $lastItem: true,
        top: "50%",
        bottom: "0%",
        left: "-100%",
        $opacity: 0,
      },
    ];


    $("#nextProg").on("click", function () {
      next();
    });

    $("#nextProgramButtonImg").on("click",function(){
      next();
    })

    let prevActived = false;
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
          ["???????????? ??????????????? ?????? ??????????????? ???????????????", "?????????", "6", "?????????"],
          ["???????????? ????????????", "?????????", "7", "?????????"],
          ["?????????????????????????????? ????????????", "?????????", "8", "?????????"],
          ["????????? ?????????", "?????????", "9", "?????????"],
          ["???????????? ??????", "?????????", "9.30", "?????????"],
          ["?????????????????? ?????????????????????", "?????????", "10", "?????????"],
          ["??????????????????", "?????????", "11", "?????????"],
        ];
        $(element)
          .css("zIndex", state.$zIndex)
          .finish()
          .animate(state, setting.speed)
          .find("img")
          .css("opacity", state.$opacity);

        if (state.$active) {
          var titleEl = $("#programTitleContainer").find("h2");
          var timeEl = $("#programTitleContainer").find(".scheduleBoxText");
          var boxEl1 = $("#scheduleBoxContainer").find(".box1");

          $(titleEl).text(textContent[index][0]);
          $(timeEl).text(textContent[index][1]);
          $(boxEl1).text(textContent[index][2]);

          if (textContent[index][0] == "???????????? ??????????????? ?????? ??????????????? ???????????????") {
            $(titleEl).css("fontSize", "4rem");
            $(titleEl).css("width", "90%");
          } else {
            $(titleEl).css("fontSize", "");
            $(titleEl).css("width", "");
          }
        }

        if (state.$active) {
          $("#programTitleContainer").addClass("active");
          var indexValue = index + 1;

          $("#nextProgSlideNumber").text(indexValue);
          if (indexValue === 1) {
            $("#previousProg").css("color", "#be6ad1");
            $("#previousProg").css("pointer-events", "none");
          } else {
            $("#previousProg").css("color", "#fff");
            $("#previousProg").css("pointer-events", "initial");
          }

          if (indexValue === 7) {
            $("#nextProg").css("color", "#be6ad1");
            $("#nextProg").css("pointer-events", "none");
            $("#nextProgramButtonImg").css("pointer-events", "none");
          } else {
            $("#nextProg").css("color", "#fff");
            $("#nextProg").css("pointer-events", "initial");
            $("#nextProgramButtonImg").css("pointer-events", "initial");
          }
          
        } else {
          $("#programTitleContainer").removeClass("active");
        }
      });
    }


    let totalValue = states.length;
    $("#nextProgTotalNumber").text(totalValue);

    function next() {
      states.unshift(states.pop());
      move();
    }
    function autoPlay() {
      timer = setInterval(next, setting.interval);
    }
  };

  $.fn.hiSlideNext = function (options) {
    $(this).each(function (index, ele) {
      slide(ele, options);
    });
    return this;
  };
})(jQuery);
