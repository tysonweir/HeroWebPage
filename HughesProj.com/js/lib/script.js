$(document).scroll(function(){
	var y = $(this).scrollTop();
	if(y>1800){
		$('#btn-top').css("bottom","222px");
	}else if (y>100) {
		$('#btn-top').fadeIn();
	}else{
		$('#btn-top').fadeOut();
		$('#btn-top').css("bottom","0");
	}
	console.log(y);
});