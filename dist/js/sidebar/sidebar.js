$(document).ready(function() {
	$('.sidebar-nav .show').click(function(e){
		e.preventDefault();
		$(this).parent().find('ul').toggle();
		$(this).toggleClass('show hide');
		$(this).html($(this).text() == 'Hide this content' ? 'Show content within' : 'Hide this content');
	});

	if ($('main').hasClass('page-app-1')) {
		$('ol.sidebar-nav li').removeClass('sidebar-nav__section--active');
		$('ol.sidebar-nav li[data-tab-no="1"]').addClass('sidebar-nav__section--active');
		$('ol.sidebar-nav li a.show-hide-link').removeClass('hide').addClass('show').html('Show content within');
		$('ol.sidebar-nav li[data-tab-no="1"] a.show-hide-link').removeClass('show').addClass('hide').html('Hide this content');
		$('ol.sidebar-nav').removeClass('last-stage');
	} else if ($('main').hasClass('page-app-2')) {
		$('ol.sidebar-nav li').removeClass('sidebar-nav__section--active');
		$('ol.sidebar-nav li[data-tab-no="2"]').addClass('sidebar-nav__section--active');
		$('ol.sidebar-nav li a.show-hide-link').removeClass('hide').addClass('show').html('Show content within');
		$('ol.sidebar-nav li[data-tab-no="2"] a.show-hide-link').removeClass('show').addClass('hide').html('Hide this content');
		$('ol.sidebar-nav').removeClass('last-stage');
	} else if ($('main').hasClass('page-app-3')) {
		$('ol.sidebar-nav li').removeClass('sidebar-nav__section--active');
		$('ol.sidebar-nav li[data-tab-no="3"]').addClass('sidebar-nav__section--active');
		$('ol.sidebar-nav li a.show-hide-link').removeClass('hide').addClass('show').html('Show content within');
		$('ol.sidebar-nav li[data-tab-no="3"] a.show-hide-link').removeClass('show').addClass('hide').html('Hide this content');
		$('ol.sidebar-nav').removeClass('last-stage');
	} else if ($('main').hasClass('page-app-4')) {
		$('ol.sidebar-nav li').removeClass('sidebar-nav__section--active');
		$('ol.sidebar-nav li[data-tab-no="4"]').addClass('sidebar-nav__section--active');
		$('ol.sidebar-nav li a.show-hide-link').removeClass('hide').addClass('show').html('Show content within');
		$('ol.sidebar-nav li[data-tab-no="4"] a.show-hide-link').removeClass('show').addClass('hide').html('Hide this content');
		$('ol.sidebar-nav').removeClass('last-stage');
	} else if ($('main').hasClass('page-app-5')) {
		$('ol.sidebar-nav li').removeClass('sidebar-nav__section--active');
		$('ol.sidebar-nav li[data-tab-no="5"]').addClass('sidebar-nav__section--active');
		$('ol.sidebar-nav li a.show-hide-link').removeClass('hide').addClass('show').html('Show content within');
		$('ol.sidebar-nav li[data-tab-no="5"] a.show-hide-link').removeClass('show').addClass('hide').html('Hide this content');
		$('ol.sidebar-nav').removeClass('last-stage');
	} else if ($('main').hasClass('page-app-6')) {
		$('ol.sidebar-nav li').removeClass('sidebar-nav__section--active');
		$('ol.sidebar-nav li[data-tab-no="6"]').addClass('sidebar-nav__section--active');
		$('ol.sidebar-nav li a.show-hide-link').removeClass('hide').addClass('show').html('Show content within');
		$('ol.sidebar-nav li[data-tab-no="6"] a.show-hide-link').removeClass('show').addClass('hide').html('Hide this content');
		$('ol.sidebar-nav').addClass('last-stage');
	}

});
