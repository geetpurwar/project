$(function() {
	$('.singleClient a').click(function(){
		if($('body').hasClass('touch')){
			if($(this).hasClass('readytoLoad')){
				return true;
			}else{
				$(this).addClass('readytoLoad');
				return false;
			}
		}else{
			return true;
		}
	});
	
	$('a').not('svg a, #fancybox-close, .fancybox-media, .fancybox, .bx-prev, .bx-next').each(function() {
		var a = new RegExp('/' + window.location.host + '/');
		if(!a.test(this.href)) {
		$(this).click(function(event) {
		    event.preventDefault();
		    event.stopPropagation();
		    window.open(this.href, '_blank');
		});
		}
	});

	$('.closeMenu, .smLink').click(function(){
		$('.sideNav').toggleClass('active');
		return false;
	});

	$(document).keyup(function(e) {
	  if (e.keyCode == 27) {
	  	if($('.sideNav').hasClass('active')){
	  		$('.sideNav').removeClass('active');
	  		return false;
	  	}
	  }   // escape key maps to keycode `27`
	});

	if ($(window).scrollTop() > 80 ) {
        $('.page-template-page-home header').addClass("pageHeader");
    } else {
        $('.page-template-page-home header').removeClass("pageHeader");
    }

    $(window).scroll(function(){
    	if($(window).width() > 769){
    		if ($(window).scrollTop() > 90 ) {
		        $('.page-template-page-home header').addClass("pageHeader");
		    } else {
		        $('.page-template-page-home header').removeClass("pageHeader");
		    }
    	}
    });

	var slider;
	if($(".inTestimonialCon .singleTestimonialSlide").length > 1){
	slider = $('.inTestimonialCon').bxSlider({
		auto: false,
		pager: false,
		adaptiveHeight: true,
		nextText: '<svg class="icon icon-FS-Homepage-Right-Arrow"><use xlink:href="#icon-FS-Homepage-Right-Arrow"></use></svg>',
	  	prevText: '<svg class="icon icon-FS-Homepage-Left-Arrow"><use xlink:href="#icon-FS-Homepage-Left-Arrow"></use></svg>'
	});
	}

	$(window).resize(function(){
		if(slider){
			slider.reloadSlider();	
		}
	});

	$('.founder .card').click(function(){
		$('.founder .card .inCard').removeClass('active');
		$(this).find('.inCard').addClass('active');

		if($(window).width() < 767){
			$(this).next('.details').stop(true, true).slideDown();
		}else{
			$('.inFounderSlider .details').html($(this).next('.details').html());
			$('.foundersSlider').addClass('slideUp');
		}
		return false;
	});

	$('.foundersSlider .close').click(function(){
		$('.foundersSlider').removeClass('slideUp');
		return false;
	});

	function less() {
		if($(window).width() < 767){
			$('.box').click(function(){
				$(this).toggleClass('active');
			});
		}
	}

	less();

	var serviceSlider;
	if($(window).width() > 768){
		$('.boxCon .card').click(function(){
			$('.inServiceDetailsTopCon').addClass('active');
			serviceSlider.goToSlide($(this).data('index'));
			return false;
		});
	}

	var sliderHtml = '';
	$('.inBoxSubCon .box').each(function(){
		sliderHtml += '<div class="singleServiceDetail">' + $(this).find('.servicesDetails').html() + "</div>";
	});

	$('.inServiceDetailsTop').html(sliderHtml);

	if($(".inServiceDetailsTop .singleServiceDetail").length > 1){
		serviceSlider = $('.inServiceDetailsTop').bxSlider({
			auto: false,
			pager: false,
			nextText: '<svg class="icon icon-FS-Homepage-Right-Arrow"><use xlink:href="#icon-FS-Homepage-Right-Arrow"></use></svg>',
		  	prevText: '<svg class="icon icon-FS-Homepage-Left-Arrow"><use xlink:href="#icon-FS-Homepage-Left-Arrow"></use></svg>'
		});
	}

	$('.inServiceDetailsTopCon .close').click(function(){
		$('.inServiceDetailsTopCon').removeClass('active');
		return false;
	});

});