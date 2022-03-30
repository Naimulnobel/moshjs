

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
    if (number === NaN) {
        return 'Not a number'
    }
    return number
}
const output = fizzBuzz('a')
console.log(output)