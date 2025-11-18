"use strict";
(function() {
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
function toNumberSafe(value) {
if (value === null || value === undefined) return NaN;
const num = Number(value);
if (typeof value === 'string' && value.trim() === '') return NaN;
return Number.isNaN(num) ? NaN : num;
}
const validNumbers = [], invalidNumbers = [];
apiData.forEach((val) => {
const asString = String(val);
const asBoolean = Boolean(val);
const asNumber = toNumberSafe(val);
if (Number.isNaN(asNumber)) invalidNumbers.push(val);
else validNumbers.push(asNumber);
console.log(asString, asBoolean, asNumber);
});
console.log(validNumbers, invalidNumbers);
})();