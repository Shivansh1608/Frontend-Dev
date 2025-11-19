const q = id => document.getElementById(id);

q("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let user = q("username").value.trim();
  let pass = q("password").value;

  q("userErr").textContent = "";
  q("passErr").textContent = "";
  q("msg").textContent = "";

  let ok = true;

  if (user.length < 5) {
    q("userErr").textContent = "Username must be at least 5 characters";
    ok = false;
  }

  let passRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
  if (!passRe.test(pass)) {
    q("passErr").textContent =
      "Password must be 8+ chars, include uppercase, lowercase, number, special char";
    ok = false;
  }

  if (ok) q("msg").textContent = "Login Successful!";
});
