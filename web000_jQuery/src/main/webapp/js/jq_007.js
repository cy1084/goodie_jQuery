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
				success: function(data){ //data 받아옴
					console.log(typeof data);
	//다시 0523 오전 10시 10분~
	//도서관에서 많이 쓰임- 엑셀로 저장된 도서 정보 조회!
				
					//자식 노드 찾기
					console.log($(data).find("DATA_RECORD").eq(0).children().eq(1).text()); //steven
					
					//입력받은 empId를 통해서 xml의 EMPLOYEE_ID를 찾음
					var empInfo=$(data).find("EMPLOYEE_ID:contains("+empId+")").parent();
					console.log(`empId ${empId}의 정보: \n${empInfo}`);
					
					if($(empInfo).is("DATA_RECORD")){
						$("table input").each(function(i){
							$(this).val($(empInfo).children().eq(i).text());
						});
					}else{
						alert("해당 사원의 정보는 없습니다.");
					}
				},
				error: function(request, status, error){
					alert(`code:${request.status}\n message:${request.responseText} \n error:${error}`);
				}
			});
		} else {
			alert("정확한 사원번호를 입력해주세요");
		}
	});
});