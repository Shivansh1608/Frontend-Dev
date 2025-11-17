let temperature = 37
let humidity = 75
let windSpeed = 20

if (temperature > 35 && humidity > 70) {
    console.log("Cancel Heat Alert")
} else if (temperature < 10 || windSpeed > 40) {
    console.log("Cancel Cold Windy Alert")
} else {
    console.log("Event Approved")
}

if (temperature < 20) {
    console.log("Wear Jacket")
} else if (temperature >= 20 && temperature <= 30) {
    console.log("Comfortable")
} else {
    console.log("Stay Hydrated")
}
