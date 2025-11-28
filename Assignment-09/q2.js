$(function () {

  // 1) Click → highlight
  $(".product").click(function (e) {
    if ($(e.target).hasClass("fav")) return;

    $(".product").removeClass("highlight");
    $(this).addClass("highlight");

    // 5) Out of stock alert
    if ($(this).data("stock") === 0) {
      alert("Product is out of stock!");
    }
  });

  // 2) Hover → details
  $(".product").hover(
    function () {
      $(this).find(".details").slideDown(150);
    },
    function () {
      $(this).find(".details").slideUp(150);
    }
  );

  // 3) Favorite toggle
  $(".fav").click(function () {
    $(this).text($(this).text() === "♡" ? "♥" : "♡");
  });

});
