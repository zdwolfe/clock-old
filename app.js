$(function() {

  var num_cells = $('td').length;
  var num_usable_cells = num_cells - $('td.extra').length;

  var num_rows = $('tr').length;
  var num_cols = $('tr').first().children('td').length;

  $('#num_cells').text(num_cells);
  $('#num_usable_cells').text(num_usable_cells);
  $('#num_rows').text(num_rows);
  $('#num_cols').text(num_cols);
});
