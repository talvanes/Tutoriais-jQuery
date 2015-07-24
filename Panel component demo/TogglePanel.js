/**
* The TogglePanel object
*/
var TogglePanel = function(title, content, fore, back){
	/* instances */
	this.$title = title || '';
	this.$content = content || '';
	this.$foreground = fore || '#000';
	this.$border = fore || '#000';
	this.$background = back || '#fff';
	
	/* constructor */
	var panel = $('<div></div>').addClass('panel');
	var props = {
		backgroundColor: this.$background,
		color: this.$foreground,
		border: '1px solid ' + this.$border,
	}
	
	var header = $('<header></header>').html(
		$('<h4></h4>').text(this.$title).css('padding', '10px auto')
	);
	header.css(props).css({
		padding: '0 12px',
		cursor: 'pointer'
	});
	panel.append(header);
	
	var main = $('<main></main>').html(this.$content);
	main.css(props).css('padding', '12px 20px');;
	main.hide();
	
	panel.append(main);
	
	/* events and methods */
	header.bind('click', function(){
		main.slideToggle('slow');
	});
	panel.css('marginBottom', '20px');
	
	//return panel
	return panel;
}