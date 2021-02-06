var slideItem = 0;

window.onload = function() {
	setInterval(passarSlideBanner, 5000);
}
function passarSlideBanner() {
	
	if(slideItem >= 2) {
		slideItem = 0;
	} else {
		slideItem++;
    }
    

    document.getElementById("slideshow").style.marginLeft = "-"+(100 * slideItem)+"vw";
    document.getElementById("pointer"+slideItem).classList.add("active");
    if(slideItem == 0) {
        document.getElementById("pointer"+(2 + slideItem)).classList.remove("active");
    } else {
        document.getElementById("pointer"+(slideItem - 1)).classList.remove("active");
    }
    
}
function mudarSlideBanner(pos) {
	slideItem = pos;
	
    document.getElementById("slideshow").style.marginLeft = "-"+(100 * slideItem)+"vw";
    document.getElementById("pointer0").classList.remove("active");
    document.getElementById("pointer1").classList.remove("active");
    document.getElementById("pointer2").classList.remove("active");
    
    document.getElementById("pointer"+slideItem).classList.add("active");
}

function mudarSlideTest(pos) {
	slideItem = pos;
	
    document.getElementById("slide-testimonials").style.marginLeft = "-"+(100 * slideItem)+"vw";
    document.getElementById("pointer-test-0").classList.remove("active");
    document.getElementById("pointer-test-1").classList.remove("active");
    document.getElementById("pointer-test-2").classList.remove("active");
    
    document.getElementById("pointer-test-"+slideItem).classList.add("active");
}



