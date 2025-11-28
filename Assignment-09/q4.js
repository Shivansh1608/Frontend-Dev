$(function () {

  $("#hide").click(() => $(".banner").hide());
  $("#show").click(() => $(".banner").show());
  $("#slide").click(() => $(".banner").slideToggle());
  $("#fade").click(() => $(".banner").fadeToggle());

  // Auto rotate banners
  let index = 0;
  let banners = $(".banner");
  banners.hide();

  function rotate() {
    banners.eq(index).fadeIn(500).delay(2000).fadeOut(500);
    index = (index + 1) % banners.length;
  }

  rotate();
  setInterval(rotate, 4000);

});
