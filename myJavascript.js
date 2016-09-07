var mobileScreenSize;
var thisWindow = $(window);

$(function() {
	if (thisWindow.width() <766){
		
	}
	resizeSection0();
});

$(window).resize(function() {
	resizeSection0();
})

function resizeSection0(){
	if(thisWindow.width() >= 767)
		if (thisWindow.width() >= 992)
			$(".section0").height(thisWindow.height() - 106); 
		else
			$(".section0").height(thisWindow.height() - 82); 
	else
	{
		var navBar = $("#myNavbar");
		var windowHeight = thisWindow.height()
		var windowWidth = thisWindow.width();
		$(".section0").height(windowHeight);
		navBar.height(windowHeight);
		navBar.width(windowWidth);
		$("navbar-wrap").width(windowWidth);
	}
}

var navbarCounter = 0;

function navbarToggleOnClick(){
	if (navbarCounter % 2 == 0){
		$(".navbar-wrap").show("fast").find(".navbar-collapse").show("fast");
		$(".navbar-toggle").css("z-index", 11);
		$(".icon-bar").css("background-color", "#337ab7");
	}
	else {
		$(".navbar-toggle").css("z-index", 0);
		$(".navbar-wrap").hide("fast").find(".navbar-collapse").hide("fast");
		$(".icon-bar").css("background-color", "white");
	}
	navbarCounter++;
}