class FormBuilder {
  constructor(fields) {
    this.fields = fields;
    this.form = document.createElement("form");
  }

  build(containerId) {
    this.fields.forEach(field => {
      let label = document.createElement("label");
      label.textContent = field.label + ": ";

      let input = document.createElement("input");
      input.type = field.type;
      input.name = field.name;

      label.appendChild(input);
      this.form.appendChild(label);
      this.form.appendChild(document.createElement("br"));
    });

    let btn = document.createElement("button");
    btn.textContent = "Submit";
    btn.type = "button";
    btn.addEventListener("click", () => this.handleSubmit());

    this.form.appendChild(btn);
    document.getElementById(containerId).appendChild(this.form);
  }

  getFormData() {
    let data = {};
    new FormData(this.form).forEach((v, k) => data[k] = v);
    return data;
  }

  handleSubmit() {
    document.getElementById("output").textContent =
      JSON.stringify(this.getFormData(), null, 2);
  }
}

const fields = [
  { label: "Username", type: "text", name: "username" },
  { label: "Email", type: "email", name: "email" },
  { label: "Password", type: "password", name: "password" },
];

const form = new FormBuilder(fields);
form.build("formContainer");
