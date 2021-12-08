$(function () {
	//Popup Как нам связатся
	$(".open-popup").click(function (e) {
		e.preventDefault();
		$(".popup-bg").fadeIn(600);
		$("html").addClass("no-scroll");
	});
	$(".close-popup").click(function () {
		$(".popup-bg").fadeOut(600);
		$("html").removeClass("no-scroll");
	});
	$(".popup-bg").click(function () {
		$(".popup-bg").fadeOut(600);
		$("html").removeClass("no-scroll");
	});
	$(".popup").on("click", function (e) {
		e.stopPropagation();
	});
});
