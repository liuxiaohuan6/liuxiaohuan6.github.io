$(function(){
	var $login=$("#logincontent");
	var $btn=$login.find("button");
	var $usname=$login.find(".username");
	var $password=$login.find(".password");
	
	$btn.on("click",function(){
		var username=$usname.val();
		var password=$password.val();
		if(localStorage.getItem("username")){
		
			var uname=localStorage.getItem("username");
			var pwd=localStorage.getItem("userpassword");
			console.log(username+""+password);
			//(uname==username)
			//(pwd==password)
			//window.location="index.html";
			if(uname==username){
				if(pwd==password){
					window.location="index.html";
				}else{
					alert("密码不正确");
				}
				
			}else{
				alert("用户名不存在！");
			}
			
		}else{
			alert("请先完成注册");
		}
	})
})
