$(function(){ //onload
	//$("p:eq(0)").add("span").css("color","red");
	//p:eq(0) 얘와 span 얘 모두 적용
	//위와 같음
	$("p:eq(0),span").css("color","red");
	
	var doc=document.getElementsByTagName("div")[0];
	var chd=doc.children; 
	
	for(var i in chd){
		chd[i].onclick=function(){
			if(this.tagName=="SPAN"){
				console.log(this.textContent); 
			}
		}
	}
	
	/**
	 * div 태그의 자식들 중 
	 * span은 폰트 색을 오렌지로 바꾸고 
	 * p는 배경 색을 옐로우로 바꾸기
	 * is() 문법을 통해 동작
	 */
	
	$("div").children().click(function(){
		if($(this).prop("tagName")=="SPAN"){ //현재의 속성(prop)의 tagName이 span이라면
			$(this).css("color","orange");
		}
		if($(this).is("p")){ 
			$(this).css("background","yellow");
		}
	});
});