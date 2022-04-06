$(document).ready(function() {
	let box = $(".box")
	box.hide();
	box.fadeIn({"queue": false, "duration": 1000});
	box.animate({"margin-top": "50px"}, 1000);

	$('.image-carousel').slick({
		centerMode: true,
		centerPadding: '80px',
		slidesToShow: 3,
		focusOnSelect: true,
		responsive: [
			{
			breakpoint: 768,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3,
				dots: true,
			}
			},
			{
			breakpoint: 480,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1,
				dots: true,
			}
			}
		]
	});
	
	
	$("#about-link").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#about").offset().top
		}, 1000);
		window.location.href = "#about";
	});

	$("#gameplay-link").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#gameplay").offset().top
		}, 1000);
		window.location.href = "#gameplay";
	});
		


});