var mobileScreenSize;
var thisWindow = $(window);
var scrollCounter = 0


$(function(){
	$("body").bind('mousewheel', function(e){
		if(e.originalEvent.wheelDelta < 0 && scrollCounter < 1){
			$(".section" + (scrollCounter + 1)).animate({ "left": "-=" + $(".section0").width() });
			scrollCounter++;
		}
		if (e.originalEvent.wheelDelta > 0 && scrollCounter > 0){
			$(".section" + (scrollCounter)).animate({ "left": "+=" + $(".section0").width() });
			scrollCounter--;
		}
	});
    //disable carousel auto slide
	$("#myCarousel").carousel({
        interval: false
	})
})


function navOnclick(number){
	var currentCircle = $(".current-circle");
	if (scrollCounter != number){
		currentCircle.removeClass("current-circle");
		currentCircle.addClass("nav-circular-div");
		$("#circle" + number).addClass("current-circle");
		$("#circle" + number).removeClass("nav-circular-div");
		if (parseInt(currentCircle.attr("value")) < number){
			$(".section" + number).animate({ "left": "-=" + $(".section0").width() });
			scrollCounter++;
			var i;
			for(i = parseInt(currentCircle.attr("value")) + 1; i < number; i++){
				$(".section" + i).animate({ "left": "-=" + $(".section0").width() });
				scrollCounter++;
			}
		} else {
			for(i = number + 1; i <= parseInt(currentCircle.attr("value")); i++){
				$(".section" + i).animate({ "left": "+=" + $(".section0").width() });
				scrollCounter--;
			}
			/*
			var thisNumber = number + 1;
			$(".section" + thisNumber).animate({ "left": "+=" + $(".section0").width() });
			scrollCounter--;
			*/
		}
	}
}

$(function() {
	resizeSection0();
	$(".section:not(.section0)").offset({ top: 0, left: thisWindow.width()});
});

$(window).resize(function() {
	resizeSection0();
})

function resizeSection0(){
	var windowHeight = thisWindow.height();
	var windowWidth = thisWindow.width();
	$(".section0").height(windowHeight).width(windowWidth); 
	$(".section1").height(windowHeight).width(windowWidth);
	$(".section2").height(windowHeight).width(windowWidth);
	for(var i = scrollCounter + 1; i <= 2; i++){
		$(".section" + i).offset({ top: 0, left: windowWidth });
	}
	if(windowWidth < 767)
	{
		var navBar = $("#myNavbar");
		navBar.height(windowHeight);
		navBar.width(windowWidth);
		$("navbar-wrap").width(windowWidth);
	}
	$(".my-nav-bar").offset({top: 0.9 * windowHeight});
	$(".my-nav-bar").width(windowWidth);
	$(".skills-photo").height($(".skills-photo").width());
	var standardHeight = $(".container").height() / 2;
	$(".skills-photo").each(
		function(){
			$(this).height(standardHeight);
		}
	);
	standardHeight = $(".carousel-inner").width() * 0.6
	$(".sm-skills-photo").each(
		function(){
			$(this).height(standardHeight);
		}
	);
	$("#left-carousel-control").css("background-image", "none");
	$("#right-carousel-control").css("background-image", "none");
}

var navbarCounter = 0;

function navbarToggleOnClick(){
	if (navbarCounter % 2 == 0){
		$(".navbar-wrap").show("fast").find(".navbar-collapse").show("fast");
		//$(".navbar-toggle").css("z-index", 11);
		$(".icon-bar").css("background-color", "#337ab7");
	}
	else {
		//$(".navbar-toggle").css("z-index", 10);
		$(".navbar-wrap").hide("fast").find(".navbar-collapse").hide("fast");
		$(".icon-bar").css("background-color", "white");
	}
	navbarCounter++;
}

function toSection0(){
	navOnclick(0);
	$(".navbar-wrap").hide("fast").find(".navbar-collapse").hide("fast");
}

function toSection1(){
	navOnclick(1);
	navbarToggleOnClick()
}

function toSection2(){
	navOnclick(2);
	navbarToggleOnClick()
}
