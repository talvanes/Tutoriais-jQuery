$(function(){
	// a rectangle
	var rectangle;
	// select the first one by default
	var selected = 1;
	/*
		Choose a rectangle from the options below: first, second and third
	*/
	$("#choose").on("change", function(){
		rectangle = $("#choose").val();
		switch(rectangle){
				case "first": selected = 1; break;
				case "second": selected = 2; break;
				case "third": selected = 3; break;
		}
		console.log(selected);
	});
	
	/* Callback function */
	var callback = function(){
			$("#info").fadeIn("slow").text('Done').slideUp("slow");
	}
	
	/* Button 'move-left' */
	var toLeft = {left: '-=50px'};
	$("#move-left").click(function(){
		console.log(selected);
		switch(selected){
				case 1: 
						$("#rect1").animate({left: '-=30px'}, "slow")
							.fadeTo("fast", 0.5).fadeTo("fast", 1, callback);
						break;
				case 2: 
						$("#rect2").animate({left: '-=30px'}, "slow")
							.fadeTo("fast", 0.5).fadeTo("fast", 1, callback);
						break;
				case 3: 
						$("#rect3").animate({left: '-=30px'}, "slow")
							.fadeTo("fast", 0.5).fadeTo("fast", 1, callback);
						break;
		}
	});
	/* Button 'move-right' */
	var toRight = {left: '+=50px'};
	$("#move-right").click(function(){
		console.log(selected);
		switch(selected){
				case 1: 
						$("#rect1").animate({left: '+=30px'}, "slow")
							.fadeTo("fast", 0.5).fadeTo("fast", 1, callback);
						break;
				case 2: 
						$("#rect2").animate({left: '+=30px'}, "slow")
							.fadeTo("fast", 0.5).fadeTo("fast", 1, callback);
						break;
				case 3: 
						$("#rect3").animate({left: '+=30px'}, "slow")
							.fadeTo("fast", 0.5).fadeTo("fast", 1, callback);
						break;
		}
	});
});