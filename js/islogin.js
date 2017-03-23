$(function(){
	var $welcome=$(".welcome");
	jiazai();
	var $logout=$welcome.find(".tuichu");
	$logout.on("click",function(){
//		localStorage.setItem("username","");
//		jiazai();
		$welcome.html("你好，欢迎来到全民买卖");
	})
	function jiazai(){
		if(localStorage.getItem("username")){
	
			var usename=localStorage.getItem("username");
			$welcome.html("欢迎"+usename+"来到全民买卖"+"<span class='tuichu'>退出</span>")
		}else{
			$welcome.html("你好，欢迎来到全民买卖");
		}
	}
})
