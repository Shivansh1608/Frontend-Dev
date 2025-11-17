let showTime = "evening" 
let tickets = 4 
let isStudent = false
let age = 65

let basePrice = showTime === "morning" ? 120 : 180
let totalBase = basePrice * tickets

let discount = 0
if (isStudent === true) {
    discount = totalBase * 0.10
} else if (age > 60) {
    discount = totalBase * 0.20
}

let discountedTotal = totalBase - discount

let serviceFee = 0
if (tickets > 3) {
    serviceFee = 50
}

let finalAmount = discountedTotal + serviceFee

console.log("Base price is", totalBase)
console.log("Discounted total is", discountedTotal)
console.log("Final amount is", finalAmount)
