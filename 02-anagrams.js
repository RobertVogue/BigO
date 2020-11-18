function firstAnagram(str1, str2) {
  let splitString2 = str2.split('');
  let splitString1 = str1.split('');

  for(let char of splitString1){
    let splitIdx = splitString2.indexOf(char);
    if (splitIdx === -1) return false;
    else {
      splitString2.splice(splitIdx, 1)
    }
  }
  return (splitString2.length === 0)
}

console.log(firstAnagram("gizmo", "sally"));    // => false
console.log(firstAnagram("elvis", "lives"));    // => true

function secondAnagram(str1, str2) {
  // Code goes here ....
}


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
