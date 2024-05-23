$(function(){
	//1. input tag 중에서 text인 element를 선택하여 배경색 주기
	$("input:text").css("backgroundColor","orange");
	
	//2. input tag 중에서 타입이 password인 element를 선택하여 배경색 주기
	$("input:password").css("backgroundColor","green");
	
	//3. select tag의 name 속성이 email인 element의 change 이벤트가 발생했다면 목록의 value를 alert으로 출력
	$("select[name=email]").change(function(){
		alert($("select option:selected").val());
		alert($(this).add("option:selected").val());
	});
	
	//4. checkbox를 체크하면 체크된 모든 목록들을 alert으로 출력(each 문 사용)
	$("input:checkbox").click(function(){
		var str="";
		//console.log($("input[type=checkbox]:checked").val());
		$("input:checked").each(function(i){
			str+=$("input:checked").eq(i).val();
		});
		//each: jQuery 객체의 요소를 반복
		alert(str);
	});
});