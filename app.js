$(function() {
  
  var clock = {
    hour: 0,
    minute: 0,
    second: 0
  };

  $('button#casi').mousedown(function() {
    $('td.active').addClass('wasActive').removeClass('active');
    $('td.casi, td.wolfe').addClass('active');
  });

  $('button#casi').mouseup(function() {
    $('td.wasActive').removeClass('wasActive').addClass('active');
    $('td.casi, td.wolfe').removeClass('active');
  });

  $('button#hour').click(function() {
    clock.hour++;
  });

  $('button#minute').click(function() {
  });

  $('input#alarm').change(function() {
  });
});
