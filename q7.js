"use strict";
(function() {
class InvalidOperationError extends Error {}
class DivideByZeroError extends Error {}
class NegativeRootError extends Error {}
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;
function compute(op, a, b) {
switch (op) {
case 'add': return a + b;
case 'subtract': return a - b;
case 'divide': if (b === 0) throw new DivideByZeroError(); return a / b;
case 'power': return Math.pow(a, b);
case 'root': if (a < 0) throw new NegativeRootError(); return Math.pow(a, 1/b);
default: throw new InvalidOperationError(op);
}
}
operations.forEach(op => {
try { console.log(op, compute(op, num1, num2)); }
catch(e){ console.log(e.message); }
});
})();