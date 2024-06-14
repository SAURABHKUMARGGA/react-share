// console.log($);
$(document).ready(function() {
    // console.log($('#fullpage'));
	$('#fullpage').fullpage({
        autoScrolling:true,
        // scrollHorizontally: true,
        navigation: true,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
 	    menu: '#myMenu'
    });
    // $.fn.fullpage.setAllowScrolling(false);
});