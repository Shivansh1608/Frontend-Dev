class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary = () => this.salary * 12;

  applyBonus = (percent) => {
    this.salary += (this.salary * percent / 100);
  };
}

const employees = [
  new Employee(1, "Aman", "HR", 30000),
  new Employee(2, "Priya", "Sales", 32000),
  new Employee(3, "Vikram", "Dev", 50000),
  new Employee(4, "Riya", "Support", 28000),
  new Employee(5, "Sarthak", "QA", 26000),
];

// Apply 10% bonus
employees.forEach(emp => emp.applyBonus(10));

const total = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);

document.getElementById("output").textContent =
  employees.map(e => `${e.name}: ₹${e.getAnnualSalary()}`).join("\n") +
  `\n\nTotal Annual Payout: ₹${total}`;
