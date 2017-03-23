var $obj=$("#productcontent").find(".allproduct").find("ul");
$.getJSON("data/product.json",function(data){
	for(var i in data){
		var psrc=data[i]["src"];
		var price=data[i]["price"];
		var pname=data[i]["pname"];
		var pdataid=data[i]["data-id"];
		$obj.append('<li data-id='+pdataid+'>'+
						'<img src="'+psrc+'"/>'+
						'<p>'+pname+'</p>'+
						'<span>'+'$'+price+'</span>'+
					'</li>')
	}
	
	$obj.find("li").on("click",function(){
		var dataid=$(this).attr("data-id");
		var psrc=$(this).find("img").attr("src");
		var price=$(this).find("span").html();
		var pname=$(this).find("p").html();
	//	console.log('{"psrc":psrc,"price":price,"pname":pname}')
	//'{"psrc":'+psrc+',"price":'+price+',"pname":'+pname+'}'
		localStorage.setItem("id",dataid);
		localStorage.setItem("dataid"+dataid,'{"psrc":"'+psrc+'","price":"'+price+'","pname":"'+pname+'"}')
		window.location="goodsintro.html";
	})

})
