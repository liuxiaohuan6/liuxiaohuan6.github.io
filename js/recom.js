function recom($obj,$divlist){
	$obj.mouseenter(function(){
		var index=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$divlist.stop().eq(index).fadeIn().siblings().fadeOut();
	})
}
var $obj=$("#recom").find("li");
var $divlist=$(".recomall").find("div");
recom($obj,$divlist);
