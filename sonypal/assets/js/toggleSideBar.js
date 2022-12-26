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
