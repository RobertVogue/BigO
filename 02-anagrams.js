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

// console.log(firstAnagram("gizmo", "sally"));    // => false
// console.log(firstAnagram("elvis", "lives"));    // => true

function secondAnagram(str1, str2) {
  let sorted1 = str1.split('').sort().join('')
  let sorted2 = str2.split('').sort().join('')
  return (sorted1 === sorted2)
}

// console.log(secondAnagram("gizmo", "sally"));    // => false
// console.log(secondAnagram("elvis", "lives"));    // => true


function thirdAnagram(str1, str2) {
  let count1 = {}
  let count2 = {}
  str1.split('').forEach((char) => {
    if(count1[char] === undefined)
    {
      count1[char] = 1
    }
    else{
      count1[char] = count1[char] + 1
    }
  })
  str2.split('').forEach((char) => {
    if(count2[char] === undefined)
    {
      count2[char] = 1
    }
    else{
      count2[char] = count2[char] + 1
    }
  })
  // console.log(JSON.stringify(count1))
  // console.log(JSON.stringify(count2))

  //check that count1 and count2 have same number keys
  //if not, return false
  //loop over all keys in count1
  //for each key, check if count2[key] === value in count1
  //if not, return false
  //if it finishes loop return true
  let keys1 = Object.keys(count1).sort()
  let keys2 = Object.keys(count2).sort()
  
 
  
  if( JSON.stringify(keys1) !== JSON.stringify(keys2))
  {
    
      return false
  }
  else{
    for(key in count1)
    {
      if(count1[key] !== count2[key])
      {
        
        return false
      }
    }
  }
  return true


}

// console.log(thirdAnagram("gizmo", "sally"));    // => false
// console.log(thirdAnagram("elvis", "lives"));    // => true


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
