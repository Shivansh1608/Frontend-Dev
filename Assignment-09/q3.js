$(function () {

  // 1) Toggle answer
  $(".question").click(function () {
    $(this).next(".answer").slideToggle(150);
  });

  // 2) Hover color
  $(".question").hover(
    function () { $(this).css("color", "blue"); },
    function () { $(this).css("color", "black"); }
  );

  // 3) Double click collapse all
  $(".question").dblclick(function () {
    $(".answer").slideUp(150);
  });

  // 4) Focus → highlight
  $("#faqInput").focus(function () {
    $(".question").first().addClass("q-focus");
  });

  // 5) Blur → remove highlight
  $("#faqInput").blur(function () {
    $(".question").removeClass("q-focus");
  });

});
