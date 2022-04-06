
// circle.draw();//method
// Factory Function
function createCircle(radius){
    return {
        radius:radius,
        draw(){
            console.log('draw')
        }
    }
}

// Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}
// const circle= new Circle(1)
// console.log(circle)


const circle={
    radius:1,   
    draw(){
        console.log('draw')
    }
}
// for(let key of Object.keys(circle)){
//     console.log(key,circle[key])
// }
// for(let entry of Object.entries(circle)){
//     console.log(entry)
// }

//colning an odject
// const another ={}
// for(let key in circle){
//     another[key]=circle[key]
// }
const another={...circle}||Object.assign({},circle)
console.log(another)

//MATH OBJECT
//string
const message = 'hello'
const anotherMessage=new String('hi')
console.log(typeof message)
console.log(typeof anotherMessage)
