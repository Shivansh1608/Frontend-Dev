$(function () {

  $("#search").keyup(function () {
    let text = $(this).val().toLowerCase();
    let matched = 0;

    $(".course").each(function () {
      let course = $(this).text().toLowerCase();

      // Reset previous highlight
      $(this).removeClass("highlight");

      if (course.includes(text)) {
        $(this).show();
        $(this).addClass("highlight");
        matched++;
      } else {
        $(this).hide();
      }
    });

    $("#count").text(matched);
  });

  // 5) Clear search
  $("#clear").click(function () {
    $("#search").val("");
    $(".course").show().removeClass("highlight");
    $("#count").text(5);
  });

});
