$(function() {
	$("b").click(function() {
		$("p").toggle();
		$("p").each(function(i) { //각각 애들 하나씩 돌면서 이벤트 추가
			$(this).animate({ "top": 30 * (i + 1) + "px" }, 1000);
		});
	});

	//p 태그에 이벤트 걸어줌
	$("p").bind("click", function() {
		var elem = $(this);

		//공통 css
		elem.css("background", "orange");

		//그룹 선택
		elem.siblings("p").css("background", "white");
		//선택된 나를 제외한, 동급의 p태그들은 white로 색칠해준다

		//포함하는 단어 셀렉터 표현식 *=
		//input[name *= 02]
		//contains를 통해 tag의 값을 확인할 수 있다.
		//this.textContent.indexOf("show") != -1
		//is()를 통해 true/false 반환

		if (elem.is("p:contains(show)")) {
			$("img").show();
		}

		if (elem.is("p:contains(hide)")) {
			$("img").hide();
		}

		if (elem.is("p:contains(toggle)")) {
			$("img").toggle();
		}

		if (elem.is("p:contains(slideUp)")) {
			$("img").slideUp();
		}

		if (elem.is("p:contains(slideDown)")) {
			$("img").slideDown();
		}

		if (elem.is("p:contains(slideToggle)")) {
			$("img").slideToggle();
		}

		if (elem.is("p:contains(fadeIn)")) {
			$("img").fadeIn();
		}

		if (elem.is("p:contains(fadeOut)")) {
			$("img").fadeOut();
		}

		if (elem.is("p:contains(fadeToggle)")) {
			$("img").fadeToggle();
		}

		if (elem.is("p:contains(animate)")) {
			$("img").animate({
				"width": "300px",
				"height": "300px",
				"top": "300px",
				"left": "600px"
			}, 1000);

			//jQuery 객체 복사 -> 그림자처럼!
			var img2 = $("#img1").clone().attr("id", "img2");
			$("#img1").after(img2);
			$("#img2").animate({
				"width": "300px",
				"height": "300px",
				"top": "280px",
				"left": "580px",
				"opacity": "0.3"
			}, 2000);
		}

	});
});
