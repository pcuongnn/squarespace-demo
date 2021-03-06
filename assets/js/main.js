jQuery(function(){
	// Sticky
	var $body,$target,resizetimer,stickyclass = 'we-sticky';
	$body = $(document.body);
	function makeSticky(){
		var scrollTop = $(document).scrollTop();
		if (scrollTop > 1) {
			if (!$body.hasClass(stickyclass)) {
				$body.addClass(stickyclass);
			}
		} else {
			if ($body.hasClass(stickyclass)) {
				$body.removeClass(stickyclass);
			}
		}
	}

	//////////////////////////////////////////////////////////////////////////
	// Tab
	//////////////////////////////////////////////////////////////////////////
	var $tabsNav = jQuery('.tabs-nav'),
		$tabsNavLis = $tabsNav.children('li');
	$tabsNav.each(function () {
		var $this = jQuery(this);
		$this.parent().prev().children('.tab-content').stop(true, true).hide().first().show();
		$this.children('li').first().addClass('active').stop(true, true).show();
	});
	$tabsNavLis.on('click', function (e) {
		var $this = jQuery(this);
		$this.siblings().removeClass('active').end().addClass('active');
		$this.parent().parent().prev().children('.tab-content').stop(true, true).hide().siblings($this.find('a').attr('href')).fadeIn();
		e.preventDefault();
	});
	//////////////////////////////////////////////////////////////////////////
    // scrollto
    //////////////////////////////////////////////////////////////////////////
	jQuery(".scrollto").click(function(T){
		T.preventDefault();
		var Q=jQuery(this).attr("name");
		jQuery("html,body").clearQueue().animate({
			scrollTop:jQuery('#'+Q).offset().top
		},1800,"swing");
		return false;
	});
	if (jQuery(window).width() <= 1199 ) {
		$("#menu").mmenu({
			extensions: ["pageshadow", "theme-white"],
			counters: false
		}).on('click',
			'a[href^="#/"]',
			function () {
				alert("Thank you for clicking, but that's a demo link.");
				return false;
			}
		);
	}

	jQuery(window).on("load", function() {
		jQuery('.flexslider').flexslider({
			controlNav: false,
			directionNav: false,
			slideshow: true,
			animationSpeed: 800,
			multipleKeyboard: true,
			pauseOnHover: true
		});

		jQuery('#sliders .slide-prev, #sliders .slide-next').on('click', function(){
			var href = jQuery(this).attr('href');
			jQuery('.flexslider').flexslider(href);
			return false;
		});
	});

	makeSticky();
	jQuery(window).on('scroll', function(){
		clearTimeout(resizetimer);
		resizetimer = setTimeout(function(){
			$body.removeClass(stickyclass);
			makeSticky();
		}, 10);
	});

	jQuery('.feed-inner ul').bxSlider({
		mode: 'fade',
		auto: true,
		controls: false,
		pager: false,
		captions: false
	});

	jQuery('.testimonial ul').bxSlider({
		mode: 'fade',
		auto: true,
		controls: false,
		pager: false,
		captions: false
	});

	jQuery('.s-menu li').find('ul').parent().addClass('has-child');
	jQuery('.has-child a').click(function(e){
		e.preventDefault();
		if (jQuery(this).hasClass('opened')) {
			jQuery(this).parent().find('ul').slideUp('slow');
			jQuery(this).removeClass('opened');
		} else {
			jQuery(this).parent().find('ul').slideDown('slow');
			jQuery(this).addClass('opened');
		}
	});
	jQuery(".s-menu li a[href='" + window.location.pathname + "']").addClass('active');
	jQuery(".s-menu li ul li a[href='" + window.location.pathname + "']").addClass('active');
	jQuery('.s-menu li li a').each(function(){
		if(jQuery(this).hasClass('active')){jQuery(this).parents('ul').show();}
	});

	if ($("#date").length >0) {
		$("#date").datepicker({
			altFormat: "mm/dd/yyyy"
		});
	}
});