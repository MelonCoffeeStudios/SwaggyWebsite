$(function(){ 

// Get dimensions
var dimensions = {
    height:$(document).height(),
    width:$(document).width()
    
    }
    
$(".fullHeight").css("height", dimensions.height+"px");
$(".halfHeight").css("height", (dimensions.height / 2) +"px");
$(".threeQuarterHeight").css("height", ((dimensions.height / 4) * 3) +"px");



$(".fullWidth").css("width", "100%");
$(".halfWidth").css("width", "50%");










});