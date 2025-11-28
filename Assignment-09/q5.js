$(function () {

  // 1) Manager click → highlight reports
  $(".manager").click(function () {
    $(this).closest(".dept").find(".report").addClass("highlight");
  });

  // 2) Hover → show contact (.next)
  $(".member").hover(
    function () {
      let name = $(this).text().split(" ")[0].toLowerCase();
      $(this).after(`<div class="contact">Email: ${name}@example.com</div>`);
    },
    function () {
      $(this).next(".contact").remove();
    }
  );

  // 3) Click department → color all members
  $(".dept-name").click(function () {
    $(this).closest(".dept").children(".member").css("background", "#fff3cd");
  });

  // 4) Random employee highlight siblings
  $("#randomEmployee").click(function () {
    let all = $(".member");
    let rand = all.eq(Math.floor(Math.random() * all.length));
    rand.addClass("highlight");
    rand.siblings(".member").addClass("highlight");
  });

  // 5) Collapse reports
  $(".collapse").click(function () {
    $(this).closest(".dept").find(".report").slideToggle();
  });

});
