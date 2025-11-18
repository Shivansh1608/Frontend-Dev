"use strict";
(function() {
function generatePyramid(rows = 5) {
for (let i = 1; i <= rows; i++) {
let line = '';
for (let j = 0; j < i; j++) line += '* ';
console.log(line.trim());
}
}
generatePyramid();
})();