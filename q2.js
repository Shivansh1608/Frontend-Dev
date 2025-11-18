"use strict";
(function() {
const employees = [
{ name: "Amit", salary: "45000", years: "5" },
{ name: "Sara", salary: "38000", years: "2" },
{ name: "Kiran", salary: "52000", years: "7" }
];
employees.forEach(emp => {
try {
const name = emp.name;
const salary = Number(emp.salary);
const years = Number(emp.years);
const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
console.log(name, salary, years, bonus);
} catch (err) {
console.log(err.message);
}
});
})();