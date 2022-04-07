/*
 * Copyright (c) 2022 CoddyThemes
 * Author: CoddyThemes
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	muno_tm_hamburger();
	muno_tm_imgtosvg();
	muno_images();
	muno_tm_magnific_popup();
	muno_tm_jarallax();
	muno_tm_portfolio();
	muno_tm_nav_bg_scroll();
	muno_tm_anchor();
	muno_tm_owl_carousel();
	muno_tm_text_animation();
	muno_tm_animate_text();
	muno_tm_projects();
	muno_tm_popup_blog();
	muno_tm_popupscroll();
	muno_tm_ripple();
	muno_tm_kenburn_slider();
	muno_tm_miniboxes();
	
	jQuery(window).on('scroll',function(){
		//e.preventDefault();
		muno_tm_nav_bg_scroll();
	});
	
	jQuery(window).on('resize',function(){
		muno_tm_popupscroll();
		muno_tm_miniboxes();
	});
	
	jQuery(window).load('body', function(){
		setTimeout(function(){
        jQuery('.muno_tm_preloader').addClass('loaded');
    }, 1000);
	});
	
});

// -----------------------------------------------------
// --------------------  FUNCTIONS  --------------------
// -----------------------------------------------------

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function muno_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// ---------------  Images  -------------------------
// -----------------------------------------------------

function muno_images(){
	
	"use strict";
		
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element		= jQuery(this);
		var url			= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// ---------------  HAMBURGER  -------------------------
// -----------------------------------------------------

function muno_tm_hamburger(){
	
	"use strict";
	
	var hamburger 		= jQuery('.hamburger');
	var mobileMenu		= jQuery('.muno_tm_mobile_menu_wrap');
	
	hamburger.on('click',function(){
		var element 	= jQuery(this);
		
		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
}

// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------

function muno_tm_magnific_popup(){
	
	"use strict";
	
	jQuery('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	
	jQuery('.gallery').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});
	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
	});
	jQuery('.popup-youtube').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			//type: 'iframe',
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function muno_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed
		});
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 

function muno_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.muno_tm_portfolio_list');
		var filter		 = jQuery('.muno_tm_portfolio_filter');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

function muno_tm_projects() {
	
	"use strict";
	
	jQuery('.muno_tm_portfolio_animation_wrap').each(function() {
		jQuery(this).on('mouseenter', function() {
			if (jQuery(this).data('title')) {
				jQuery('.muno_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.muno_tm_portfolio_titles').addClass('visible');
			}

			jQuery(document).on('mousemove', function(e) {
				jQuery('.muno_tm_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			jQuery('.muno_tm_portfolio_titles').removeClass('visible');
		});
	});
}

// -----------------------------------------------------
// ------------    NAV BACKGROUND  SCROLL    -----------
// -----------------------------------------------------

function muno_tm_nav_bg_scroll(){
	
	"use strict";
	
	var header 			= jQuery('.muno_tm_header');
	var headerH 		= header.outerHeight();
	var WH	 			= jQuery(window).height();
	var windowScroll	= jQuery(window).scrollTop();
	var W				= jQuery(window).width();
	
	if(W>1040){
		jQuery(window).scroll(function(){
            if(windowScroll >= WH-headerH){
                header.addClass('scroll');
            }
            else{
                header.removeClass('scroll');  
            }
        });
		if(windowScroll >= WH-headerH){
			header.addClass('scroll');
		}
		else{
			header.removeClass('scroll');  
		}
	} 
}

// -----------------------------------------------------
// ------------    ANCHOR NAVIGATION    ----------------
// -----------------------------------------------------

function muno_tm_anchor(){
	
	"use strict";
	
	jQuery('.anchor_nav').onePageNav();
	
	var scrollOffset = 0;
	
	jQuery(".anchor a").on('click', function(evn){
		evn.preventDefault();
		jQuery('html,body').scrollTo(this.hash, this.hash, {
			gap: { y: -scrollOffset-85 },
			animation:{
				duration: 1500,
				easing: "easeInOutExpo"
			}
		});
		return false;	
	});
}

// -----------------------------------------------------
// --------------------    OWL CAROUSEL    -------------
// -----------------------------------------------------

function muno_tm_owl_carousel(){
	
	"use strict";
	
	var carusel2			= jQuery('.muno_tm_testimonial_wrap .owl-carousel');
  	carusel2.owlCarousel({
		loop:true,
		margin:70,
		autoplay:false,
		autoWidth: false,
		nav: false,
		items:3,
		responsive:{
			0:{items:1},
			480:{items:2},
			768:{items:3},
			1040:{items:3},
			1600:{items:3},
			1920:{items:3}
		}
	});
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -----------------------------------------------------
// ---------------    HERO TEXT ANIMATION  --------------
// -----------------------------------------------------

function muno_tm_text_animation(){
	
	"use strict";
	
	var H        			= jQuery(window).height();
	var titleHolder			= jQuery('.muno_tm_hero_title');
	var titleHeight			= titleHolder.outerHeight();
	var headerHeight		= jQuery('.muno_tm_header').outerHeight();
	
	var	height				= H/2 + titleHeight/2 - headerHeight;
	
	jQuery(window).on('scroll',function(){
		var window_offset = jQuery(window).scrollTop();
		titleHolder.css({opacity:1 - (window_offset/height), marginTop:(window_offset/height)*200});
	});
}

// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

function muno_tm_animate_text(){
	
	"use strict";
	
	var animateSpan			= jQuery('.muno_tm_animation_text_word');
	
		animateSpan.typed({
			strings: ["Sting Jasper", "Web Designer", "Freelancer", "Photographer"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
	
	var animateSpan2			= jQuery('.muno_tm_animation_text_word_2');
	
		animateSpan2.typed({
			strings: ["Freelancer", "Photographer"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
}

// -----------------------------------------------------
// -----------------    PROGRESS BAR    ----------------
// -----------------------------------------------------

function tdProgress(container){

	"use strict";

	container.find('.muno_tm_progress').each(function(i) {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.muno_tm_bar_wrap');
		var pBar 			= progress.find('.muno_tm_bar');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');},(i*500));
	});
}
jQuery('.muno_tm_progress_wrap').each(function() {
	"use strict";
	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
});

// -----------------------------------------------------
// -------------------    COUNTER    -------------------
// -----------------------------------------------------

jQuery('.muno_tm_counter').each(function() {

	"use strict";

	var el		= jQuery(this);
	el.waypoint({
		handler: function(){

			if(!el.hasClass('stop')){
				el.addClass('stop').countTo({
					refreshInterval: 50,
					formatter: function (value, options) {
						return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
					},	
				});
			}
		},offset:'80%'	
	});
});

// -----------------------------------------------------
// -------------------    POPUP BLOG    ----------------
// -----------------------------------------------------
function muno_tm_popup_blog(){
	"use strict";
	var li				= jQuery('.muno_tm_list_wrap.blog_list .inner_list');
	var popupBox		= jQuery('#muno_tm_popup_blog');
	var popupInner		= popupBox.find('.inner_popup');
	var closePopup		= popupBox.find('.close');
	
	li.each(function(){
		var element		= jQuery(this);
		var button		= element.find('.read_more a,.title_holder a');
		var html		= element.html();
		var mainImage	= element.find('.news_image');
		var imgData		= mainImage.data('url');
		var title		= element.find('.title_holder h3');
		var titleHref	= element.find('.title_holder h3 a').html();
		
		mainImage.css({backgroundImage: 'url('+imgData+')'});
		button.on('click',function(){
			popupBox.addClass('opened');
			popupInner.html(html);
			mainImage = popupInner.find('.news_image');
			mainImage.css({backgroundImage: 'url('+imgData+')'});
			title = popupInner.find('.title_holder h3');
			title.html(titleHref);
			return false;
		});
	});
	closePopup.on('click',function(){
		popupBox.removeClass('opened');
		popupInner.html('');
		return false;
	});
}

// -----------------------------------------------------
// -------------    WIDGET MENU SCROLL -----------------
// -----------------------------------------------------

function muno_tm_popupscroll(){
	
	"use strict";
	
	var H				= jQuery(window).height();
	var scrollable		= jQuery('.scrollable');
	
	var popupBox		= jQuery('.muno_tm_popup_blog .inner_popup');
	
	popupBox.css({height:H-100});
	
	scrollable.each(function(){
		var element		= jQuery(this);
		var wH			= jQuery(window).height();
		
		element.css({height: wH-100});
		
		element.niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #fff"
		});
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function muno_tm_ripple(){
	
	"use strict";
	
	jQuery('#ripple').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
}

// -------------------------------------------------
// -------------  GLITCH  --------------------------
// -------------------------------------------------

$(".glitch").mgGlitch({
		destroy: false,
		glitch: true,
		scale: true,
		blend: true,
		blendModeType: "hue",
		glitch1TimeMin: 200,
		glitch1TimeMax: 400,
		glitch2TimeMin: 10,
		glitch2TimeMax: 100
	});

// -------------------------------------------------
// -------------  SLIDER KENBURN  ------------------
// -------------------------------------------------

function muno_tm_kenburn_slider(){
	
	"use strict";
	
		jQuery(function() {
			jQuery('.muno_tm_kenburn_hero .overlay_slider').vegas({
			timer:false,	
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:7000,

			slides: [
				{ src: 'img/hero/new/3.jpg' },
				{ src: 'img/hero/new/4.jpeg' },
				{ src: 'img/hero/new/5.jpg' },
			]

		});
	});
}

// -----------------------------------------------------
// -----------------    MINI BOXES    ------------------
// -----------------------------------------------------

 function muno_tm_miniboxes(){
	 
  "use strict";
	 
  var el 			= jQuery('.muno_tm_miniboxes');
	 
  if(el.length){
   el.each(function(index, element) {
         
    var child		= jQuery(element).find('.muno_tm_minibox');
    
    child.css({height:'auto'});
    // Get an array of all element heights
    
    var W 		= jQuery(window).width();
    if(W > 480){
     var elementHeights = child.map(function() {return jQuery(this).outerHeight();}).get();
    
     // Math.max takes a variable number of arguments
     // `apply` is equivalent to passing each height as an argument
     var maxHeight 		= Math.max.apply(null, elementHeights);
     
     // Set each height to the max height
     child.css({height:maxHeight+'px'}); 
    }
   });  
  }
 }
