$(document).ready(function(){
	var $easyzoom = $('.easyzoom').easyZoom();

	var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');

	$('.thumbnails').on('click', 'a', function(e) {
		var $this = $(this);

		e.preventDefault();

		api1.swap($this.data('standard'), $this.attr('href'));
	});
});
