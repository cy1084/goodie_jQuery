function imgSize(){
	//jQuery는 json 형태({"":""})로 여러 개의 속성 값을 처리할 수 있다
	//jQuery 탐색의 nodelist는 for문을 처리할 필요가 없다
	//만약 각각의 요소를 선택한다면 eq()를 사용하면 된다
	$("img").css({"width":"300px","height":"300px"});
//	$("img").forEach(function(data){
//		console.log(data);
//	});
}

function idSelector(){
	//css 속성 중에서 display block/ none 처리
	//toggle(), hide()
	$("#selId").toggle();
	//$("#selId").css("display","none");
	//document.getElementById()와 $("#")의 Id 탐색은 무조건 node 탐색/
	//여러 개 있다면 첫번째 것
}

function classSelector(){
	$(".selClass").css({"opacity":"0.3"});
}

function changeImg(){
	$("td>img").attr("src","./img/img02.png");
}

function propSelector(){
	$("img[title *=02]").slideUp(2000); //2초
}