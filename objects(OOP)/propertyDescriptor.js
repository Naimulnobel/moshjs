let person ={name:"jhon"}
Object.defineProperty(person, 'name', {
    writable: false,
    configurable: false,
    enumerable: true,

})
console.log(Object.keys(person))    