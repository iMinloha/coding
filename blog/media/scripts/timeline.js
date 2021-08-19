$(document).ready(function(){
	if($("html").attr("data-user-color-scheme") == "dark"){
		$(".timecolor").css("background-color","rgba(0,0,0,0.1)");	
		$(".timetext").css("color","#ffffff");	
	}else{
		$(".timecolor").css("background-color","#ffffff");	
		$(".timetext").css("color","#000000");	
	}
	$("#color-toggle-btn").click(function(){
		if($("#color-toggle-icon").attr("data") == "light"){
			$(".timecolor").css("background-color","rgba(0,0,0,0.1)");	
			$(".timetext").css("color","#ffffff");	
		}else{
			$(".timecolor").css("background-color","#ffffff");	
			$(".timetext").css("color","#000000");	
		}	
	})
});