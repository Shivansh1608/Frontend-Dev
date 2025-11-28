$(function () {

  // 1) Subscribe
  $(document).on("click", ".subBtn", function () {
    $(this).closest(".topic").addClass("subscribed");
    showMessage("Subscribed successfully!");
  });

  // 2) Unsubscribe
  $(document).on("click", ".unsubBtn", function () {
    $(this).closest(".topic").removeClass("subscribed");
    showMessage("Unsubscribed!");
  });

  // 3) Add new subscription topic (with .on() event)
  $("#addTopic").click(function () {
    let name = $("#newTopic").val().trim();
    if (name === "") return;

    $("#topics").append(
      `<div class="topic">${name} 
        <button class="subBtn">Subscribe</button> 
        <button class="unsubBtn">Unsubscribe</button>
      </div>`
    );

    $("#newTopic").val("");
    showMessage("Topic added!");
  });

  // 4) Remove specific subscription (.off)
  // Example: Remove all unsubscribe buttons
  // $(".unsubBtn").off("click"); // Optional use case

  // 5) Success message display function
  function showMessage(text) {
    $("#statusMsg").text(text).fadeIn(300).delay(1000).fadeOut(300);
  }

});
