// Write a function removeFalsyValues(arr) that takes an array and returns a new array with all falsy values removed. Falsy values include 0, empty string, false, null, and undefined.
function removeFalsyValues(arr) {
  return arr.filter((item) => Boolean(item))
}

console.log(removeFalsyValues([0, 1, false, 2, '', 3])) // [1, 2, 3]
console.log(removeFalsyValues(['a', '', 'b', null, 'c'])) // ['a', 'b', 'c']
console.log(removeFalsyValues([null, undefined, 'A'])) // ['A']
