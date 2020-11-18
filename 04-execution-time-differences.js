function myMin1a(list) {
  for (let i = 0; i < list.length - 1; i++) {
    let min = true
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[i]) min = false;

    }
    if (min) return list[i]
  }
  return list[list.length - 1]
}
// const list = [ 0, 3, 5, 4, -5, 10, 1, 90, -8 ]
// console.log(myMin1a(list))  // =>  -5

function myMin1b(list) {
  // Skip
}


function myMin2(list) {
  // Skip
}


function largestContiguousSubsum1(array) {
  let sub = new Array();
  for (let i = 0; i < array.length; i++) {
    sub.push(array[i])
    for (let j = i + 1; j < array.length; j++) {
      let newEl = array.slice(i, j + 1)
      sub.push(newEl)
    }
  }
  let sub2 = [];
  for (let key of sub) {
    sub2.push(key.reduce((a, b) => a + b))
  }
  return Math.max(...sub2)
}
// const array = [2, 3, -6, 7, -6, 7]
// console.log(largestContiguousSubsum1(array)) // => 8 (from [7, -6, 7])

function largestContiguousSubsum2(array) {
  let ma = array[0]
  let current = array[0]
  for (let i = 1; i < array.length; i++){
    if (current < 0) current = 0;
    current += array[i];
    if (current > max) max = current;


  } return max;
}
const array = [2, 3, -6, 7, -6, 7]
console.log(largestContiguousSubsum2(array)) // => 8 (from [7, -6, 7])
