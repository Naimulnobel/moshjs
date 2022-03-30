

function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz'
    }
    if (number % 3 === 0) {
        return 'Fizz'
    }
    if (number % 5 === 0) {
        return 'Buzz'
    }
    if (typeof number !== 'number') {
        return NaN
    }
    return number
}
const output = fizzBuzz('a')
console.log(output)

checkSpeed(180)
function checkSpeed(speed) {
    const speedLimit = 70
    const kmPerPoint = 5
    if (speed < speedLimit + kmPerPoint) {
        console.log('ok')
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint)
        if (points >= 12) {
            console.log('License suspended')
        } else {
            console.log('Points', points)
        }
    }
}
showNumber(10)
function showNumber(number) {
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            console.log(i, 'even')
        }
        else {
            console.log(i, 'odd')
        }
    }
}