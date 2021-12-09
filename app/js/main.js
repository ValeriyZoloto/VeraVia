$(function () {
	//Popup Как нам связатся
	$(".open-popup").click(function (e) {
		$(".popup-bg").fadeIn(600);
	});
	$(".close-popup").click(function () {
		$(".popup-bg").fadeOut(600);
	});
	$(".popup-bg").click(function () {
		$(".popup-bg").fadeOut(600);
	});
	$(".popup").on("click", function (e) {
		e.stopPropagation();
	});
});

//Валидация формы
$(document).ready(function () {
	var validName = false;
	var validEmail = false;

	$(".popup__form").submit(function (event) {
		event.preventDefault();

		var name = $("#name").val();
		var email = $("#email").val();
		if (name == "") {
			$(".popup-errorname-bg").fadeIn(100);
		} else {
			validName = true;
		}

		if (email == "") {
			$(".popup-errorname-bg").fadeIn(100);
		} else {
			validEmail = true;
		}
		if (validName == true && validEmail == true) {
			$(".popup__form").unbind("submit").submit();
			$(".popup-bg").fadeOut(600);
			$(".popup__btn").on("click", function () {
				$(".popup-sucsses-bg").fadeIn(100);
			});
			$(".popup-sucsses-bg").fadeIn(100);
		}
	});

	//Закрытие sucsses по клику по кнопке закрыть
	$(".close-popup--sucsses").on("click", function () {
		$(".popup-sucsses-bg").fadeOut(100);
	});

	//Закрытие sucsses по клику по трею
	$(".popup-sucsses-bg").click(function () {
		$(".popup-sucsses-bg").fadeOut(100);
	});

	//Закрытие Ошибки по клику по кнопке ОК
	$(".error-btn").on("click", function () {
		$(".popup-errorname-bg").fadeOut(100);
	});

	//Закрытие Ошибки по клику по кнопке Закрытия
	$(".close-popup--error-name").on("click", function () {
		$(".popup-errorname-bg").fadeOut(100);
	});
});
