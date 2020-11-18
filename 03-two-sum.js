function badTwoSum(arr, targetSum) {
  for(let i =0 ; i < arr.length -1 ; i++)
  {
    for(let j = i + 1; j < arr.length; j++)
    {
      if(arr[i] + arr[j] === targetSum)
      {
        return true
      }
    }
  }
  return false
}
// const arr = [0, 1, 5, 7];
// console.log(badTwoSum(arr, 6)); // => should be true
// console.log(badTwoSum(arr, 10)); // => should be false

const binarySearch = (nums, targetNum) => {
  // if nums has no length, return false because we've run out of items to
  // search and haven't found targetNum
  if(nums.length === 0)
  {
    return false
  }

  // determine the slice point

  let middle = Math.floor(nums.length / 2)

  // create "left half" and "right half" arrays
  let left = nums.slice(0, middle)
  let right = nums.slice(middle + 1)

  // if targetNum is less than the slice point, return this search on the left
  // half
  if(targetNum < nums[middle])
  {
    return binarySearch(left, targetNum)
  }

  // if targetNum is greater than the slice point, return this search on the
  // right half
  if(targetNum > nums[middle])
  {
    return binarySearch(right, targetNum)
  }

  // if it's not greater than or less than, we know it's equal so return true
  return true
}


function okayTwoSum1(arr, targetSum) {
  // Code goes here ...
  arr.sort()
 
  
  for(let i = 0; i < arr.length; i++){
  
    let newTarget = targetSum - arr[i]
    let truth = binarySearch(arr.slice(0, i).concat(arr.slice(i+1)), newTarget)
    if(truth)
    {
      return true
    }
  }
  return false
}

// const arr = [0, 1, 5, 7];
// console.log(okayTwoSum1(arr, 6)); // => should be true
// console.log(okayTwoSum1(arr, 10)); // => should be false


function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  let obj = {}
  for(let key of arr)
  {
    let value = targetSum - key
    if(obj[value])
    {
      return true
    }
    
    obj[key] = true
  }
  return false
}


const arr = [0, 1, 5, 7];
console.log(twoSum(arr, 6)); // => should be true
console.log(twoSum(arr, 10)); // => should be false

function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}
