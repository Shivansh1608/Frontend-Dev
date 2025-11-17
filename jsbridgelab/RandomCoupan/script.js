let coupon = Math.floor(Math.random() * 100) + 1

let message = ""

if (coupon <= 30) {
    message = "You won a 10 percent discount"
} else if (coupon <= 60) {
    message = "You won a 20 percent discount"
} else if (coupon <= 90) {
    message = "You won a 30 percent discount"
} else {
    message = "You won a 50 percent Mega Offer"
}

let isPrime = true
if (coupon < 2) {
    isPrime = false
} else {
    for (let i = 2; i <= Math.sqrt(coupon); i++) {
        if (coupon % i === 0) {
            isPrime = false
            break
        }
    }
}

console.log("Coupon number is", coupon)
console.log(message)

if (isPrime === true) {
    console.log("Prime number bonus applied")
}
