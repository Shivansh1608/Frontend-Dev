let marks = [85, 92, 74, 58, 33]

let sum = 0
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i]
}

let average = sum / marks.length
let percentage = average

let fails = 0
for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 40) {
        fails = fails + 1
    }
}

let grade = ""
if (percentage >= 90) {
    grade = "A+"
} else if (percentage >= 75) {
    grade = "A"
} else if (percentage >= 60) {
    grade = "B"
} else if (percentage >= 40) {
    grade = "C"
} else {
    grade = "Fail"
}

if (fails >= 2) {
    console.log("Repeat Year")
} else {
    console.log("Average is", average)
    console.log("Percentage is", percentage)
    console.log("Grade is", grade)
}
