$(document).ready(function(){
	$("fieldset:eq(0)").css({"border":"1px solid green","width":"300px"});
	$("#view").css({"border":"1px solid red","height":"150px","width":"300px"});
});

//tag로 선택하기
function a1(){
	//jQuery에서는 tag로 탐색해도 자동으로 nodelist로 처리한다
	//index 검색하고 싶다면 eq(index 번호)를 통해 탐색
	console.log($("span").length);
	var span=$("span");
	console.log(span.textContent); //undefined
	console.log(span.text); //값 정상적으로 가져옴
	
	//jQuery에서 탐색된 객체는 javascript 객체와 다르기 때문에 혼합해서 사용하면 안됨
	//console.log(span[0].textContent);
	
	console.log(span.eq(0).textContent); //undefined
	console.log(span.eq(0).text()); //값 정상적으로 가져옴
	
	$("span").css("color","lime");
	//jQuery로 탐색된 객체의 값을 가져올 때는 
	//value=> val()/ textContent=> text()/ innerHTML=> html()
	
	$("#view").html("<b>Hello</b>"); //Hello
	$("#view").text("<b>Hello</b>"); //<b>Hello</b>
		
}

//id로 탐색
function a2(){
	$("#t1").css("color","blue");
	jQuery("#view").text('$("t1").css("color","blue");');
}

//class로 탐색
function a3(){
	$(".t2").css("backgroundColor","#ccc");
	$("#view").text('$("t2").css("backgroundColor","#ccc");');
}

//Parent Child로 탐색- 중요!!!!!
/**
 * 
 * $("div span"): div에 속해있는 span을 검색
 * $("div,span"): div 또는 span을 검색
 * $("div>span"): div 바로 밑에 있는 span을 검색
 * $("div[name *= btn]"): 검색된 div 중에서 속성으로 name을 가지고 있고 btn이라는 문자를 포함하고 있는 것을 검색
 *  
 */

//Parent Child로 탐색
function a4(){
	$("li span").css("color","red"); //li의 자식 중 span에 css 적용
	$("li,span").css("color","red"); //모든 li와 모든 span에 css 적용
	$("li>span").css("color","green"); //<li><span> 두 태그가 붙어있는 경우에만 적용
	$("li[name *= p]").css("color","blue"); //속성 name 중에서 p를 포함하고 있는 경우 적용
}

//Parent > Child로 탐색
function a5(){
	$("li>span").css("color","green");
}

//nth-child(n/even/odd)로 탐색- 1부터 시작
function a6(){
	//$("li>span").css("color","blue");
	$("li:nth-child(odd)").css("color","blue"); //홀수 줄만 1,3,5,7..
	$("li:nth-child(even)").css("color","red"); //짝수 줄만 2,4,6,8..
	$("li:nth-child(n+7)").css("color","green"); //7번째 줄부터 끝까지
	//n은 현재 row
	//2n+1: 연산이 들어갔기 때문에 n은 0부터 시작
} 

//first-child로 탐색
function a7(){
	$("li:first-child").css({"backgroundColor":"black","color":"white"});
}

//last-child로 탐색
function a8(){
	$("li:last-child").css({"backgroundColor":"black","color":"white"});
}