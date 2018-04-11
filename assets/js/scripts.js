'use strict'; // no sloppy JS habits allowed here.
document.addEventListener('DOMContentLoaded', function(){
	document.querySelector("body").addEventListener("click", function(event){
		event.preventDefault();
		console.log("hello !");
	});

// end fake document ready
}, false);
