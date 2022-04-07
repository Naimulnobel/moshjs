const numbers=[1,-1,2,3]
const filtered =numbers.filter((number)=>{
    return number>=0
})
console.log(filtered)
const items = filtered.map((number)=>{
    return {value:number}
})
console.log(items)