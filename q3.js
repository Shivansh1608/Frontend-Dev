"use strict";
(function() {
class TransactionError extends Error {}
class NegativeAmountError extends TransactionError {}
class MissingFieldError extends TransactionError {}
class NullTransactionError extends TransactionError {}
const transactions = [
{ id: 1, amount: 2000 },
{ id: 2, amount: -500 },
{ id: 3 },
null
];
const valid = [], invalid = [];
transactions.forEach(tx => {
try {
if (tx === null) throw new NullTransactionError();
if (tx.id === undefined || tx.amount === undefined) throw new MissingFieldError();
if (tx.amount < 0) throw new NegativeAmountError();
valid.push(tx);
} catch (e) {
invalid.push(e);
}
});
console.log(valid, invalid);
})();