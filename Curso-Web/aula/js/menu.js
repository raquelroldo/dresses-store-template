$(document).ready(function(){

	$( window ).resize(function() {

		if(window.innerWidth > 750){
			showFooterItem(".collection-item");
			showFooterItem(".site-item");
			showFooterItem(".shop-item");
			showFooterItem(".social-item");
		}

		if(window.innerWidth <= 750){
			hideFooterItem(".collection-item");
			hideFooterItem(".site-item");
			hideFooterItem(".shop-item");
			hideFooterItem(".social-item");
		}

		var elementPersonalIsActive = ($('.personal').attr("data-isActive") === 'true');
		var elementBasicIsActive = ($('.basic').attr("data-isActive") === 'true');

		if (window.matchMedia("(min-width: 700px)").matches) {
			if(elementPersonalIsActive){
				showContent('.personal');
			}
			if(elementBasicIsActive){
				showContent('.basic');
			}
		} else if (window.matchMedia("(min-width: 900px)").matches){
			if(elementPersonalIsActive){
				showContent('.personal');
			}
		} else {
			if(elementPersonalIsActive){
				showContent('.personal');
				if(elementBasicIsActive){
					showContent('.basic');
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
	});

	function showContent(className){
		debugger
		$(className).addClass("show-content");
		$(className).attr("data-isactive", true);
	}

	function hideContent(className){
		debugger
		$(className).removeClass("show-content");
		$(className).attr("data-isactive", false);
	}

	
	$('#collection').click(function(){
		toogleFooterItem('.collection-item');
	});

	$('#site').click(function(){
		toogleFooterItem('.site-item');
	});

	$('#shop').click(function(){
		toogleFooterItem('.shop-item');
	});

	$('#social').click(function(){
		toogleFooterItem('.social-item');
	});

	function toogleFooterItem(className){
		if (window.matchMedia("(max-width: 748px)").matches) {
			$(className).toggle('slow');
		} 
	}

	function showFooterItem(className){
		$(className).css("display", "block");	
	}

	function hideFooterItem(className){
		$(className).css("display", "none");	
	}


});
