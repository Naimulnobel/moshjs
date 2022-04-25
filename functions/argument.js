function sum(a, b) {
  let total = 0;
  for (let value of arguments) total += value;
  console.log(arguments);
  return total;
}
console.log(sum(1, 2, 23));
