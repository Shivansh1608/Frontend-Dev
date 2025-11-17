
let orderAmount = 450
let isPremium = false
let isRemote = true

let deliveryFee = 0

if (orderAmount < 500 && isPremium === false) {
    deliveryFee = 50
}

if (isPremium === true) {
    deliveryFee = 0
}

let deliveryDays = 3


if (isRemote === true) {
    deliveryDays = deliveryDays + 2
}
let totalCost = orderAmount + deliveryFee

console.log("Order amount is", orderAmount)
console.log("Premium member status is", isPremium)
console.log("Remote area status is", isRemote)
console.log("Delivery fee is", deliveryFee)
console.log("Total cost is", totalCost)
console.log("Estimated delivery time is", deliveryDays, "days")
