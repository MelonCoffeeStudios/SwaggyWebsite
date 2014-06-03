$(function(){ 

// Get dimensions
var dimensions = {
    height:$(document).height(),
    width:$(document).width()
    
    }

var menu = false;
    
$(".fullHeight").css("height", "900px");
$(".halfHeight").css("height", "450px");
$(".threeQuarterHeight").css("height", "700px");



$(".fullWidth").css("width", "100%");
$(".halfWidth").css("width", "50%");


$("#menuButton").click(function(){
  if(menu){
    menu = false;
    $("#shadow").removeClass('fadeSIn');
    $("#shadow").addClass('fadeSOut');
    $("#menuCol").removeClass('menuIn');
    $("#menuCol").addClass('menuOut');
  }
  else{
    menu = true;
    $("#shadow").removeClass('fadeSOut');
    $("#shadow").addClass('fadeSIn');
    $("#menuCol").removeClass('menuOut')
    $("#menuCol").addClass('menuIn');
  }
});







});



$(function() {      // Thanks to CSS Tricks for this bit :D
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});