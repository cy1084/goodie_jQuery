function btn01() {
	/**
	 * <input> 태그 중에서 type=text인 태그만 선택
	 * 
	 * javascript에서의 empty Element는 value로 값을 가지고 있음
	 * jQuery에서는 val()로 가져온다
	 * *** 혼합해서 사용 xxx
	 * ex) $("input:text").value;
	 * 
	 * jQuery는 모든 기능의 실행이 함수로 되어 있다
	 * 따라서 대입 연산자가 없고, arguments로 입력받는다
	 * doc.value="값" => 입력, jQuery- doc.val("값");
	 * doc.value => 출력, jQuery- doc.val();
	   * 
	 */

	var obj = $("input:text").val();
	console.log(obj);
}

function btn02() {
	var doc = $("input:radio").eq(1).val();
	console.log(doc); //개구리2

	var obj = $("input[type=text][value=아이디]");

	//jQuery의 for문
	//each-> index 같이 가져옴
	$("input:radio").each(function(index, item) {
		console.log(index, item);
	});
}

function btn03() {
	//checked
	//checkbox에 value 값이 없으면 default는 무조건 "on"
	var doc = $("input[type=checkbox]").val();
	console.log(doc);

	//prop와 attr은 해당 속성의 이름만 있다면 가져올 수 있음
	//(속성 이름, 값) => 입력
	var bool = $("input[type=checkbox]").prop("checked");
	console.log(bool);
}


$(function() {
	//jQuery에서는 event를 on~~ 하지 않음
	//selected, options, selectedIndex
	$("select").change(function() {
		alert($("select option:selected").val());
	});
});

  //javascript
//var selElem = document.getElementsByTagName("select")[0];
//selElem.onchange = function() {
//	alert(selElem.options[select.selectedIndex].value);
//}

function btn04(){
	//전체 개수
	var len=$("input[type=checkbox]").length;
	//선택 개수
	var choiceLen=$("input[type=checkbox]:checked").length;
	console.log(len,choiceLen);
	
	//여기부터 다시
//	//전체 체크
//	$("input[type=checkbox]").prop("checked",true);
//	
//	//전체 체크 each 문으로 작성
//	$("input[type=checkbox]").each(function(){
//		this.checked=true;
//	});
//	
	
	//선택 체크 is 문법
	//속성을 판단하는 문법
	//$("input:checkbox[name=isChk2]").prop("checked",true);
	if($("input:checkbox[name=isChk2]").is(":checked")==true){
		console.log("isChk2 체크됨");
	}
}