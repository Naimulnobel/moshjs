const numbers=[1,2,3]
const allPositive=numbers.every((number)=>{
    return number>=0
})
const atLeastOnePositive=numbers.some((number)=>{
    return number>=0
})