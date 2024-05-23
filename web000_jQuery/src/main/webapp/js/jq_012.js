$(function(){
	$(".menu>div").css("display","none");
	
//	$(".menu").hover(function(){
//		$(this).children("div").stop().slideToggle(1000);
//	});

/**
 * stop() 사용: 마우스를 빠르게 여러 번 올렸다 떼면, 애니메이션이 매번 중단되고 새로 시작됩니다. 최종적으로 애니메이션은 1초 동안만 실행
stop() 미사용: 마우스를 빠르게 여러 번 올렸다 떼면, 애니메이션이 계속 쌓여서 실행됩니다. 각각의 애니메이션이 모두 끝날 때까지 기다려야 하므로 애니메이션이 길어지고 버벅거림이 생길 수 있습니다.
 */


//위의 toggle과 같은 기능
	$(".menu").hover(
		function(){
			$(this).children("div").slideDown();
		}
		,
		function(){	
			$(this).children("div").slideUp();
		}
	);
});