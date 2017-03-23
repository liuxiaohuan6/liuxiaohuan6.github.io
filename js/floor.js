function floor($floors,$obj,$all){
	$floors.on("mouseenter",function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	$floors.on("click",function(){
		var $distance=$(this).index()*620+1145;
		$("body,html").animate({"scrollTop":$distance});
	})
	$(window).scroll(function(){
		
		var $scroll=$("body").scrollTop();
		if($scroll>1145){
			$obj.show();
		}
		if($scroll<1000){
			$obj.hide();
		}
		$all.each(function(index,ele){
			var $current=$(ele).offset().top;
			if($scroll>$current){
				$floors.eq(index).addClass("active").siblings().removeClass("active");
			}
			
		})
	})
}
var $obj=$("#floor");
var $floors=$("#floor").find("li");
var $all=$(".floor1");
floor($floors,$obj,$all);
