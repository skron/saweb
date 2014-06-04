
// fadeOut on leave
window.onbeforeunload = function (e) {
    jQuery(document.body).fadeOut(2000);
};

// scroll stick to subsections
var scrollLocked = false;
jQuery(window).bind('DOMMouseScroll mousewheel', function(event) {
	if (scrollLocked) {
		event.preventDefault();
		return false;
	}
	scrollLocked = true;
	var delta;
	if (typeof(event.originalEvent.deltaY) !== "undefined" && event.originalEvent.deltaY !== 0) {
		delta = event.originalEvent.deltaY;
	}
	if (typeof(event.originalEvent.wheelDelta) !== "undefined" && event.originalEvent.wheelDelta !== 0) {
		delta = - event.originalEvent.wheelDelta;
	}
	if (typeof(event.originalEvent.detail) !== "undefined" && event.originalEvent.detail !== 0) {
		delta = event.originalEvent.detail;
	}
	if (delta) {
		event.preventDefault();
		// calculate move
		var $window = jQuery(window);
		var windowScrollTop = $window.scrollTop();
		var windowHeight = $window.height();
		var headerHeight = jQuery(".l-header").height();
		var moveTo;
		jQuery(".l-subsection").each(function() {
			var subSectionOffsetTop = jQuery(this).offset().top;
			if (delta > 0) {
				if ((subSectionOffsetTop >= windowScrollTop + headerHeight + 0.2 * (windowHeight - headerHeight)) && (subSectionOffsetTop <= windowScrollTop + windowHeight)) {
					moveTo = "" + (subSectionOffsetTop - headerHeight);
				} else if (moveTo) {
					return false;
				}
			} else {
				if ((subSectionOffsetTop >= windowScrollTop + headerHeight - windowHeight) && (subSectionOffsetTop <= windowScrollTop - 0.2 * (windowHeight - headerHeight))) {
					moveTo = "" + (subSectionOffsetTop - headerHeight);
					return false;
				}
			}
		});
		if (!moveTo) {
			moveTo = (delta > 0 ? "+" : "-") + "=" + Math.round(0.5 * (windowHeight - headerHeight));
		}
		// animate move
		jQuery("html, body").animate({
			scrollTop: moveTo
		}, 500, "easeInOutCubic", function() {
			scrollLocked = false;
		});
		return false;
	}
	scrollLocked = false;
});
