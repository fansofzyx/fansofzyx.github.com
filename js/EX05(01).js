/*1*/
$('.ui-cnt-img').click(function(event) {
	/* Act on the event */
	var src=$(this).attr('src');
	$('.ui-hidden-img').attr('src',src);
	$('.ui-cnt').css({'filter':'blur(10px)'});
	$('.ui-hidden').fadeIn('fast', function() {
		$(this).click(function(event) {
			/* Act on the event */
			$(this).fadeOut('slow/400/fast');
			$('.ui-cnt').css({'filter':'blur(0px)'});
		});
	});
});
/*2*/
$('.row2ui-title-cnt').click(function(event) {
	/* Act on the event */
	$('.row2ui-title-cnt').css({'background-color':'white'});
	$(this).css({'background-color':'lightgray'});
	var ind=$('.row2ui-title-cnt').index(this);
	//alert(ind);
	$('.row2ui-main-cnt').text(ind+1);
});
/*3*/
$('.row3ui-main-right').on('click',remove);

function remove(){
	$(this).parent().fadeOut('slow',function(){$(this).remove();});
	
	for(var i=0;i<$('.row3ui-main-left').length;i++)
		$('.row3ui-main-left-tag').eq(i).text(i+1);
}
$('.row3ui-button').click(function(event) {
	/* Act on the event */
	var i=$('.row3ui-main').length;
	i++;
	var node="<div class='row3ui-main'><div class='row3ui-main-left'>"+"<p class='row3ui-main-left-tag'>"+i+"</p>"+"</div><div class='row3ui-main-right'>"+"<p class='row3ui-main-right-tag'>"+"delete"+"</p>"+"</div></div>";
	$('.row3ui-button').before(node);
	$('.row3ui-main-right:last').on('click',remove);
});