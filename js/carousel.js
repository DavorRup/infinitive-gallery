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
		showNewItem('next');
	});
	
	$('#previousItem').click(function(){
		showNewItem('previous');
	});
	
	function initCarousel(numActiveItems)
	{
		// get number of all carousel items
		var numItems = $('#carouselItems li').get().length;
		
		// check if inserted active carousel items is smaller than total number of carousel items 
		if(numActiveItems >= numItems) {
			numActiveItems = numItems;
		}
		
		// show first active carousel items 
		for(var i = 0; i < numActiveItems; i = i + 1)
		{
			$('#carouselItems li:eq(' + i + ')').fadeIn('slow');
		}
	}
	
	function showNewItem(action)
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
	}
});