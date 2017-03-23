function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(obj)[attr];
	}
}

function uniformMove(obj,json,speed){
	
	obj.timer=setInterval(function(){
		var kswitch=true;
			for(var attr in json){
				if(attr=="opacity"){
					var offset=parseInt(getStyle(obj,"opacity")*100);
					var gap=json["opacity"]*100-offset;
				}else{
					var offset=parseInt(getStyle(obj,attr));
					var gap=json[attr]-offset;
				}
				speed=gap>=0?speed*100:(-speed)*100;	
				if(Math.abs(gap)<Math.abs(speed)){
					if(attr=="opacity"){obj.style.opacity=json["opacity"];}
					else{obj.style[attr]=json[attr]+"px";}
				}else{
					kswitch=false;
					if(attr=="opacity"){obj.style.opacity=(offset+speed)/100}
					else{obj.style[attr]=offset+speed+"px";}
				}
			}
			if(kswitch){
				clearInterval(obj.timer);
			}
			
		
	},1000)
}
