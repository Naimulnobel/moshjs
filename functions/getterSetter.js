const person = {
  firstName: "nobel",
  lastName: "naimul",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const name = value.split(" ");
    this.firstName = name[0];
    this.lastName = name[1];
  },
};
person.fullName = "naimul nobel";
//getter
console.log(person.fullName);
