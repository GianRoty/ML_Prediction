$(document).ready(function(){
	$("button").click(function(){
		var obj = {
			car : $("#car").val(), 
			model : $("#model").val(), 
			volume: $("#volume").val(), 
			weight: $("#weight").val(), 
			co2: $("#co2").val()
		};
		alert(obj.car)
	});
});
