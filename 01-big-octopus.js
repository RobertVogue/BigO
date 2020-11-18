const fishies = ['fish', 'fiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];

function quadraticBiggestFish(fishes) {
  let n = fishes.length
  for(let i = 0; i < n; i++)
  {
    let firstFish = fishes[i]
    let max = true
    for(let j = i + 1; j < n; j++)
    {
      let secondFish = fishes[j]
      if(secondFish.length > firstFish.length)
      {
        max = false;
      }
    }
    if(max === true)
    {
      return firstFish
    }
  }
}

// console.log(quadraticBiggestFish(fishies))


function nlognBiggestFish(fishes) {
  // Code goes here ...
  fishes.sort((fish1, fish2) =>{
    return fish1.length - fish2.length
  } )
  return fishes[fishes.length -1]

}
// console.log(nlognBiggestFish(fishies))


function linearBiggestFish(fishes) {
  // Code goes here ...
  let max = fishes[0]
  for(let a of fishes)
  {
    if(a.length > max.length)
    {
      max = a
    }
  }
  return max
}

// console.log(linearBiggestFish(fishies))

tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  // Code goes here ...
}


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  // Code goes here ...
}
