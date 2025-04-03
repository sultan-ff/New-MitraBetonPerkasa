$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : ""
* Template Name : Construction HTML Template
* Version       : 1.0
==================================== */




        /*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. Smooth Scroll spy
3. counter
4. owl carousel
5. welcome animation support
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	
	// 2. Smooth Scroll spy
		
		$('.header-area').sticky({
           topSpacing:0
        });
		
		//=============

		$('li.smooth-menu a').bind("click", function(event) {
			event.preventDefault();
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - -10
			}, 1200,'easeInOutExpo');
		});
		
		$('body').scrollspy({
			target:'.navbar-collapse',
			offset:0
		});
	
	
	
		
	// 3. counter
		$('.counter').counterUp({
			
			delay: 10,
			time: 1000
		});

		
	// 4. owl carousel
	
		// i. .testimonial-carousel
	
		
		var owl=$('.testimonial-carousel');
		owl.owlCarousel({
			items:3,
			margin:0,
			
			loop:true,
			autoplay:true,
			smartSpeed:1000,
			
			//nav:false,
			//navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			
			dots:true,
			autoplayHoverPause:true,
		
			responsiveClass:true,
				responsive:{
					0:{
						items:1
					},
					640:{
						items:2
					},
					992:{
						items:3
					}
				}
			
			
		});
		
		
		// i. .client (carousel)
		
		$('#client').owlCarousel({
			items:4,
			loop:true,
			smartSpeed: 1000,
			autoplay:true,
			dots:false,
			autoplayHoverPause:true,
			responsive:{
					0:{
						items:1
					},
					415:{
						items:2
					},
					600:{
						items:2
					},
					1000:{
						items:4
					}
				}
			});
			
			
			$('.play').on('click',function(){
				owl.trigger('play.owl.autoplay',[1000])
			})
			$('.stop').on('click',function(){
				owl.trigger('stop.owl.autoplay')
			})
		
	// 5. welcome animation support

        $(window).load(function(){
        	$(".single-slide-item h2,.single-slide-item p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".single-slide-item a").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".single-slide-item h2,.single-slide-item p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".single-slide-item a").addClass("animated fadeInDown").css({'opacity':'0'});
        });
	
		
		$(window).load(function(){
        	$(".about-part-details h2").removeClass("animated fadeInUp").css({'opacity':'0'});
        	$("ol.breadcrumb").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".about-part-details h2").addClass("animated fadeInUp").css({'opacity':'0'});
        	$("ol.breadcrumb").addClass("animated fadeInDown").css({'opacity':'0'});
        });
			
});	
	