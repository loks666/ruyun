$(function() {
	// ========== header ==========
	$(window).on("scroll", function() {
		if($(document).scrollTop() > 60) {
			$("header").css({
				"-webkit-box-shadow": "0 0 9px rgba(0, 0, 0, .2)",
				"-moz-box-shadow": "0 0 9px rgba(0, 0, 0, .2)",
				"box-shadow": "0 0 9px rgba(0, 0, 0, .2)",
				"background": "rgba(36, 42, 55, 1)",
				"border-bottom": "1px solid rgba(255, 255, 255, 0)"
			})
		} else {
			$("header").css({
				"transition": ".5s ease-out",
				"-webkit-box-shadow": "0 0 9px rgba(0, 0, 0, 0)",
				"-moz-box-shadow": "0 0 9px rgba(0, 0, 0, 0)",
				"box-shadow": "0 0 9px rgba(0, 0, 0, 0)",
				"background": "rgba(36, 42, 55, 0)",
				"border-bottom": "1px solid rgba(255, 255, 255, .2)"
			})
		}
	});
  // ========== subnav-show ==========
  $(".subnav-show").owlCarousel({
    items: 3,
    dots: false,
    margin: 10,
    stagePadding: 20,
    loop: false
  });  
	// ========== culture-show ==========
  $(".culture-show").owlCarousel({
    items: 1,
    margin: 10
  });
	// ========== num ==========
  $(".num").numScroll();
});