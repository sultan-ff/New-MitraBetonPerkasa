$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : Khanas HTML Template
* Version       : 1.0
==================================== */

	//  filterizer js

		var filterizd = $('.work-item').filterizr({   
	        //options object
	        // layout: 'sameSize', // See layouts
	    });

	    $(function() {
			$('.work-filters button').click(function() {
				$('.work-filters button').removeClass('active');
				$(this).addClass('active');
			});
		});

	    

});	
	