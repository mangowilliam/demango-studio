$(document).ready(function() {
  $(".btn_dsn").click(function() {
    $("#dsn").toggle();
    $(".btn_dsn").hide();
  });
  $("#dsn").click(function() {
    $(".btn_dsn").toggle();
    $("#dsn").hide();
  });
});
$(document).ready(function() {
  $(".btn_dev").click(function() {
    $("#dev").toggle();
    $(".btn_dev").hide();
  });
  $("#dev").click(function() {
    $(".btn_dev").toggle();
    $("#dev").hide();
  });
});
$(document).ready(function() {
  $(".btn_mgt").click(function() {
    $("#mgt").toggle();
    $(".btn_mgt").hide();
  });
  $("#mgt").click(function() {
    $(".btn_mgt").toggle();
    $("#mgt").hide();
  });
});