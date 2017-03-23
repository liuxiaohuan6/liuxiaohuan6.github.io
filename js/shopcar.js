$(function(){
	var $parent=$("#shopcontent").find("table");
	var kswitch=false;
	for(var i=0;i<20;i++){
		if(localStorage.getItem("goods"+i)){
			var data=JSON.parse(localStorage.getItem("goods"+i));
			var price=data["goodsprice"].substring(1);
//			console.log(price);
			$parent.append('<tr data-id="'+price+'">'+
					'<td><img src="'+data["goodspic"]+'"/></td>'+
					'<td>'+data["goodsname"]+'</td>'+
					'<td>'+data["goodsprice"]+'</td>'+
					'<td>'+data["goodsnum"]+'</td>'+
					'<td class="del" data-id="'+data["gid"]+'">X</td>'+
				'</tr>')
		}
	}
	$parent.find("tr").find(".del").on("click",function(){
		$(this).parents("tr").remove();
		var $lname="goods"+$(this).attr("data-id");
		localStorage.setItem($lname,"");
	})
	
	
	
	$("#shopcontent").find(".sort").find("button").on("click",function(){
		
		kswitch=!kswitch;
		if(kswitch){
			var $oli=$parent.find("tr").sort(function(a,b){
				
				return $(a).attr("data-id")-$(b).attr("data-id");
			});
			$(this).html("价格降序排列");
		}else{
			var $oli=$parent.find("tr").sort(function(a,b){
				return $(b).attr("data-id")-$(a).attr("data-id");
			});
			$(this).html("价格升序排列");
		}
		$parent.append($oli);
		
	})
	
})
//		//  数据遍历
//		listData();
//		function listData(){
//			// $.ajajx , $.get,$.post,$.getJSON()
//			// iframe img script 
//			$.ajax({
//				url:'data/list.json',
//				type:"get",
//				// dataType:"jsonp",  声明需要通过跨域来获取数据
//				data:{
//
//				},
//				success:function(data){
//					var goodsData = data;
//					var len = goodsData.length;
//					console.log(len);
//					for(var i =0;i<len;i++){
//						var $price  = goodsData[i].price;
//						var $img = goodsData[i].img;
//						var $id = goodsData[i].id;
//						var $info = goodsData[i].info;
//						// data-id h5新属性 自定义数据
//						var oli = $('<li data-id='+$id+' data-price='+$price+'><dl><dt><img src='+$img+'></dt><dd><p><span class="price">特价:￥'+$price+'</span><span class="info">'+$info+'</span></p><div class="addToCar">加入购物车</div></dd></dl></li>');
//						// append appendTo
//						$('.thelist').append(oli);
//					}
//				}
//			})
//		}
//
//		var sortFlag = true;
//		$('.sort').click(function(){
//			console.log(123);
//
//			var oli = $('li').sort(function(a,b){
//				if(sortFlag){
//					return $(a).attr('data-price') - $(b).attr('data-price');
//				}else{
//					return $(b).attr('data-price') - $(a).attr('data-price');
//				}
//			})
//			sortFlag = !sortFlag;
//			// 重新插入排序好的dom的li元素
//			$('.thelist').append(oli)
//		})





























