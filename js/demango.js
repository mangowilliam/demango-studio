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
$(document).ready(function() {
  $("form.fullname").submit(function(event) {
    var fullname = $("input#name").val();
    var mail = $("input#mail").val();
    var message = $("input#message").val();
    $(".fullname").append(name);
    $(".mail").append(mail);
    $(".message").append(message);
    $(".fullname").text(fullname);
    event.preventDefault();
  });
});
$(document).ready(function() {
  $(".sub").click(function() {
    $(".fullname").show();
  });
});