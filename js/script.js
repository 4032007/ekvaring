$(function() {
//scroll
	$('.scroll').click(function(event){
		event.preventDefault();
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		$('html, body').animate({scrollTop:target_top}, 1000);
	});	
	
/*select*/
	$('.select-main-s select, .select-c select').selectbox();
	
//scroll block
	if($('.menu-right').length){
		var topPos = $('.menu-right').offset().top;
		$(window).scroll(function() {
			var top = $(document).scrollTop(),
			pip = $('.line-stop').offset().top,
			height = $('.menu-right').outerHeight();
			if (top > topPos && top < pip - height) {$('.menu-right').addClass('fix').removeAttr("style");}
			else if (top > pip - height) {$('.menu-right').removeClass('fix').css({'position':'absolute','bottom':'0', 'top':'auto'});}
			else {$('.menu-right').removeClass('fix');}
		});
	};
	
//ask-answer
	$('.head-ask').click(function(){
		$(this).toggleClass('active').next().toggle();
	})
	
//menu
	$('.menu-tt a').click(function(){
		$(this).parent().toggleClass('active');
		$('.menu-top').toggle()
		return false;
	});

	$('.head-nav-mob').click(function(){
		$(this).next().toggle()
		return false;
	});
	
	$('.nav-for-mob ul li a').click(function(){
		var text_li = $(this).text();
		$('.head-nav-mob').text(text_li);
		$(this).parent().parent().hide();
		return false;
	});
	
	$(document).click(function(event) {
	    if ($(event.target).closest('.head-nav-mob').length) return;
	    $('.nav-for-mob ul').hide();
	    event.stopPropagation();
	});	
});

