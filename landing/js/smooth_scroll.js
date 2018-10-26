(function($) {
	"use strict"; // Start of use strict

	// Smooth scrolling using jQuery easing
	$('a.nav-link[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			console.log(target);
			if (target.length) {
				if ($(window).width() > 768) {
					$('html, body').animate({
						scrollTop: (target.offset().top - 34)
					}, 1000, "easeInOutExpo");
				} else {
					$('html, body').animate({
						scrollTop: (target.offset().top - 34)
					}, 0, "easeInOutExpo");
				}
				return false;
			}
		}
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#navigation',
		offset: 54
	});

})(jQuery); // End of use strict