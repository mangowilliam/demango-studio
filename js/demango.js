$(document).ready(function() {
  $("#pop").mouseover(function() {
    $(this).children(".popup").show();
  });
  $("#pop").mouseout(function() {
    $(this).children(".popup").hide();
  });
});