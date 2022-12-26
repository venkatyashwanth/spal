// For development only;

// let menuToggler = document.getElementById("menuToggler");
// let closeIconBtn = document.getElementById("closeIconBtn");
// let bodyElement = document.getElementsByTagName("body")[0];


// menuToggler.addEventListener("click", function () {
//   document.getElementById("mySidenav").style.width = "250px";
// });

// closeIconBtn.addEventListener("click", function () {
//   document.getElementById("mySidenav").style.width = "0px";
// });

$(document).ready(function(){
  $('#menuToggler').click(function(e){
    e.stopPropagation();
    $('#mySidenav').toggleClass('openSideNav');
    console.log('work');
  });
  
  $('#closeIconBtn').click(function(e){
    e.stopPropagation();
    $('#mySidenav').toggleClass('openSideNav');
  });
  
  $('body,html').click(function(e){
   $('#mySidenav').removeClass('openSideNav');
  });
});
