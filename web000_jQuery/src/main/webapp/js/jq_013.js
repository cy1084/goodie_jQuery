/**
 * 이벤트 전파(propagation): 각 요소가 중첩(포함, 겹침)인 경우 하나의 이벤트가 발생하면 중첩된 요소의 이벤트로 모두 차례대로 이벤트 발생
 * 이벤트 전파 막기: stopPropagation()- 이벤트 요소의 전파를 막음 
 * 				  	//javascript의 이벤트  ex)onclick
 * 				  preventDefault()- 이벤트에 의한 기본 동작을 막음
 * 				  	// html의 기본 이벤트를 막음
 * 				  return false- 위 두 개의 기능 모두 멈춤
 * 						** return=> 함수를 중지시킴
 * 
 * 기본의 propagation 없이 진행되면 중첩된 모든 a-> p-> div-> html href 동작
 * 하지만 중간에 p이벤트에 stopPropagation() 걸면 a-> p-> html href 동작      
 */

//propagation
$(function() {
	$("a:eq(0)").click(function(e) {	//해당 element의 eventListener를 담고 있는 객체를 e 변수로 받아줌
		alert("a 클릭!!");
		//e.stopPropagation();
		//e.preventDefault(); //html href도 막을 수 있음!
		return false; //위에 두 개 다 막겠다!
	});
	$("p").click(function(e) {
		alert("p 클릭!!");
		e.stopPropagation(); //div 클릭 이벤트 동작 안함
	});
	$("div").click(function() {
		alert("div 클릭!!");
	});


	/**
	 * 이벤트 메소드 종류: click(), change(), keyUp(), keyDown(), submit()...
	 */
	$("a:eq(1)").bind("mouseover mouseout", function(e) {
		if (e.type == "mouseover") {
			$(this).css("background", "yellow");
		}
		if (e.type == "mouseout") {
			$(this).css("background", "lime");
		}
	});

	var eventHandler = function() {
		alert("이벤트 추가");
	}

	$("a:eq(2)").bind("click", eventHandler);
	//eventHandler라는 click 이벤트를 걸어줌
	//alert 메시지 나온 후 링크로 이동

	$("span").click(function() {
		$("a:eq(2)").unbind("click", eventHandler);
		//alert 메시지는 안나오고 바로 링크로 이동
	});
	
//	$("span:eq(0)").click(function(){
//		$("a:eq(1)").unbind();
//	});
//	a 태그에 bind된 적 없기 때문에 unbind 동작 안함

//	bind는 없었던 이벤트를 추가해주는 함수
//  unbind는 bind로 추가된 이벤트를 삭제하는 함수

	
	//-----------동적 요소 추가-------------
	
	$("button").click(function(){
		$("body").append("<p>새로 추가된 p</p>");
		$("body").append("<p onclick='alert(777)'>새로 추가된 p(onclick)</p>");
	});
	
	//기존 만들어진 애한테 이벤트 걸어주기(동적 생성)
//	$("body").on('click','p',function(){
//		alert("동적 p태그에 버블링 이벤트");
//	});


	//javascript
	document.body.addEventListener("click",function(event){
		if(event.target.matches("p")){
			alert("javascript 동적 버블링");
		}
	});
	
});

