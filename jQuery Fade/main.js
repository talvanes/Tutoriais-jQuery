$(document).ready(function(){
	$(".body").hide();
	$(".header").click(function(){
		$(".body").fadeToggle("slow");
	});
	
	$("button.toggle-text").click(function(){
		var article = $(this).parent(".article");
		var p = article.children("p");
		var p_height = p.css("height");
		if(p.css("visibility") == "hidden") {
			p.css("visibility", "visible");
			article.css("height", p_height);
		}else{
			p.css("visibility", "hidden");
			article.css("height", "50px");
		}
	});
	
	$("button.hide-article").click(function(){
		$(this).parent(".article").hide("fast");
	});
});