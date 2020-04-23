function largestOfFour(arr){
  return arr.map(Function.apply.bind(Math.max, null));
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));