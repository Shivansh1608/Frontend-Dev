const formRQ = document.getElementById("resumeForm");
const outRQ = document.getElementById("resumeOut");

formRQ.addEventListener("submit", (e) => {
  e.preventDefault();

  let fd = new FormData(formRQ);
  let name = fd.get("name");
  let email = fd.get("email");
  let skills = fd.get("skills").split(",").map(s => s.trim());
  let github = fd.get("github");
  let linkedin = fd.get("linkedin");

  let ok = true;

  const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const urlRe = /^https:\/\//;

  document.getElementById("emailErr").textContent = "";
  document.getElementById("gitErr").textContent = "";
  document.getElementById("linkErr").textContent = "";

  if (!emailRe.test(email)) {
    document.getElementById("emailErr").textContent = "Invalid email!";
    ok = false;
  }

  if (github && !urlRe.test(github)) {
    document.getElementById("gitErr").textContent = "GitHub URL must start with https://";
    ok = false;
  }

  if (linkedin && !urlRe.test(linkedin)) {
    document.getElementById("linkErr").textContent = "LinkedIn URL must start with https://";
    ok = false;
  }

  if (!ok) return;

  const resumeObj = { name, email, skills, github, linkedin };
  outRQ.textContent = JSON.stringify(resumeObj, null, 2);
});
