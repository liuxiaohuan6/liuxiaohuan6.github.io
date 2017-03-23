$(function(){
	var $obj=$("#mainfloor").find(".floor1").find(".top").find("ul");
	var $slide=$obj.find(".slide");
	var $list=$obj.find("li");
	$list.on("mouseenter",function(){
		console.log(123);
		var $index=$(this).index();
		var $distance=100*$index;
		$slide.stop().animate({"left":$distance},200);
	})
	
})
