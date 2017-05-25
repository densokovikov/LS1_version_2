(function() {
  'use strict';

//переворот плашки на welcome
    $(".autoriz").on("click", function(flip) {
        $(".info-block").addClass("flap");
        setTimeout(function(){
        $(".autoriz").addClass("clicked");
    },3000);
        flip.stopPropagation()
    });

    $(".welcome-wrapper").on("click", function(flip) {
    	if( $(event.target).closest(".info-block").length )return;
	      	$(".info-block").removeClass("flap");
	        $(".autoriz").removeClass("clicked");
        flip.stopPropagation()
    });

})();