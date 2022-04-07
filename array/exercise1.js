function arrayFromRange(min,max) {
    const array=[]
    for(let i=min; i<=max; i++) {
        array.push(i)
    }
    return array
}
const numbers=arrayFromRange(1,10)
console.log(numbers)
