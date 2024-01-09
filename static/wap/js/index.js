$(function() {
	// ========== loading ==========
	$("#loading").fadeOut();
	// ========== solution-show ==========
	$(".solution-show").owlCarousel({
		items: 1,
		dots: false,
		margin: 10,
		stagePadding: 65,
		autoplay: true, 
		loop: true,		
	});
	// ========== honor-show ==========
  $(".honor-show").owlCarousel({
    items: 3,
    dots: false,
    margin: 10,
    stagePadding: 20,
    loop: false
  });
	// ========== num ==========
  $(".num").numScroll();
	// ========== tabs ==========
	$(".tabs").tabs();
});