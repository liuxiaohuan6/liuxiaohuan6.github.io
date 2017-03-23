var $detail=$("#registercontent").find(".detail");
var $userid=$detail.find(".username");
var $userpassword=$detail.find(".password");
var $userreplay=$detail.find(".replay");
var $userphone=$detail.find(".phone");
var $btn=$detail.find("button");//注册按钮
var $nametest=$detail.find(".nametest");
var $pwdtest=$detail.find(".pwdtest");
var $replay=$detail.find(".replaytest");
var $phonetest=$detail.find(".phonetest");
var flag=true;
$userid.on("blur",function(){
	var uname=$userid.val();
	var stand= /^[a-zA-Z\d]\w{3,11}[a-zA-Z\d]$/;
	var password=$userpassword.val();
	//用户注册： http://datainfo.duapp.com/shopdata/userinfo.php
	$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{
		"status":"register",
		"userID":uname,
		"password":password
	},function(data){
		if(stand.test(uname)){
			if(data==0){
				$nametest.html("该用户已注册");
				flag=false;
			}else if(data==1){
				$nametest.html("合格");
			}else{
				$nametest.html("数据库报错")
				flag=false;
			}
		}else{
				$nametest.html("只能是字母，数字，下划线，不能以下划线开头和结尾的5-12位");
				flag=false;
		}

	})
	
//	var stand=/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/;
	
})
$userpassword.on("blur",function(){
	var password=$(this).val();
	var stand= /^[a-zA-Z\d]\w{3,11}[a-zA-Z\d]$/;
	if(stand.test(password)){
		$pwdtest.html("合格");
	}else{
		$pwdtest.html("只能是字母，数字，下划线，不能以下划线开头和结尾的5-12位");
	
		flag=false;
	}
})
$userreplay.on("blur",function(){
	var replay=$(this).val();
	var password=$userpassword.val();
	if(replay==password){
		$replay.html("合格");
	}else{
		$replay.html("前后密码不一致");
		flag=false;
	}
})

$userphone.on("blur",function(){
	var phone=$(this).val();
	var stand=/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/;
	if(stand.test(phone)){
		$phonetest.html("合格");
	}else{
		$phonetest.html("手机号格式不正确");
		flag=false;
	}
})


$btn.on("click",function(){
	var uname=$userid.val(); 
	var password=$userpassword.val();
	var replay=$userreplay.val();
	var phone=$userphone.val();
	if(flag){
		if(uname){
			localStorage.setItem("username",uname);
			localStorage.setItem("userpassword",password);
			window.location="index.html";
		}else{
			alert("请完善信息！");
		}
	}else{
		
		alert("请完善信息！");
	}
})









































