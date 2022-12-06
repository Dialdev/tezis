$(function() { $('.lb').lightBox(); });

var id_menu = new Array('sub_menu_1');
var loc = location.href;
var len = loc.length;
var res = loc.slice(21, len);
startList = function allopen() { document.getElementById(id_menu[m]).style.display = "block"; }
var mas_links = new Array('produkciya', 'termoregulator', 'teploschetchiki', 'preobrazovateli-chastoty');
for(var i= 0; i < 4; i++) {
	if (res == mas_links[i]) { m=0; window.onload=startList; }
}

	jQuery(function($){
   $(".feedback-submit__input_phone").mask("+7 (999) 999-99-99");
});


$( document ).ready(function() {
  if($('.feedback .feedback-submit-thank').html().length > 0){
	  ga('send', 'event', 'zayavka', 'click');
  	$.fancybox.open({
	src  : '#feedback',
	type : 'inline',
	opts : {
		afterShow : function( instance, current ) {
			console.info( 'done!' );
		}
	}
	});
  }
});

//Пробный код
$( document ).ready(function() {
  if($('.feedback .feedback-submit-thank').html().length > 0){
	  ga('send', 'event', 'zayavka', 'click');
  	$.fancybox.open({
	src  : '#feedback-2',
	type : 'inline',
	opts : {
		afterShow : function( instance, current ) {
			console.info( 'done!' );
		}
	}
	});
  }
});
//Конец пробного кода
