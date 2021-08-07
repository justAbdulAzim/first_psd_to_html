$(document).ready(function(){


	//STICKY MENU
	$(".js--srv").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky");
		}else {
			$("nav").removeClass("sticky");
		}
	});


	//active link
	$("nav ul li a").click(function(){
		$("nav ul li a").removeClass("active");
		$(this).addClass("active");
	});


	$("nav a img.logo").click(function(){
		$("nav ul li a").removeClass("active");
		$("nav ul li:first-child a").addClass("active");
	});




	//MIX IT UP PLUGIN USED HERE

	var mixer = mixitup('.contt')
});


function openNav(){
	document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
	document.getElementById("myNav").style.width = "0%";
}

