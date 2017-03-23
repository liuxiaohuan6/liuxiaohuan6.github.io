//window.onload=function(){
//	getDate("湖北.json");
//	getDress();
//	document.getElementsByClassName("bands")[0].onmouseover=function(){
//		var mybas=document.getElementsByClassName("mybas")[0];
//		uniformMove(mybas,{"height":95},1);
//	}
//}
$(function(){
	getDate("data/湖北.json");
	getDress();
//	$(".bands").hover(function(){
//		$(".mybas").stop().animate({"height":95},200);
//	},function(){
//		$(".mybas").stop().animate({"height":0},200);
//	})
	var bands=document.getElementsByClassName("bands")[0];
	var mybas=document.getElementsByClassName("mybas")[0];
	var timer=null;
	bands.onmouseover=mybas.onmouseover=function(){
		clearTimeout(timer);
		$(".mybas").stop().animate({"height":95},200);
	}
	bands.onmouseout=mybas.onmouseout=function(){
		timer=setTimeout(function(){
			$(".mybas").stop().animate({"height":0},200);
		},500)
	}
})
