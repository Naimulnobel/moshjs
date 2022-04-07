function include(array, searchElement) {
for (let element of array) {
    if (element === searchElement) {
        return true
    }
}
return false
}
console.log(include([1, 2, 3], 0))