function hasTargetSum(array, target) {
  for (let i = 0; i < array.length-1; i++) {
    if (array.includes(target - array[i], i+1)) {
      return true;
    }
  }
  return false;
}

/* 
  O(n log n)
*/

/* 
  Subtract every element from target expect for the last one.
  Check the rest of the elements to the right if they match this difference.
  If it does, return true.
  If whole iteration finihes with no matches, return false.
*/

/*
  Create for loop that iterates every element except the last one
  For each iteration, use .includes to see if difference of target and current element match any of the following elements.
  If any match is found, return true.
  If all iterations are complete and no iterations are found, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
 console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([11, 8, 12, 4, 3, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 8, 12, -2, 11, 7], 10));

  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
