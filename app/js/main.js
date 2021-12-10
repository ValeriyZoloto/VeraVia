//Полифил для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

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

	//Popup Записатся на ознакомительный семинар
	//Открытие
	$(".header__btn").on("click", function () {
		$(".popup-introductory-bg").fadeIn(600);
	});

	//Закрытие по кнопке закрыть
	$(".close-popup--introductory").on("click", function () {
		$(".popup-introductory-bg").fadeOut(600);
	});

	//Закрытие по фейду
	$(".popup-introductory-bg").on("click", function () {
		$(".popup-introductory-bg").fadeOut(600);
	});

	//Остановка закрытия при нажатии на форму
	$(".popup-introductory__form").on("click", function (e) {
		e.stopPropagation();
	});
	//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	//Стилизация select
	//Dropdown
	document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
		//Кнопка
		const dropDownBtn = dropDownWrapper.querySelector(
			".popup__form-select"
		);

		//Список
		const dropDownList = dropDownWrapper.querySelector(
			".popup__form-selectlist"
		);

		//Элементы списка li
		const dropDownListItems = dropDownList.querySelectorAll(
			".popup__form-selectitem"
		);

		//Скрытый инпут
		const dropDownInput =
			dropDownWrapper.querySelector(".selectlist-hidden");

		//Клик по кнопке открыть/закрыть
		dropDownBtn.addEventListener("click", function () {
			dropDownList.classList.toggle("popup__form-selectlist--visible");
			this.classList.add("popup__form-select--active");
		});

		//Выбор элемента списка. Запомнить выбранное значение
		dropDownListItems.forEach(function (listItem) {
			listItem.addEventListener("click", function (e) {
				e.stopPropagation();
				dropDownBtn.innerText = this.innerText;
				dropDownBtn.focus();
				dropDownInput.value = this.dataset.value;
				dropDownList.classList.remove(
					".popup__form-selectlist--visible"
				);
			});
		});

		//Клик снаружи селекта закрыть селект
		document.addEventListener("click", function (e) {
			if (e.target !== dropDownBtn) {
				dropDownBtn.classList.remove("popup__form-select--active");
				dropDownList.classList.remove(
					"popup__form-selectlist--visible"
				);
			}
		});

		//Нажатие на Tab или на Escape
		document.addEventListener("keydown", function (e) {
			if (e.key === "Tab" || e.key === "Escape") {
				dropDownBtn.classList.remove("popup__form-select--active");
				dropDownList.classList.remove(
					"popup__form-selectlist--visible"
				);
			}
		});
	});
});
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//Валидация формы-1
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

//Валидация формы-2
$(document).ready(function () {
	var validName = false;
	var validEmail = false;
	var validTel = false;

	$(".popup-introductory__form").submit(function (event) {
		event.preventDefault();

		var nameOne = $("#name-1").val();
		var tel = $("#tel").val();
		var mailOne = $("#email-1").val();

		if (nameOne == "") {
			$(".popup-errorname-bg").fadeIn(100);
		} else {
			validName = true;
		}

		if (tel == "") {
			$(".popup-errorname-bg").fadeIn(100);
		} else {
			validTel = true;
		}

		if (mailOne == "") {
			$(".popup-errorname-bg").fadeIn(100);
		} else {
			validEmail = true;
		}

		if (validName == true && validTel == true && validEmail == true) {
			$(".popup-introductory__form").unbind("submit").submit();
			$(".popup-sucsses-bg").fadeIn(100);
		} else {
		}
	});
});
