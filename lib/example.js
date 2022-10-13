// Javascript program to find subarray having
// maximum sum less than or equal to sum

// To find subarray with maximum sum
// less than or equal to sum
function findMaxSubarraySum(arr, n, sum) {
  // To store current sum and
  // max sum of subarrays
  let curr_sum = arr[0],
    max_sum = 0,
    start = 0;

  let temp = [curr_sum];
  let finalArr = [];

  // To find max_sum less than sum
  for (let i = 1; i < n; i++) {
    // Update max_sum if it becomes
    // greater than curr_sum
    if (curr_sum <= sum) {
      max_sum = Math.max(max_sum, curr_sum);
      if (max_sum === curr_sum) finalArr = [...temp];
    }
    // If curr_sum becomes greater than
    // sum subtract starting elements of array

    while (curr_sum + arr[i] > sum && start < i) {
      curr_sum -= arr[start];
      temp.shift();
      start++;
    }

    // Add elements to curr_sum
    curr_sum += arr[i];
    temp.push(arr[i]);
  }

  // Adding an extra check for last subarray
  if (curr_sum <= sum) {
    max_sum = Math.max(max_sum, curr_sum);
    if (max_sum === curr_sum) finalArr = [...temp];
  }

  return {
    weight: max_sum,
    subArr: finalArr,
  };
}

let arr = [50, 75, 110, 175, 155, 50, 50, 100];
let n = arr.length;
let sum = 200;
console.log(findMaxSubarraySum(arr, n, sum));
