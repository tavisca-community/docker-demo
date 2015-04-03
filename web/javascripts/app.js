$(document).ready(function(){
	var $container = $('#carousel-container'),
		template = Handlebars.compile($('#tmplCarousel').html());

	$.getJSON('http://dockerdemo.aws.appacitive.com:8400/service/images', function(images){
		$container.html(template({ 
			images: images
		}));

		$container.height($(window).height() - 125);
		// set the image height
		$('.carousel-inner img', $container).css('max-height', $(window).height() - 125);

		// init carousel
		$('.carousel', $container).carousel({
			interval: 4000
		})

		$('.left.carousel-control', $container).click(function(e){
			e.preventDefault();
			$('.carousel', $container).carousel('prev');
			return false;
		});
		$('.right.carousel-control', $container).click(function(e){
			e.preventDefault();
			$('.carousel', $container).carousel('next');
			return false;
		});
	});
});
