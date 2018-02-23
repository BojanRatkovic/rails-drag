(function($){

  // Init side navigation.
  $('.open-nav').sideNav({
    menuWidth: 100 + "%"
  });

  // Init 3 main tabs.
  $('.main-tab-switch').tabs({
    swipeable: false,
    responsiveThreshold: 1920
  });

  // Init component categories.
  $('.tabs-components').tabs({
    swipeable: false,
    responsiveThreshold: 1920
  });

  // Close side nav.
  $('.close-btn').on('click', function() {
    $('.open-nav').sideNav('hide');
  });
  
})(jQuery);