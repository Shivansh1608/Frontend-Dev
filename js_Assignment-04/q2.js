const qs = (id) => document.getElementById(id);

const patterns = {
  name: /^[A-Za-z ]+$/,
  email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
  phone: /^\d{10}$/,
  password: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{6,}$/,
};

function validate(id, pattern, errId, msg) {
  let input = qs(id);
  let val = input.value.trim();
  let ok = pattern.test(val);

  if (!ok) {
    input.className = "error";
    qs(errId).innerText = msg;
  } else {
    input.className = "valid";
    qs(errId).innerText = "";
  }

  return ok;
}

qs("regForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let ok =
    validate("name", patterns.name, "nameErr", "Only alphabets allowed") &
    validate("email", patterns.email, "emailErr", "Invalid Email") &
    validate("phone", patterns.phone, "phoneErr", "Must be 10 digits") &
    validate("password", patterns.password, "passErr", "Weak password");

  if (ok) alert("Registration Successful!");
});
