"use strict";
(function() {
function outer() {
var count = 5;
function inner() {
var count = 10;
console.log(count);
}
inner();
console.log(count);
}
outer();
})();