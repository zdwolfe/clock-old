$(function() {
  var $minutes = $('.minute');
  var $hours = $('.hour');

  var minuteMap = {
    5: $('.P_five, .P_past'),
    10: $('.P_ten, .P_past'),
    15: $('.P_quarter, .P_past'),
    20: $('.P_twenty, .P_past'),
    30: $('.P_half, .P_past'),
    40: $('.P_twenty, .P_to'),
    45: $('.P_quarter, .P_to'),
    50: $('.P_ten, .P_to')
  };

  function addMinute() {
  }

  function setMinute(minute) {
    $minutes.removeClass('active');
    $(minuteMap[minute]).addClass('active');
  };

  function setHour(hour) {
    $hours.removeClass('active');
    $(hourMap[hour]).addClass('active');
  };

  $('button#CW').mousedown(function() {
    $('td.active').addClass('wasActive').removeClass('active');
    $('td.CW').addClass('active');
  });

  $('button#CW').mouseup(function() {
    $('td.wasActive').removeClass('wasActive').addClass('active');
    $('td.CW').removeClass('active');
  });

  function addHour() {}

  $('button#hour').click(addHour);

  $('button#minute').click(addMinute);

  $('input#toggleAlarm').change(function() {
  });

  var ONE_MINUTE = 1000*60;
  setInterval(ONE_MINUTE, function() {
    var now = new Date();
    var minute = now.getMinutes();
    if (minute % 5 === 0) {
    }
  });
});
