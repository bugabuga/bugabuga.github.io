$(window).on("scroll", function() {
	var fix_menu = 70;
	var show_menu = 140;
	var back_anchor = 500;
	var scrollPosition = $(window).scrollTop();
	var header = $('header');
	var back_to_top = $('.js-back-to-top');

	console.log(scrollPosition);

	if (scrollPosition >= fix_menu) {
		// Change menu position when menu hides over the window
		if (!header.hasClass('fixed')) {
			header.addClass('fixed');
		}
	} else {
		if (header.hasClass('fixed')) {
			header.removeClass('fixed menu-close');
		}
	}

	if (scrollPosition >= show_menu) {
		// Show menu with animation
		if (!header.hasClass('menu-open')) {
			header.addClass('menu-open');
			header.removeClass('menu-close');
		}
	} else {
		if (header.hasClass('menu-open')) {
			header.removeClass('menu-open');
			header.addClass('menu-close');
		}
	}

	if (scrollPosition >= back_anchor) {
		// Show back to top button
		if (!back_to_top.hasClass('show')) {
			back_to_top.toggleClass('show');
		}
	} else {
		back_to_top.removeClass('show');
	}
});
