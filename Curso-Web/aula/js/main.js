$(document).ready(function(){

/*
    $('.slider').slick({
    	dots: false,
    	infinite: true,
    	speed:300,
    	slidesToShow:5,
    	slidesToScroll:5,
	 });
	*/ 
	$( window ).resize(function() {

		if (window.matchMedia("(min-width: 700px)").matches) {
			if($('.personal').attr("data-isactive") === "true"){
				$('.personal').addClass("show-content");
			}
			if($('.basic').attr("data-isactive") === "true"){
				$('.basic').addClass("show-content");
			}
		} else if (window.matchMedia("(min-width: 900px)").matches){
			if($('.personal').attr("data-isactive") === "true"){
				console.log("< 900 >= 700");
				$('.personal').addClass("show-content");
			}
		} else {
			if($('.personal').attr("data-isactive") === "true"){
				console.log(">= 900");
				if($('.personal').attr("data-isactive") === "true"){
					$('.personal').addClass("show-content");
				}
				if($('.basic').attr("data-isactive") === "true"){
					$('.basic').addClass("show-content");
				}
			}	
		}
	});

	$(".burger").click(function(){
		
		var elementPersonalIsActive = ($('.personal').attr("data-isActive") === 'true');
		var elementBasicIsActive = ($('.basic').attr("data-isActive") === 'true');
		
		setBurgerStatus(elementPersonalIsActive, elementBasicIsActive);

		function setBurgerStatus(elementPersonalIsActive, elementBasicIsActive){
			if(elementPersonalIsActive){
				hideContent('.personal');
			}else{
				showContent('.personal');
			}
			if(elementBasicIsActive){
				hideContent('.basic');
			}else{
				showContent('.basic');
			}
		}
	
		function showContent(className){
			$(className).addClass("show-content");
			$(className).attr("data-isactive", true);
		}
	
		function hideContent(className){
			$(className).removeClass("show-content");
			$(className).attr("data-isactive", false);
		}

	});



	$('.slider-coco').slick({
		
		infinite: true,
		speed: 100,
		slidesToShow: 5,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
				{
					breakpoint: 950,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				},
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
		]

	});
		  


});