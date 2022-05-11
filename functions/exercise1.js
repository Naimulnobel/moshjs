function sum(...args) {
  return args.reduce((acc, curr) => acc + curr);
}
console.log(sum(1, 2, 3, 4));
function sum1(...args) {
  if (args.length === 1 && Array.isArray(args[0])) {
    args = [...args[0]];
    return args.reduce((acc, curr) => acc + curr);
  }
}
console.log(sum1([1, 2, 3, 4]));
