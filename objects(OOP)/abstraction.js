function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 };
    let computOptimumLocation = function () {
        // ...
    }
    this.draw = function () {
        computOptimumLocation();
        console.log("draw");
    }
}
const circle1 = new Circle(1);
circle1.draw();