$(function () {

  $("#submit").click(function () {

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let pass = $("#pass").val();

    let valid = true;

    // Reset borders
    $("input").removeClass("error");

    // 1) Name not empty
    if (name === "") {
      $("#name").addClass("error");
      valid = false;
    }

    // 2) Email format + uniqueness check (simple array)
    let usedEmails = ["test@gmail.com", "admin@example.com"];

    let emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValid || usedEmails.includes(email)) {
      $("#email").addClass("error");
      valid = false;
    }

    // 3) Password ≥ 8 chars
    if (pass.length < 8) {
      $("#pass").addClass("error");
      valid = false;
    }

    // 4) Success message
    if (valid) {
      $("#msg").fadeIn(300);
    }

  });

});
