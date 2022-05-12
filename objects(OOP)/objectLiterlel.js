const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw() {
    console.log("draw");
  },
};
circle.draw();
//factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}
//constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle1 = new Circle(1);
