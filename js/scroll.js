
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 250) {
    	$('#contentNoOne').removeClass('hidden');
    	$('#contentNoOne').removeClass('slideFadeOut');
        $('#contentNoOne').addClass('slideFade');

    } else {
        $('#contentNoOne').removeClass('slideFade');
    	$('#contentNoOne').addClass('slideFadeOut');
    }
});