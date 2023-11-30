function hasTargetSum(array, target) {
  // Write your algorithm here
  //console.log(array)
  //console.log(target)
  for (const num in array) {
    //console.log(array[num]);
    for (const num2 in array) {
      
      if (num !== num2) {
        //console.log(array[num]+array[num2]);
        if (array[num]+array[num2]==target) {
        return "true"
        break
        }
      }
      else {}
    }
  }
  return "false"
}

/* 
  Write the Big O time complexity of your function here
O(n^2)
  */

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
1. loop over array.
let array values be i=array[num] and j=array[num2].
for each element i add it to the element j by looping over the array once more.
index num must be different than index num2
2. if value of i+j equals target then break and return "true" otherwise
continue the loop.
3. if at the end of the iteration the condition isn't satisfied then return "false"
 */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
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
