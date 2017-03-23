var $goodscontent=$("#goodscontent");
var $small=$goodscontent.find(".smallpic");
var $large=$goodscontent.find(".largepic");
var $detail=$goodscontent.find(".goodsdetail");
var $goodsname=$detail.find(".goodsname");
var $goodsprice=$detail.find(".goodsprice");

var id=localStorage.getItem("id");
var temp=JSON.parse(localStorage.getItem("dataid"+id));
	
$small.append('<img src="'+temp["psrc"]+'"/>');
$large.append('<img src="'+temp["psrc"]+'"/>');
$goodsname.html(temp["pname"]);
$goodsprice.html(temp["price"]);
		
	
		



var $largepic=$large.find("img");
var $box=$goodscontent.find(".box");

var $reduce=$detail.find(".reduce");
var $add=$detail.find(".add");
var $num=$detail.find(".num");
var $addcar=$detail.find(".addcar");
//var $shopnum=$("#contentnav").find(".nav_car").find(".shopnum");//获取不到
//$small.hover(function(){
//	$box.show();
//	$small.on("mousemove",function(event){
//		var e=event;
//		var x=e.clientX;
//		var y=e.clientY;
//		var offsetx=$(this).offset().left;
//		var offsety=$(this).offset().top;
//		var gapx=x-offsetx;
//		var gapy=y-offsety;
//		
//		$box.css({"left":gapx-100,"top":gapy-100});
//	
//	})
//},function(){
//	$box.hide();
//	console.log(123);
//})
//$small.on("mouseleave",function(){
//	console.log(123);
//})

$small.on("mousemove",function(event){
		$box.show();
		$large.show();
		var e=event;
		var x=e.clientX;
		var y=e.clientY;
		var offsetx=$(this).offset().left;
		var offsety=$(this).offset().top;
		var gapx=x-offsetx;
		var gapy=y-offsety;
		if(x<offsetx+100){gapx=100;}
		if(x>offsetx+300){gapx=300;}
		if(y<offsety+100){gapy=100;}
		if(y>offsety+300){gapy=300;}
	
		
		
		$box.css({"left":gapx-100,"top":gapy-100});
		$largepic.css({"left":-(gapx-100)*2,"top":-(gapy-100)*2})
	
})

$small.on("mouseleave",function(){
	$box.hide();
	$large.hide();
})


$reduce.on("click",function(){
	var num=$num.val();
	if(num>1){
		num--;
	}
	$num.val(num);
	
})

$add.on("click",function(){
	var num=$num.val();
	num++;
	$num.val(num);
})
$addcar.on("click",function(){
	var num=$num.val();
	var goodsname=$detail.find(".goodsname").html();
	var goodsprice=$detail.find(".goodsprice").html();
//	var goodspic="img/logo.jpg"
	var goodspic=$small.find("img").attr("src");
//	console.log(goodspic);
	var goodsid=localStorage.getItem("id");
	localStorage.setItem("goods"+goodsid,'{"goodspic":"'+goodspic+'","goodsname":"'+goodsname+'","goodsprice":"'+goodsprice+'","goodsnum":"'+num+'","gid":"'+goodsid+'"}');
	
//	var goodsimg=$small.find("img");
	$("#goodscontent").find(".smallpic").append('<div class="fly"></div>');
	var goodsimg2=$small.find("img").clone();
	var goodsimg=goodsimg2[0]
	var $fly=$(".fly").show().html(goodsimg)
	$fly.animate({"width":0,"height":0,"left":900,"top":"-90"},2000,function(){
		$(this).remove();
	});
	
	
})














