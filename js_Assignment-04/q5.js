const q = id => document.getElementById(id);

q("movieForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let name = q("name").value.trim();
  let email = q("email").value.trim();
  let seats = Number(q("seats").value);

  let ok = true;

  if (!/^[A-Za-z ]+$/.test(name)) {
    q("nameErr").textContent = "Invalid name!";
    ok = false;
  } else q("nameErr").textContent = "";

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    q("emailErr").textContent = "Invalid email!";
    ok = false;
  } else q("emailErr").textContent = "";

  if (seats < 1 || seats > 10) {
    q("seatsErr").textContent = "Seats must be 1–10";
    ok = false;
  } else q("seatsErr").textContent = "";

  if (!ok) return;

  const ticket = { name, email, seats };
  q("ticketOut").textContent = JSON.stringify(ticket, null, 2);
});
