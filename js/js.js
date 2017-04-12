$(function(){
	$('.sNavA').each(function(i){
		$(this).hover(
		   function(){
			   $('.sNav').eq(i).css('left',$(this).offset().left);
			   $('.sNav').eq(i).show();
			   },
		   function(){
			   $('.sNav').hide();
			   }
		)
		})
	$('.sNav').each(function(i){
		$(this).hover(
		   function(){
			   $('.sNavA').eq(i).addClass('aNow1');
			   $(this).show();
			   },
		   function(){
			   $('.sNavA').removeClass('aNow1');
			   $(this).hide();
			   }
		)
	})
	
	
})
	

