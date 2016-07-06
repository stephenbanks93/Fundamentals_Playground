jQuery(document).ready(function(){

	//alert("Is this thing on?");

	$("#hide").click(function(){
		$("#img").hide();
	});

	$("#fade").click(function(){
		$("#img").fadeIn(8000);
	});

	$("#explode").click(function(){
		$("#img").hide("explode", {pieces: 10000}, 50)
	});





});