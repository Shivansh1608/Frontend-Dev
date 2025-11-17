let delays = [3, 7, 12, 2, 15]

let totalFine = 0

for (let i = 0; i < delays.length; i++) {
    let days = delays[i]
    let fine = 0

    if (days >= 1 && days <= 5) {
        fine = days * 10
    } else if (days >= 6 && days <= 10) {
        fine = days * 20
    } else if (days >= 11) {
        fine = days * 50
    }

    totalFine = totalFine + fine
}

if (delays.length > 3) {
    totalFine = totalFine + 200
}

console.log("Delayed books count is", delays.length)
console.log("Total fine is", totalFine)
