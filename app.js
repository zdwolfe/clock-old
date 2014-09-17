$(function() {
  $('#casi').click(function() {
    $('td.active').toggleClass('wasActive');
    $('td.wasActive').toggleClass('active');
    $('td.casi,td.wolfe').toggleClass('active');
  });
});
