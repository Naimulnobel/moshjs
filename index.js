

// function fizzBuzz(number) {
//     if (number % 3 === 0 && number % 5 === 0) {
//         return 'FizzBuzz'
//     }
//     if (number % 3 === 0) {
//         return 'Fizz'
//     }
//     if (number % 5 === 0) {
//         return 'Buzz'
//     }
//     if (typeof number !== 'number') {
//         return NaN
//     }
//     return number
// }
// const output = fizzBuzz('a')
// console.log(output)

// checkSpeed(180)
// function checkSpeed(speed) {
//     const speedLimit = 70
//     const kmPerPoint = 5
//     if (speed < speedLimit + kmPerPoint) {
//         console.log('ok')
//     } else {
//         const points = Math.floor((speed - speedLimit) / kmPerPoint)
//         if (points >= 12) {
//             console.log('License suspended')
//         } else {
//             console.log('Points', points)
//         }
//     }
// }
// showNumber(10)
// function showNumber(number) {
//     for (let i = 0; i <= number; i++) {
//         if (i % 2 === 0) {
//             console.log(i, 'even')
//         }
//         else {
//             console.log(i, 'odd')
//         }
//     }
// }
// function countTruthy(array) {
//     let count = 0
//     for (let i of array) {
//         if (i) {
//             count++
//         }
//     }
//     return count
// }
// console.log(countTruthy([1, 2, 3, 0, NaN, undefined, '', null]))
// function showProperties(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'string') {
//             console.log(key, obj[key])
//         }
//     }
// }
// movies = {
//     title: 'a',
//     year: 'b',
// }
// showProperties(movies)
// function sum(limit) {
//     let sum = 0
//     for (let i = 0; i <= limit; i++) {
//         if (i % 3 == 0 || i % 5 == 0) {
//             sum += i
//         }
//     }
//     return sum
// }
// console.log(sum(10))
// const marks = [80, 80, 50]
// function calculateGrade(marks) {
//     let total = 0
//     for (let mark of marks) {
//         total += mark
//     }
//     const average = total / marks.length
//     if (average >= 90) {
//         return 'A'
//     }
//     if (average >= 80) {
//         return 'B'
//     }
//     if (average >= 70) {
//         return 'C'
//     }
//     if (average >= 60) {
//         return 'D'
//     }
//     return 'F'
// }
// console.log(calculateGrade(marks))
// showStar(5)
// function showStar(numbers) {
//     // number is the number of stars
//     for (let number = 1; number <= numbers; number++) {
//         let stars = ''
//         for (let i = 0; i < number; i++) {
//             stars += '*'
//         }
//         console.log(stars)
//     }
// }
function primeNumber(limit) {
    for (let number = 2; number <= limit; number++) {
        let isPrime = true
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            console.log(number)
        }
    }
}
primeNumber(11)