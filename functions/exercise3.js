try {
  const numbers = [1, 2, 3, 4, 1];
  const count = countOccurrences(numbers, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }
  return array.reduce((accumulator, currentValue) => {
    return currentValue === searchElement ? accumulator + 1 : accumulator;
  }, 0);
}
