let level = 10
let performanceScore = 60
let missionsCompleted = true

let coins = (level * 50) + (performanceScore * 10)

if (missionsCompleted === true) {
    coins = coins * 2
}

let rank = coins > 1000 ? "Elite" : "Regular"

console.log("Level is", level)
console.log("Performance score is", performanceScore)
console.log("Missions completed is", missionsCompleted)
console.log("Total coins earned are", coins)
console.log("Rank is", rank)
