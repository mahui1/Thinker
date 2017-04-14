$(function(){
	//--
	$('.tabContentDiv').find('.tabContent:first').show();
	$('.tab').each(function(i){
		$(this).find('li').each(function(ii){
			$(this).hover(
			function(){
				$('.tab').eq(i).find('li').removeClass('liNow');
				$(this).addClass('liNow');
				$('.tabContentDiv').eq(i).find('.tabContent').hide();
				$('.tabContentDiv').eq(i).find('.tabContent').eq(ii).show();
				},
			function(){}	
				)
			})
		})
	//--
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
	$('.sNav').find('li').hover(
	   function () {
	       $(this).stop().animate({ top: -2 }, 100);
	       $(this).delay(100).animate({ top: 0 }, 200);
	   },
	   function () {
	   }
	)
	//--
	$('.sideBar').hover(
	   function(){
		   $(this).find('ul').show();
		   },
	   function(){
		   $(this).find('ul').hide();
		   }
	)
	$('.sideBar').find('li').hover(
	   function(){
		   $(this).addClass('liNow');
		   },
	   function(){
		   $(this).removeClass('liNow');
		   }
	)
	//--
	$(".subNav").click(function(){
			$(this).toggleClass("currentDt").siblings(".subNav").removeClass("currentDt")
			$(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(500)
	})
	//--
	//$('.honor').find('li').each(function(i){
	//	$(this).click(function(){
	//		prompt_fun('.honorLayer');
	//		})
	//	})
	//--
	$('.indexPart1').find('li').find('.btnDiv').find('a').hover(
	   function(){
		   $(this).stop().animate({top: -4}, 100);
		   $(this).delay(100).animate({top: 0}, 200);
		   },
	   function(){
		   }
	)	
	//--
	$('.indexPart2').find('.btnDiv').hover(
	   function(){
		   $(this).stop().animate({top: -4}, 100);
		   $(this).delay(100).animate({top: 0}, 200);
		   },
	   function(){
		   }
	)	
	//--
	$('.solution').find('li').find('.btnDiv').hover(
	   function(){
		   $(this).stop().animate({top: -4}, 100);
		   $(this).delay(100).animate({top: 0}, 200);
		   },
	   function(){
		   }
	)	
	//--
	$(".product").find('li').hover(
	   function () {
	       $(this).find('.bg').height($(this).height());
	       $(this).find('.bg').show();
	   },
	   function () {
	       $(this).find('.bg').hide();
	   }
	)
	//--
	$('.appDownload').find('li:odd').addClass('liNow');
	//--
	$('.experienceList').find('li').find('a').each(function(i){
		$(this).click(function(){
			if($(this).hasClass('current')){
				$('.experienceList').find('li').find('a').removeClass('current');
				$('.experienceList').find('li').removeClass('current');
				$('.experienceList').find('.conContent').slideUp(500);
				}else{
					$('.experienceList').find('li').find('a').removeClass('current');
					$('.experienceList').find('li').removeClass('current');
					$('.experienceList').find('.conContent').slideUp(500);
					$(this).addClass('current');
					$('.experienceList').find('li').eq(i).addClass('current');
					$('.experienceList').find('.conContent').eq(i).slideToggle(500);
					}
			})
		})
	//
})
	


jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});	

function search() {
        var keys = document.getElementById("txtk").value;
        location.href = "/NewsCenter/search.aspx?a=n&keys=" + keys;
    }
    function entersearch() {
        //alert(dd);
        var keys = document.getElementById("txtk").value;
        var event = window.event || arguments.callee.caller.arguments[0];
        if (event.keyCode == 13) {
            //search();
            window.location.href = "/NewsCenter/search.aspx?a=n&keys=" + keys;
            return false;
        }
    }



