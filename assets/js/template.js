jQuery(document).ready(function($) {

	var my_nav = $('.navbar-sticky'); 
	
	// Only set up sticky navigation if the element actually exists on the page
	if (my_nav.length > 0) {
		var sticky_navigation_offset_top = my_nav.offset().top;
		
		var sticky_navigation = function(){
			var scroll_top = $(window).scrollTop(); 
			
			if (scroll_top > sticky_navigation_offset_top) { 
				my_nav.addClass( 'stick' );
			} else {
				my_nav.removeClass( 'stick' );
			}   
		};

		// Run on initial load
		sticky_navigation();
		
		// Run on scroll
		$(window).scroll(function() {
			sticky_navigation();
		});
	}

});