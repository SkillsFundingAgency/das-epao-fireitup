// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};
//
// // Get the navbar
// var backToTop = document.getElementById("back-to-top");
//
// // Get the offset position of the navbar
// var sticky = backToTop.offsetTop;
//
// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
// 	if (window.pageYOffset >= sticky) {
// 		backToTop.classList.add("sticky");
// 	} else {
// 		backToTop.classList.remove("sticky");
// 	}
// }


$(window).scroll(function(){
	if ($(this).scrollTop() > 0) {
		$('#back-to-top').addClass('sticky');
		$('header .header').addClass('active header--active');
		// $('.navigation__sub-menu').addClass('sticky');
	} else {
		$('#back-to-top').removeClass('sticky');
		$('header .header').removeClass('active header--active');
		// $('.navigation__sub-menu').removeClass('sticky');
	}

});
