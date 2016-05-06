/* smooth scrolling to anchor link */
$(function(){
    $('div.anchornav a').click(function() {
	var target = $(this.hash);
	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	if (target.length) {
	    $('html,body').animate({
		scrollTop: target.offset().top
	    }, 'slow');
	    return false;
	}
    });
});

/* change avatar */
$(function(){
    var imgs=["img/ho1.png", "img/ho2.png", "img/ho3.png", "img/ho4.png"];
    var currentImg=1; var randomNum=1;
    $('#avatar').attr('src', imgs[currentImg]);
    setInterval(function(){
	while(randomNum==currentImg){
	    randomNum=Math.floor(Math.random()*4);
	}
	currentImg=randomNum;
	$('#avatar').fadeOut(200, function(){	
	    $(this).attr('src', imgs[currentImg]).fadeIn(500);
	});
    }, 60*1000);
});

/* drop down */
$(function(){
    $( '.unfold-child' ).css( 'display', 'none' );
    $( '.unfold-toggle' ).click(function() {
	if( $(this).parents('.unfold-ancestor').find('.unfold-child' ).is( ':hidden' ) ) {
	    $(this).parents('.unfold-ancestor').find('.unfold-child' ).slideDown( 'fast', function() {} );
	} else {
	    $(this).parents('.unfold-ancestor').find('.unfold-child' ).slideUp( 'fast', function() {} );
	}
    });
});

/* special action when map opens */
$(function(){
    $('#open-map').click(function() {
	if( $(this).find('#map-folded').is( ':hidden' ) ) {
	    $(this).find('#map-folded').show();
	    $(this).find('#map-unfolded').hide();
	} else {
	    $(this).find('#map-folded').hide();
	    $(this).find('#map-unfolded').show();
	}
	$('html,body').animate({
	    scrollTop: $('#open-map').offset().top
	}, 'slow');
    });
});

