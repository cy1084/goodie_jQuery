$(document).ready(function(){
	//console.log("화면의 모든 div의 개수: ", $("div").length); //6
	//$("div").eq(0).css("background","yellow"); //0번째는 div를 감싸고 있는 큰 div이기 때문에 전체 색이 변함!
	//$("div").eq(3).css("background","tomato");
	
	//console.log($("div>div").length); // 안 쪽 div 개수 가져오기, 5
	
	//var div=document.getElementsByTagName("div");
	//console.log("javascript 태그 검색: ",div.length); //6
	
	//b 태그 찾기
	//$("div>b");
	//$("div").find("b").css({"font-size":"20px","color":"tomato"});
	
	//console.log("div의 children의 개수: ",$("div").children().length); //6
	
	//$("div").children().css("color","blue"); //자식의 자식까지 다 바꿈 div의 b까지!
	
	//$("div").children("#id").css("color","blue"); //id가 id인 애만!
	
	
	//상위 찾기
	//parent: 나를 포함하고 있는 바로 위 tag
	//parents: 나를 포함학 있는 위의 모든 tag=> 선택자 필요
	//$("b").parent().css("background","yellow");
	//$("div>b").parent().css("background","yellow");
	//$("div>b").parents().css("background","yellow");
	//$("div>b").parents("div").css("background","yellow");
	
	
	//next()
	$("div>div").eq(2).next().next().css("background","yellow");
	//3번째 인덱스인 애의 옆 옆 애! 
	
});