const person = {
  firstName: "nobel",
  lastName: "naimul",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") {
      throw new Error("Value must be a string");
    }
    const name = value.split(" ");
    if (name.length !== 2) {
      throw new Error("enter the first and last name");
    }
    this.firstName = name[0];
    this.lastName = name[1];
  },
};
try {
  person.fullName = "naimul nobel";
} catch (e) {
  alert(e.message);
}
//getter
console.log(person.fullName);
