$(function() {
  $('#casi').click(function() {
    $('td.active').toggleClass('wasActive').toggleClass('active');
    $('td.casi,td.wolfe').toggleClass('active');
  });
});
