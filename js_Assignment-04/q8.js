let user = { name: "Akash", email: "akash@mail.com", age: 21 };

const out = document.getElementById("userOut");
const form = document.getElementById("editForm");

function render() {
  out.textContent = JSON.stringify(user, null, 2);
}

render();

form.name.value = user.name;
form.email.value = user.email;
form.age.value = user.age;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  user = {
    ...user,
    name: form.name.value,
    email: form.email.value,
    age: Number(form.age.value)
  };

  render();
});
