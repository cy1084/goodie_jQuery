$(function(){
	$(".delete").click(function(){
		$(this).parent().slideUp("slow","easeInOutBounce");
	});
	$("#view").click(function(){
		$(".panel").css("display","block");
	});
});