'use strict'; // no sloppy JS habits allowed here.
document.addEventListener('DOMContentLoaded', function() {
	document.querySelector("body").addEventListener("click", function (event) {
		//event.preventDefault();
		if (event.target.matches("#arrow")) {
			// jQuery to scroll to element
			$('html, body').animate({
				scrollTop: $("#aboutMe").offset().top
			}, 500);
		}
		if (event.target.matches("#more")) {
			document.querySelector("#moreContent").classList.toggle('hide');
		}
		// console.log("hello still!");
	});

	function navigationSticky() {
        var windowTop = $(window).scrollTop(),
			height = document.querySelector('#header .container').offsetHeight;
		if (windowTop > height) {
			document.querySelector('#side-nav').classList.add('scrolled');
		} else if (windowTop > height/3) {
			document.querySelector('#header .container').classList.add('scrolled');
        } else {
			document.querySelector('#header .container').classList.remove('scrolled');
			document.querySelector('#side-nav').classList.remove('scrolled');
        };
	}
	
	navigationSticky();
    $(window).on("scroll", navigationSticky);
    $(window).on("resize", navigationSticky);

    

// end fake document ready
}, false);
