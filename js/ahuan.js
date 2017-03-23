

function getDate(tageturl){
	var ajax=new XMLHttpRequest();
	ajax.open("get",tageturl);
	ajax.send();
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4&&ajax.status==200){
			var text=JSON.parse(ajax.responseText);
			var city=text[0]["city"];
			
			var cityval=document.getElementsByClassName("city")[0];
			
			var region=document.getElementsByClassName("region")[0];
			for(var cityname in city){
				
				var cityop=document.createElement("option");
				cityop.innerHTML=city[cityname]["name"];
				cityval.appendChild(cityop);
			}
			cityval.onchange=function(){
				region.innerHTML="";
				for(var citys in city){
					if(cityval.value==city[citys]["name"]){
						for(var qu in city[citys]["area"]){
							var options=document.createElement("option");
							options.innerHTML=city[citys]["area"][qu];
							
							region.appendChild(options);
						}
					}
				}
			}
			
		}
	}
}
function getDress(){
	var mydre=document.getElementsByClassName("mydre")[0];
	var dress=document.getElementsByClassName("dress")[0];
	var timer=null;
	mydre.onmouseover=dress.onmouseover=function(){
		clearTimeout(timer);
		
			dress.style.display="block";
		
	}
	mydre.onmouseout=dress.onmouseout=function(){
		
		timer=setTimeout(function(){
			dress.style.display="none";
		},500)
		
	}

//	mydre.onmouseover=function(){
//		timer=setTimeout(function(){
//			dress.style.display="block";
//		},500)
//		
//		dress.onmouseover=function(){
//			dress.style.display="block"
//		}
//	}
//	mydre.onmouseout=function(){
//		timer=setTimeout(function(){
//			dress.style.display="none"
//		},500)
//	}
}



















