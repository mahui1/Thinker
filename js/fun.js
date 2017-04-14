/*! www.vancheer.com  |  Powered by vancheer */ 
function prompt_fun(a){
	              $(a).after("<div id='Layer1'></div>"); 
				  if($('body').height()>$(window).height()){
				      $('#Layer1').height($('body').height());
				  }else{
					  $('#Layer1').height($(window).height());
					  }
				  $('#Layer1').width($('body').width());
				  $(a).css({left:($('body').width()-$(a).width())/2,top:$(window).scrollTop()+($(window).height()-$(a).height())/2});
				  $('#Layer1').fadeTo("fast",0.8); 
				  $(a).show();
				  //$(a).fadeIn("slow"); 
				  $('#Layer1').click(function(){
					  close_prompt_fun(a);
					  })
				jQuery(".caseScroll2").slide({mainCell:"ul",autoPage:true,effect:"left",autoPlay:true});
	}


function close_prompt_fun(a){
	              //$(a).fadeOut("fast"); 
				  $(a).hide();
				  $('#Layer1').fadeOut("slow",function(){
					  $('#Layer1').remove();
					  }); 
	}
	

$(function(){
	EquipmentFun();
	$(window).resize(function(){
		EquipmentFun();
		})
	$('.casePicTel').find('li').click(function(){
		$('.casePicTel').find('li').removeClass('liNow');
		$(this).addClass('liNow');
		$('.casePicTel').find('.bigImg').find('img').attr('src',$(this).find('img').attr('src'));
		})	
	})
function EquipmentFun(){
	$('.casePicTel').find('.list').width(parseInt($(window).width()/128)*128);
	jQuery(".casePicTel").slide({mainCell:"ul",autoPage:true,effect:"left",vis:parseInt($(window).width()/128)});
	}
	

$(function(){
	ProductFun();
	$(window).resize(function(){
		ProductFun();
		})
	$('.productShow_1Tel').find('li').click(function(){
		$('.productShow_1Tel').find('li').removeClass('liNow');
		$(this).addClass('liNow');
		$('.productShow_1Tel').find('.bigImg').find('img').attr('src',$(this).find('img').attr('src'));
		})	
	})
function ProductFun(){
	$('.productShow_1Tel').find('.list').width(parseInt($(window).width()/87)*87);
	jQuery(".productShow_1Tel").slide({mainCell:"ul",autoPage:true,effect:"left",vis:parseInt($(window).width()/87)});
	}