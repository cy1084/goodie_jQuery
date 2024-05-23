$(function(){
	$("div>p").eq(0).click(function(){
		$("pre b").eq(0).toggle();
	});
	
	$("div>p").eq(1).click(function(){
		//시작 index, 끝 index-1
		$("pre b").slice(1,3).slideToggle(1000); //2,3번째 것 사라짐
	});
	
	$("div>p").eq(2).click(function(){
//		$("pre b").first().css("color","red");
//		$("pre b").eq(3).toggle().text("변경");

		$("pre b").first().css("color","red").end().eq(3).toggle().text("변경");
		//위에 것 한 줄로
		//end(): 계속 이어서! $("pre b") 얘를 다시! => 복합 연결
	});
	$("div>p").eq(3).click(function(){
		$("pre b").last().toggle();
	});
});