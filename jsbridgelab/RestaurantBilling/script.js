let baseAmount = 2500
let diningIn = true

let gst = baseAmount * 0.05

let serviceTax = 0
if (diningIn === true) {
    serviceTax = baseAmount * 0.10
}

let totalBeforeTip = baseAmount + gst + serviceTax

let tip = 0
if (totalBeforeTip > 2000) {
    tip = totalBeforeTip * 0.08
}

let finalTotal = totalBeforeTip + tip

console.log("Base amount is", baseAmount)
console.log("GST is", gst)
console.log("Service tax is", serviceTax)
console.log("Tip amount is", tip)
console.log("Final total is", finalTotal.toFixed(2))
