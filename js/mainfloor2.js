$(function(){
	var $box=$("#mainfloor").find(".floor2").find(".right").find(".l1").find(".lunbo");
var $dots=$box.find(".spanlist").find("span");
var $next=$box.find(".next");
var $prv=$box.find(".prv");
var $ul=$box.find("ul");
var  num=0;
var index=0;
var timer=null;
autoSlide();
$box.hover(function(){
//	alert(123);
	clearInterval(timer);
	$dots.on("click",function(){
	
		num=$(this).index();
		index=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		var $distance=-num*440;
		$ul.animate({"left":$distance});
	})
	$prv.on("click",function(){
		num--;
		index--;
		if(num==-1){num=3;$ul.css({"left":-1760});}
		if(index==-1){index=3}
		console.log(num);
		console.log(index);
		$dots.eq(index).addClass("active").siblings().removeClass("active");
		var $distance=-num*440;
		$ul.stop().animate({"left":$distance});
	})
	$next.on("click",function(){
		num++;
		index++;
		if(num==5){num=1;$ul.css({"left":0});}
		if(index==4){index=0;}	
		$dots.eq(index).addClass("active").siblings().removeClass("active");
		var $distance=-num*440;
		$ul.stop().animate({"left":$distance});
	})
},function(){
	autoSlide();
})

function autoSlide(){
	timer=setInterval(function(){
		num++;
		index++;
		if(num==5){num=1;$ul.css({"left":0});}
		if(index==4){index=0;}
//		
		$dots.eq(index).addClass("active").siblings().removeClass("active");
		var $distance=-num*440;
		$ul.animate({"left":$distance});
		
		
	},2000)
}

})
