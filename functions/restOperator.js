function sum(...args) {
  return args.reduce((total, value) => total + value);
}
console.log(sum(1, 2, 23));

function shopping(discount, ...price) {
  const total = price.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(shopping(0.1, 20, 30));
