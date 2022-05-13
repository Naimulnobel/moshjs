// two types of js
//reference type
//primitive type or value type
//primitive type: number, string, boolean, undefined, null, symbol
// reference type: object, array, function
let number =10
function showNumber(number) {
    return ++number

}
showNumber(number)
const obj={number:10}
function showNumber1(obj) {
    obj.number++
}
console.log(obj)
console.log(showNumber(number))