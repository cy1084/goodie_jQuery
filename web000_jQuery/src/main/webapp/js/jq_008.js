$(function() {
	$("#emp_search").click(function() {
		var empId = $("#empId").val();
		//위와 같음
		//var empId=$("input[name=empId]").val(); //id 없을 경우
		console.log("화면의 검색 값: ", empId);

		//유효성 검사 - 중요!!
		if (!isNaN(empId) && empId.length == 3) {
			$.ajax({
				url: "EMPLOYEES_202405230937.xml", //전송할 페이지의 주소(jsp, servlet, 다른 WS)
				method: "POST", //서버 전송 프로토콜 방식
				async: true, //비동기식 true, 동기식 false
				//			data:"empId=111" or {"emp":"111"} //서버에 전송하는 data(QueryString)
				dataType: "xml", //url에 요청했을 경우 반환(response)되는 데이터의 형변환 타입
				success: function(data) { //data 받아옴
					var empRowList = $(data).find("DATA_RECORD");

					if (empRowList.length > 0) {	//정보가 있다면
						$("body").append(makeTable(empRowList)); //empRowList 데이터를 전송하여 테이블 생성

					} else {
						alert("회원 정보가 없습니다");
					}
				},
				error: function(request, status, error) {
					alert(`code:${request.status}\n message:${request.responseText} \n error:${error}`);
				}
			});
		} else {
			alert("정확한 사원번호를 입력해주세요");
		}
	});
});


//javascript에서의 tag 생성
//createElement(), setAttribute("",""),createTextNode();
//jQuery에서는 
//createElement()=> $("<tag>")
//$변수명: jQuery로 만들어진 변수
function makeTable(data) {
	$table = $("<table>");


	for (let i = 0; i < 1; i++) {
		$tr = $("<tr>");
		for (let j = 0; j < data.eq(0).children().length; j++) {
			$td = $("<td>").append(data.eq(0).children().eq(j).prop("tagName"));
			//tagName 가져옴 - prop
			$tr.append($td);

		}
		$table.append($tr);
	} //헤더 완성


	for (let i = 0; i < data.length; i++) {
		$tr = $("<tr>");
		for (let j = 0; j < data.eq(0).children().length; j++) {
			$td = $("<td>").append(data.eq(i).children().eq(j).text());
			$tr.append($td);
		}
		$table.append($tr);
		//내용 완성
	}


	return $table;
}