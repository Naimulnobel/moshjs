const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },

  set area(value) {
    if (typeof value !== "number") {
      throw new Error("radius must be a number");
    }
    this.radius = value;
  },
};
try {
  circle.radius = 2;
  console.log(circle.area);
} catch (e) {
  alert(e.message);
}
