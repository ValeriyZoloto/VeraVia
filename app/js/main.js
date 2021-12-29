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
	$(".header__btn, .intelligence__btn, .why__btn, .course__btn").on(
		"click",
		function () {
			$(".popup-introductory-bg").fadeIn(600);
		}
	);

	//Закрытие по кнопке закрыть
	$(".close-popup--introductory").on("click", function () {
		$(".popup-introductory-bg").fadeOut(600);
	});

	//Закрытие по фейду
	$(".popup-introductory-bg").on("click", function () {
		$(".popup-introductory-bg").fadeOut(600);
	});

	//Закрытие и перезагрузка формы
	$(".popup-introductory__btn");

	//Остановка закрытия при нажатии на форму
	$(".popup-introductory__form").on("click", function (e) {
		e.stopPropagation();
	});

	//Табы:::::::::
	$(".course-tabs__name-item").on("click", function (e) {
		e.preventDefault();
		$(".course-tabs__name-item").removeClass(
			"course-tabs__name-item--active"
		);
		$(this).addClass("course-tabs__name-item--active");
		$(".course-tabs__content-item").removeClass(
			"course-tabs__content-item--active"
		);
		$($(this).attr("href")).addClass("course-tabs__content-item--active");
	});
	//Слайдеры 1-Adt-slider:::::::::::::::::::::::::::::::::::::::::::::::::
	$(".adt-slider").slick({
		dots: false,
		slidesToShow: 4,
		// variableWidth: true,
		prevArrow:
			'<button type="button" class="slick-prev"><svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_177_2210)"><circle r="31" transform="matrix(-1 0 0 1 44 37)" fill="url(#paint0_linear_177_2210)" shape-rendering="crispEdges"/></g><path d="M55.5303 36.4697C55.8232 36.7626 55.8232 37.2374 55.5303 37.5303L50.7574 42.3033C50.4645 42.5962 49.9896 42.5962 49.6967 42.3033C49.4038 42.0104 49.4038 41.5355 49.6967 41.2426L53.9393 37L49.6967 32.7574C49.4038 32.4645 49.4038 31.9896 49.6967 31.6967C49.9896 31.4038 50.4645 31.4038 50.7574 31.6967L55.5303 36.4697ZM34 36.25H55V37.75H34V36.25Z" fill="white"/><defs><filter id="filter0_d_177_2210" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feMorphology radius="7" operator="erode" in="SourceAlpha" result="effect1_dropShadow_177_2210"/><feOffset dy="7"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.88 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_177_2210"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_177_2210" result="shape"/></filter><linearGradient id="paint0_linear_177_2210" x1="31" y1="0" x2="31" y2="62" gradientUnits="userSpaceOnUse"><stop stop-color="#03E1FF" stop-opacity="0.66"/><stop offset="1" stop-color="#13CDC2"/></linearGradient></defs></svg></button>',

		nextArrow:
			'<button type="button" class="slick-next"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.7" cx="31" cy="31" r="31" fill="#08262B"/><path d="M19.4697 30.4697C19.1768 30.7626 19.1768 31.2374 19.4697 31.5303L24.2426 36.3033C24.5355 36.5962 25.0104 36.5962 25.3033 36.3033C25.5962 36.0104 25.5962 35.5355 25.3033 35.2426L21.0607 31L25.3033 26.7574C25.5962 26.4645 25.5962 25.9896 25.3033 25.6967C25.0104 25.4038 24.5355 25.4038 24.2426 25.6967L19.4697 30.4697ZM41 30.25L20 30.25V31.75L41 31.75V30.25Z" fill="white"/></svg></button>',
		responsive: [
			{
				breakpoint: 1230,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					variableWidth: false,
				},
			},
			{
				breakpoint: 932,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					variableWidth: true,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					variableWidth: true,
				},
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					variableWidth: true,
				},
			},
		],
	});

	//2vacancy-slider::::::::::::::::::::::::::::::::::::::::::::::::::::::
	$(".vacancy-slider").slick({
		dots: false,
		slidesToShow: 4,
		// variableWidth: true,
		prevArrow:
			'<button type="button" class="slick-prev"><svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_177_2210)"><circle r="31" transform="matrix(-1 0 0 1 44 37)" fill="url(#paint0_linear_177_2210)" shape-rendering="crispEdges"/></g><path d="M55.5303 36.4697C55.8232 36.7626 55.8232 37.2374 55.5303 37.5303L50.7574 42.3033C50.4645 42.5962 49.9896 42.5962 49.6967 42.3033C49.4038 42.0104 49.4038 41.5355 49.6967 41.2426L53.9393 37L49.6967 32.7574C49.4038 32.4645 49.4038 31.9896 49.6967 31.6967C49.9896 31.4038 50.4645 31.4038 50.7574 31.6967L55.5303 36.4697ZM34 36.25H55V37.75H34V36.25Z" fill="white"/><defs><filter id="filter0_d_177_2210" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feMorphology radius="7" operator="erode" in="SourceAlpha" result="effect1_dropShadow_177_2210"/><feOffset dy="7"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.88 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_177_2210"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_177_2210" result="shape"/></filter><linearGradient id="paint0_linear_177_2210" x1="31" y1="0" x2="31" y2="62" gradientUnits="userSpaceOnUse"><stop stop-color="#03E1FF" stop-opacity="0.66"/><stop offset="1" stop-color="#13CDC2"/></linearGradient></defs></svg></button>',

		nextArrow:
			'<button type="button" class="slick-next"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.7" cx="31" cy="31" r="31" fill="#08262B"/><path d="M19.4697 30.4697C19.1768 30.7626 19.1768 31.2374 19.4697 31.5303L24.2426 36.3033C24.5355 36.5962 25.0104 36.5962 25.3033 36.3033C25.5962 36.0104 25.5962 35.5355 25.3033 35.2426L21.0607 31L25.3033 26.7574C25.5962 26.4645 25.5962 25.9896 25.3033 25.6967C25.0104 25.4038 24.5355 25.4038 24.2426 25.6967L19.4697 30.4697ZM41 30.25L20 30.25V31.75L41 31.75V30.25Z" fill="white"/></svg></button>',
		responsive: [
			{
				breakpoint: 1230,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					variableWidth: false,
				},
			},
			{
				breakpoint: 932,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					variableWidth: true,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					variableWidth: true,
				},
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					variableWidth: true,
				},
			},
		],
	});
	//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//Навигация вверх-вниз
	const windowHeight = $(window).height();
	console.log(windowHeight);

	$(".menu a, header a, .footer__scroll-up").on("click", function (e) {
		e.preventDefault();
		const id = $(this).attr("href"),
			top = $(id).offset().top;
		$("body,html").animate({ scrollTop: top }, 1500);
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
		location.reload();
	});

	//Закрытие sucsses по клику по трею
	$(".popup-sucsses-bg").click(function () {
		$(".popup-sucsses-bg").fadeOut(100);
		location.reload();
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
			$(".popup-introductory-bg").fadeOut(600);
		} else {
		}
	});
});
