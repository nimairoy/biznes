$(document).ready(function(){


	$('body').materialScrollTop();    

	$('.navbar-nav li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});


	var mixer = mixitup('.gallery');

	var container = document.querySelector('.gallery');


	var mixer = mixitup(container, {
	     selectors: {
	       	control: '[our-mix-control]'
	    }
	});



	$('.owl-carousel').owlCarousel({
		autoplay:true,
		autoplayTimeout:3000,
		loop:true,
		smartSpeed:1000,
		responsive:{
			0 : {
				items : 1
			},
			600 : {
				items : 3
			},
			1000 : {
				items : 5
			}
		}
	});

});

$(window).scroll(function(){

	var ourWindow = $(this).scrollTop();

	if(ourWindow>100){
		$('body').addClass('fixed');		
	}else{
		$('body').removeClass('fixed');
	}
});


	$('.navbar-nav a[href^="#"]').click(function(e) {
		e.preventDefault();

		var target = this.hash;

		$('html,body').animate({
			scrollTop: $(target).offset().top
		},500);
	});
	

