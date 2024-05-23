//유효성 검사: 에러 표시하기 class=error
$(function() {
	$(".error").hide();

	//submit의 탐색 및 propagation
	//submit을 클릭하면 action이 실행되어야 하기 때문에 form에 propagation을 걸어줘야 함
	$("#signal").submit(function(e) {
		//alert("submit 동작 이벤트");
		//return false;

		if ($(".infoBox").val() == "") { //아무것도 보내지 않으면 error 메시지 보여줌
			$(".error").show();
			$(".infoBox").focus();
		}

		e.preventDefault();
		//		return;

	});
	//체크박스의 체크 여부를 확인하여 화면에 체크된 값 표현하기
	$("#confirm").click(function() {
		$("#result").empty(); //화면에 있던 값 지워버림
		if ($("input[name=chk]:checked").length == 0) {
			alert("하나 이상을 필수로 체크하세요");
		} else {
			//선택된 checkbox의 value와 다음에 있는 text 값 가져오기
			$("input[name=chk]:checked").each(function(i) {
				//i는 index 값

				//위치 가져오기
				var chkPosition = $("input[name=chk]:checked").eq(i)

				//글자(책 제목) 가져오기 <input> 다음에 있는 <b>의 콘텐츠
				var bookName = chkPosition.next().text(); //<input> 다음에 있는 태그 선택하기 -> 그 태그의 글자 가져옴

				//값
				var price = chkPosition.val();

				$("#result").append(`${bookName} 가격 ${price}<br>`);
				//appendChild는 객체만 붙일 수 있음
			});
		}
	});

	//전체 선택 체크박스
	$("input[name=chk]").click(function() {
		if ($("input[name=chk]").length == $("input[name=chk]:checked").length) {
			$("input[name=all]").prop("checked", true);
		} else {
			$("input[name=all]").prop("checked", false);
		}
	});

});


function allCheck(bool) {
	$("input[name=chk]").each(function() {
		$(this).prop("checked", bool);
	});
}