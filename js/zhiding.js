$(function(){
	$(window).scroll(function(){
		var $scroll=$(document).scrollTop();
		var $obj=$("#xiding");
		if($scroll>1145){
			$obj.show();
		}
		if($scroll<1000){
			$obj.hide();
		}
		var $list=$obj.find("li");
		$list.on("click",function(){
			window.location="product.html";
		})
	})
})
