/* ===================================================
 * carousel.js
 * 
 * Simple gallery carousel with infinitive loop.
 * 
 * Author: Davor Rup
 * Date: 02.08.2013
 * 
 * ===================================================
 */

$(document).ready(function() {
	
	initCarousel(3);
	
	$('#nextItem').click(function(){
		slideNewItem('next');
	});
	
	$('#previousItem').click(function(){
		slideNewItem('previous');
	});
	
	function initCarousel(numActiveItems)
	{
		// get number of all carousel items
		var numItems = $('#carouselItems li').get().length;
		
		// set width parameter for list
		var widthList = numItems*674;
		$('#carouselItems').css('width',widthList);
		
		// check if inserted active carousel items is smaller than total number of carousel items 
		if(numActiveItems >= numItems) {
			numActiveItems = numItems;
		}
		
		// last item put to first place
		$('ul#carouselItems li:last').prependTo($('ul#carouselItems'));
		
		// show first active carousel items 
		for(var i = 0; i < numActiveItems; i = i + 1)
		{
			$('#carouselItems li:eq(' + i + ')').fadeIn('slow');
		}
		
		$('#carouselItems li:eq(1)').animate({
			opacity: 1
		}, 'slow', function(){
			
		});
	}
	
	function fadeNewItem(action)
	{
		// hide all carousel items
		$('ul#carouselItems li').hide();
		
		// rearrange carousel items
		switch(action) {
			case 'next':
				$('ul#carouselItems li:first').appendTo($('ul#carouselItems'));
				break;

			case 'previous':
				$('ul#carouselItems li:last').prependTo($('ul#carouselItems'));
				break;
		}
		
		// show all carousel items
		$('ul#carouselItems li').fadeIn('slow');
		$('#carouselItems li:eq(1)').animate({
			opacity: 1
		}, 'fast', function(){});
		$('#carouselItems li:eq(0)').animate({
			opacity: 0.5
		}, 'fast', function(){});
	}
	
	function slideNewItem(action)
	{
		switch(action) {
			case 'next':
				$('#carouselItems li:eq(3)').fadeIn(500);
				$('ul#carouselItems').animate({
						left: '-=674px'
					}, 'slow', function(){
						$('#carouselItems li:eq(1)').animate({
							opacity: 0.5
							}, 'fast', function(){});
						$('#carouselItems li:eq(2)').animate({
								opacity: 1
							}, 'fast', function(){
							$('ul#carouselItems li:first').appendTo($('ul#carouselItems'));
							$('ul#carouselItems').css('left','-561px');
						});
				});
				break;

			case 'previous':
				$('#carouselItems li:last').fadeIn(500).prependTo($('ul#carouselItems'));
				$('ul#carouselItems').css('left','-1235px');
				$('ul#carouselItems').animate({
						left: '+=674px'
					}, 'slow', function(){
						$('#carouselItems li:eq(1)').animate({
							opacity: 1
						}, 'fast', function(){});
						$('#carouselItems li:eq(2)').animate({
							opacity: 0.5
						}, 'fast', function(){});
				});
				break;
		}
	}
});