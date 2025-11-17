
let accountType = "savings"       
let amount = 150000              
let years = 5                     
let rate = 0
if (accountType === "savings") {
    rate = 4
} else if (accountType === "fixed") {
    rate = 6.5
}
if (amount > 100000) {
    rate = rate + 1
}
let total = amount * Math.pow((1 + rate / 100), years)

console.log("Account type is", accountType)
console.log("Initial amount is", amount)
console.log("Years", years)
console.log("Interest rate applied is", rate)
console.log("Final balance is", total.toFixed(2))
