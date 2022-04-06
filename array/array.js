const numbers=[3,4]
// end of array
numbers.push(5,6,7)
//Beginning of array
numbers.unshift(1,2)
//middle of array
numbers.splice(2,0, 'a','b')
// console.log(numbers)
//findin index of array
// console.log(numbers.indexOf('a'))
//element in array
// console.log(numbers.includes(1))

const courses = [
    {id:1, name:'a'},
    {id:2, name:'b'},
]
const course = courses.find((course)=>{
    return course.name === 'a'
})
const course1 = courses.findIndex((course)=>{
    return course.name === 'a'
})
console.log(course)

//remove element from array
//end element in array
numbers.pop()
//beginning element in array
numbers.shift()
//remove element from array
numbers.splice(2,1)
//empty array
numbers.length=0
const first=[1,2,3]
const second=[4,5,6]
// const combined =first.concat(second)
const combined =[...first, ...second]
const slice =combined.slice(2,4)
console.log(slice)
const numberss = [1,2,3,4,5,6,7,8,9,10]
numberss.forEach((number,index)=>{
    console.log(index,number)
})
const joined=numberss.join(',')
console.log(joined)
const message = 'This is a message'
const parts = message.split(' ')
console.log(parts)
const combined1 = parts.join('-')
console.log(combined1)