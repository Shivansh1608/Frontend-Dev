$(document).ready(function () {

  // 1) Greeting based on time
  let hour = new Date().getHours();
  let greet = hour < 12 ? "Good Morning" :
              hour < 18 ? "Good Afternoon" :
                          "Good Evening";
  $("#greeting").text(greet);

  // 2) Change Greeting
  $("#changeGreeting").click(function () {
    $("#greeting").text("Stay motivated and keep learning!");
  });

  // 3) Toggle visibility
  $("#toggleMsg").click(function () {
    $("#welcomeMsg").toggle();
  });

  // 4) Greeting click alert
  $("#greeting").click(function () {
    alert("Greeting clicked!");
  });

});
