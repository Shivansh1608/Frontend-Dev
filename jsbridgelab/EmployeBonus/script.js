let rating = 4
let experience = 6
let salary = 120000

let bonusPercent = 0

if (rating === 5) {
    bonusPercent = 20
} else if (rating === 4) {
    bonusPercent = 15
} else if (rating === 3) {
    bonusPercent = 10
}

if (experience > 5) {
    bonusPercent = bonusPercent + 5
}

let calculatedBonus = salary * (bonusPercent / 100)

let finalBonus = calculatedBonus
if (salary > 100000 && calculatedBonus > 25000) {
    finalBonus = 25000
}

let totalSalary = salary + finalBonus

console.log("Calculated bonus is", calculatedBonus)
console.log("Final bonus after cap is", finalBonus)
console.log("Total salary after bonus is", totalSalary)
