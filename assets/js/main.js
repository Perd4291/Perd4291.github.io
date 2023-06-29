/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav'),
		$topBtn = $('#topBtn');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);


$('#topBtn').click(function() {
	$('html, body').animate({
		scrollTop: 0
	});
});

$('#title').click(function() {

	$('html, body').animate({
		scrollTop: 0
	});
});

let erdvar = 0;
let anivar = 0;
let javavar = 0;

$('.erd span').click(function() {

	erdvar++;

	if (erdvar == 3) {
		erdvar = 0;
	}

	let text = 'images/erd' + erdvar + '.png';
	
	$('.erd img').prop('src', text);
});

$('.animingle span').click(function() {

	anivar++;

	if (anivar == 4) {
		anivar = 0;
	}

	let text = 'images/animingle' + anivar + '.png';

	$('.animingle img').prop('src', text);
});

$('.java span').click(function() {

	javavar++;

	if (javavar == 3) {
		javavar = 0;
	}

	let text = 'images/java' + javavar + '.png';

	$('.java img').prop('src', text);
});