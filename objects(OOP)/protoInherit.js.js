function Circle (radius) {
    //Intace member
    this.radius = radius;
    this.move = function () {
        this.draw();
        console.log('move');
    }
}
// Prototype member
Circle.prototype.draw = function () {
    console.log('draw');
}
const circle = new Circle(10);
//intace member
consol.log(Object.keys(circle));
//prototype member
for(key in circle) console.log(key)
