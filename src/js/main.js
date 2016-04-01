$(function () {
  // Landing Background Animation
  $('.landing').particleground({
    density: 38000,
    dotColor: '#d6d6d6',
    lineColor: '#efefef',
    particleRadius: 4,
    proximity: 190
  });

  // Menu clicking to scroll
  $('header a').on('click', function(e) {
    e.preventDefault();
    $('header a').removeClass('active');
    $(this).addClass('active');
    //console.log($(this).attr('href'))
    var scrollElem = $($(this).attr('href'));
    var toScrollTop = scrollElem.position().top - 80; // 80px for the header height
    $("html, body").animate({ scrollTop: toScrollTop }, '400');
  });

  // Waypoints Init
  // Logo
  $('.landing').waypoint(function(direction) {
    if (direction == 'down') {
      $('.logo').addClass('fixed');

    }
  }, { offset: '-35%'});

  $('.landing').waypoint(function(direction) {
    if (direction == 'up') {
      $('.logo').removeClass('fixed');
    }
  }, { offset: '-45%'});

  // scroll to active menu
  $('.about').waypoint(function() {
    $('header a').removeClass('active');
    $('header a:eq(0)').addClass('active');
  }, { offset: '20%' });

  $('.works').waypoint(function() {
    $('header a').removeClass('active');
    $('header a:eq(1)').addClass('active');
  }, { offset: '20%' });

  $('.team').waypoint(function() {
    $('header a').removeClass('active');
    $('header a:eq(2)').addClass('active');
  }, { offset: '20%' });

  $('.contact').waypoint(function() {
    $('header a').removeClass('active');
    $('header a:eq(3)').addClass('active');
  }, { offset: '20%' });
});
