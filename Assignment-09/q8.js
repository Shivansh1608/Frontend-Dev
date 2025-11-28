$(function () {

  // 1) Add new post
  $("#add").click(function () {
    $("#posts").append('<div class="post">New Blog Post Added</div>');
  });

  // 2) Prepend featured post
  $("#pre").click(function () {
    $("#posts").prepend('<div class="post">🔥 Featured Post on Web Dev</div>');
  });

  // 3) Remove last post
  $("#removeLast").click(function () {
    $("#posts .post").last().remove();
  });

  // 4) Add tags using before/after
  $(".post").each(function () {
    $(this).before('<span class="tag">#Blog</span>');
  });

  // 5) Highlight posts with keyword
  $(".post").each(function () {
    if ($(this).text().toLowerCase().includes("css")) {
      $(this).css("background", "#e1f5fe");
    }
  });

});
