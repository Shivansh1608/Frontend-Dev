"use strict";
(function() {
const rawData = [
'{"user":"Alex","age":25}',
'{"id":2}',
'{invalid}',
'{"user":"Mina","age":"22"}'
];
const clean = [];
rawData.forEach((txt, idx) => {
try {
const obj = JSON.parse(txt);
if (!obj.user || obj.age === undefined) throw new Error();
obj.age = Number(obj.age);
clean.push(obj);
} catch(e){ console.log(idx, e.message); }
});
const adults = clean.filter(u => u.age >= 18);
console.log(clean, adults);
})();