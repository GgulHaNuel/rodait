$(function() {
    function scrollRotate() {
        let image = document.getElementById("SCROLL_CIRCLE");
	    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    }

	window.addEventListener('scroll',scrollRotate);
});