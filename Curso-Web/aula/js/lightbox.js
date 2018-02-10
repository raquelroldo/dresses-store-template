$(document).ready(function(){

	$('.list .li_container img').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		gallery: { enabled:false }
	});

	$('.slider-images div img').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		gallery: { enabled:true }
	});

});
