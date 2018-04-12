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
		} else if (windowTop > height/5) {
			document.querySelector('#header .container').classList.add('scrolled');
        } else {
			document.querySelector('#header .container').classList.remove('scrolled');
			document.querySelector('#side-nav').classList.remove('scrolled');
        };
	}
	
	var pad = 60;
	var one = $("#aboutMe").offset();
	var two = $("#whySkilljar").offset();
	var three = $("#careerHighlights").offset();
	var four = $("#lowerBody").offset();
	var modules = $(".module").each(function(){
		$(this).offset();
	})
	console.log("modules",modules)

	// function navHighlights() {
	// 	$(window).scroll(function(){
	// 		var screenPosition = $(document).scrollTop();
	// 		for(var i = 0; i < modules.length; i++) {
	// 			console.log("inside screenPosition loop", modules[i].offsetTop)
	// 			if (screenPosition < modules[i].offsetTop - pad) {
	// 				$(".module").removeClass("active");
	// 				$(this).addClass("active");
	// 				break;
	// 			}
	// 			if (screenPosition >= modules[i].offsetTop - pad) {
	// 				$(".module").removeClass("active");
	// 				$(this).addClass("active");
	// 				break;
	// 			}
	// 		}	
	// 	});
	// }

	// function navHighlights() {
	// 	$(window).scroll(function(){
	// 		var screenPosition = $(document).scrollTop();
	// 		if (screenPosition < two.top - pad) {
	// 			$( "#one" ).addClass( "active" );
	// 			//be sure you are removing the active class from the other ones.
	// 			$("#two").removeClass("active");
	// 		}
	// 		if (screenPosition >= two.top - pad) {
	// 			$( "#two" ).addClass( "active" );
	// 			$("#one").removeClass("active");
	// 		}
	// 	});
	// }

	function navHighlights() {
		$(window).scroll(function(){
			var screenPosition = $(document).scrollTop();
			if (screenPosition < two.top - pad) {
				$("#side-nav li").removeClass("active");
				$( "#one" ).addClass( "active" );				
			}
			if (screenPosition >= two.top - pad && screenPosition < two.top + $("#aboutMe").height()) {
				$("#side-nav li").removeClass("active");
				$( "#two" ).addClass( "active" );
			}
			if (screenPosition >= three.top - pad && screenPosition < three.top + $("#whySkilljar").height()) {
				$("#side-nav li").removeClass("active");
				$( "#three" ).addClass( "active" );
			}
			if (screenPosition >= four.top - pad && screenPosition < four.top + $("#careerHighlights").height()) {
				$("#side-nav li").removeClass("active");
				$( "#four" ).addClass( "active" );
			}
		});
	}

	navigationSticky();
	navHighlights();

    $(window).on("scroll", function(){navigationSticky();navHighlights();});
    $(window).on("resize", function(){navigationSticky();navHighlights();});    

// end fake document ready
}, false);
