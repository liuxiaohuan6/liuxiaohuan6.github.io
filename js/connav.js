



function nav(){
	var $list=$(".nav").find("ul").find("li");
	$list.on("mouseenter",function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(this).find("div").show();
	$(this).siblings().find("div").hide();
})
$list.on("mouseleave",function(){
	$(this).removeClass("active");
	$(this).find("div").hide();
})
}
function lunBo($obj,jsonurl,$dots,$prv,$next){
	$.ajax({
		type:"get",
		url:jsonurl,
		async:true,
		success:function(data){
			var timer=null;
			var num=0;
			
			for(var i in data){
				$obj.append('<img src="'+data[i]["src"]+'"/>');
				if(i==0){
					$dots.append('<span class="active"></span>');
				}else{
					$dots.append('<span></span>');
				}
			}
			var $imglist=$obj.find("img");
			var len=$imglist.length;
			var $spanlist=$dots.find("span");
			auto();
			$obj.parents(".mianlunbo").hover(function(){
				clearInterval(timer);
				$prv.show().on("click",function(){
					num--;
					if(num==-1){
						num=len-1;
					}
					$imglist.stop().eq(num).fadeIn().siblings().fadeOut();
					$spanlist.eq(num).addClass("active").siblings().removeClass("active");
				});
				$next.show().on("click",function(){
					num++;
					if(num>len-1){
						num=0;
					}
					$imglist.stop().eq(num).fadeIn().siblings().fadeOut();
					$spanlist.eq(num).addClass("active").siblings().removeClass("active");
				});
				$spanlist.on("click",function(){
					num=$(this).index();
					$imglist.stop().eq(num).fadeIn().siblings().fadeOut();
					$(this).addClass("active").siblings().removeClass("active");
				})
				
			},function(){
				$prv.hide();
				$next.hide();
				auto();
				
			})
			function auto(){
				timer=setInterval(function(){
					num++;
					if(num>len-1){
						num=0;
					}
					$imglist.eq(num).fadeIn().siblings().fadeOut();
					$dots.find("span").eq(num).addClass("active").siblings().removeClass("active");
				},2000)
			}
		}
		
	})
}
nav();
var $imgs=$(".mianlunbo").find(".imgs");
var $dots=$(".mianlunbo").find(".dots");
var $prv=$(".mianlunbo").find(".prv");
var $next=$(".mianlunbo").find(".next");
lunBo($imgs,"data/mainlunbo.json",$dots,$prv,$next);
