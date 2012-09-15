$(document).ready(function() {
  $('input[type="radio"]').attr('checked', false).checkboxradio('refresh');
  $('#details').hide();
  var completed = [];
  var questions = $('fieldset');
  questions.change(function(e) {
    if (completed.indexOf(e.currentTarget.id) === -1) {
      completed.push(e.currentTarget.id);
      if (completed.length === questions.length) {
	$('#details').show();
      }
    }
  });
});