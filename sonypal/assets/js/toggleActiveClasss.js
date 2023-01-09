var header = document.getElementById("nextProgramSchedule");
var dateBox = header.getElementsByClassName("scheduleBoxDates");
for (var i = 0; i < dateBox.length; i++) {
  dateBox[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("presentSchedule");
    current[0].className = current[0].className.replace(" presentSchedule", "");
    this.className += " presentSchedule";
  });
}

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

// Video modal - nextProgramSection
var modal = document.getElementById("previewVideoModal");

var detailedViewIcon = document.getElementById("detailedViewIcon");

var closeIcon = document.getElementById("modalClose");

// Dont Delete
// detailedViewIcon.addEventListener("click", function () {
//   modal.style.display = "block";
//   var slideNumber = document.getElementById("nextProgSlideNumber");
//   var nextProgVideoContent = document.getElementById("nextProgVideoContent");
//   var slideValue = parseInt(slideNumber.textContent);
//   nextProgVideoContent.src = videoSources[slideValue];
//   nextProgVideoContent.type = "video/mp4";
//   console.log(nextProgVideoContent);
//   nextProgVideoContent.play();

//   closeIcon.onclick = function () {
//     nextProgVideoContent.pause();
//     modal.style.display = "none";
//   };
//   window.onclick = function (event) {
//     if (event.target == modalPromo) {
//       promoVideoContent.pause();
//       modalPromo.style.display = "none";
//     } else if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   };
// });

closeIcon.onclick = function () {
  modal.style.display = "none";
};

// Video modal - promoSection
var modalPromo = document.getElementById("previewPromoModal");

var detailedViewPromoIcon = document.getElementById("detailedViewIconPromo");

var closeIconPromo = document.getElementById("modalPromoClose");

// Dont Delete
// detailedViewPromoIcon.addEventListener("click", function () {
//   modalPromo.style.display = "block";
//   var slideNumber = document.getElementById("nextSlideNumberPromo");
//   var promoVideoContent = document.getElementById("nextPromoVideoContent");
//   var slideValue = parseInt(slideNumber.textContent);
//   promoVideoContent.src = videoSources[slideValue];

//   promoVideoContent.type = "video/mp4";
//   promoVideoContent.play();
//   closeIconPromo.onclick = function () {
//     promoVideoContent.pause();
//     modalPromo.style.display = "none";
//   };
//   window.onclick = function (event) {
//     if (event.target == modalPromo) {
//       promoVideoContent.pause();
//       modalPromo.style.display = "none";
//     } else if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   };
// });

// Code for Toggling SideBarde
$(document).ready(function(){
  $('#menuToggler').click(function(e){
    e.stopPropagation();
    $('#mySidenav').toggleClass('openSideNav');
  });
  
  $('#closeIconBtn').click(function(e){
    e.stopPropagation();
    $('#mySidenav').toggleClass('openSideNav');
  });
  
  $('body,html').click(function(e){
   $('#mySidenav').removeClass('openSideNav');
  });
});
