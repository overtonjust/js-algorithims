const numArr = [1,4,3,5,6,2,3,8,9,5,6,1]

// function maxSubArraySum(nums, size) {
//     if (size < 0 || size > nums.length) return null;

//     let currSum = 0;
//     let maxSum = -Infinity;

//     for (let i = 0; i < nums.length; i++) {
//         // Update currSum with the next num element
//         currSum += nums[i];
//         // Once i is equal to the size begin updating the maxSum and currSum values
//         if (i >= size - 1) {
//             // Update maxSum to be the value of whichever is greater between maxSum and currSum
//             maxSum = Math.max(currSum, maxSum);
//             // if (currSum > maxSum) {
//             //     maxSum = currSum;
//             // }
//             // Update currSum by subtracting the first element in the sliding window
//             currSum -= nums[i - (size - 1)]
//         }
//     }

//     return maxSum;
// }


function maxSubArraySum(nums, subArrLength) {

    let maxSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        
        let currentSum = 0;
        let tempArr = nums.slice(i, subArrLength + i)
        for (let j = 0; j < tempArr.length; j++) {
            currentSum += tempArr[j];
        }
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
}

// console.log(maxSubArraySum(numArr,3))


// function maxSubArraySum(nums, size) {
//     if (nums.subArrLength < size) return null;
//     let maxSum = 0;
//     // Sum the first n elements to establish the initial sum
//     for (let i = 0; i < size; i++) {
//         maxSum += nums[i];
//     }

//     let pointer1 = 0;
//     let pointer2 = size;
//     let tempSum = maxSum;

// // Continue until pointer 2 reaches the end of the nums array
//     while (pointer2 < nums.length) {
//         // Update tempSum by subtracting the first element and adding the new element to the right 
//         tempSum = tempSum - nums[pointer1] + nums[pointer2]
//         // Update the maxSum if tempSum is greater than maxSum
//         if (tempSum > maxSum) {
//             maxSum = tempSum;
//         }
//         // Slide window along the array by updating the pointers by 1
//         pointer1++;
//         pointer2++
//     }

//     return maxSum
// }

// console.log(maxSubArraySum(numArr, 3))

/*
 Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
*/
function minSubArrayLen(target, nums) {
    let prevTotal = 0;
    let lowestCount = 0;

    for (let i = 0; i < nums.length; i++) {
        prevTotal += nums[i];
        lowestCount++;

        if (prevTotal >= target) {
            break;
        }
    }
   
    if (prevTotal < target) {
        return 0;
    }    

    for (let j = 1; j < nums.length; j++) {
        const currentTotal = prevTotal - nums[j - 1];
        if (currentTotal >= target) {
            lowestCount--;
            prevTotal = currentTotal;
        } else {
            prevTotal = currentTotal + nums[j + lowestCount - 1]
        }
    }

    return lowestCount;
}

// console.log(minSubArrayLen(7, numArr))

/* 

Practice:

Input: nums = [1,5,4,2,9,9,9], k = 3
Output: 15
Explanation: The subarrays of nums with length 3 are:
- [1,5,4] which meets the requirements and has a sum of 10.
- [5,4,2] which meets the requirements and has a sum of 11.
- [4,2,9] which meets the requirements and has a sum of 15.
- [2,9,9] which does not meet the requirements because the element 9 is repeated.
- [9,9,9] which does not meet the requirements because the element 9 is repeated.
We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions


 */

// function maxSubArraySum(nums, size) {
//     if (size < 0 || size > nums.length) return null;

//     let currSum = 0;
//     let maxSum = -Infinity;

//     for (let i = 0; i < nums.length; i++) {
//         // Update currSum with the next num element
//         currSum += nums[i];
//         // Once i is equal to the size begin updating the maxSum and currSum values
//         if (i >= size - 1) {
//             // Update maxSum to be the value of whichever is greater between maxSum and currSum
//             maxSum = Math.max(currSum, maxSum);
//             // if (currSum > maxSum) {
//             //     maxSum = currSum;
//             // }
//             // Update currSum by subtracting the first element in the sliding window
//             currSum -= nums[i - (size - 1)]
//         }
//     }

//     return maxSum;
// }


const nums = [9,9,9,1,2,3]; // 12

 function maxSlidingWindow(arr,size) {
    if (size < 0 || size > arr.length) return null;

    let maxSum = 0;
    let slidingSum = 0;
    let numSet = new Set();
   
    for(let i = 0; i < size; i++ ) {
       if(!numSet.has(arr[i])) {
            numSet.add(arr[i]);
            slidingSum += arr[i]
        }
    }

        let pointer1 = 0;
        let pointer2 = size;

        while(pointer2 < arr.length) {
            if(!numSet.has(arr[pointer2])) {
                numSet.add(arr[pointer2]);
                slidingSum = slidingSum - arr[pointer1] + arr[pointer2];
            }

            numSet.delete(arr[pointer1])
            maxSum = Math.max(maxSum,slidingSum);
            
            pointer1++;
            pointer2++;
        }
    
    return maxSum;
}


function maxSlideWindow(arr,size) {
    if(size > arr.length) return null;

    let maxSum = 0;
    let slidingSum = 0;
    let numSet = new Set();
    let dupes = 0;

    for(let i = 0; i < arr.length; i++) {
        if(!numSet.has(arr[i])) {
            numSet.add(arr[i])
            slidingSum += arr[i];
        }
        
        else if(numSet.has(arr[i])) {
            dupes++;
        }
      

        if(numSet.size >= size) {
            maxSum = Math.max(maxSum,slidingSum);
            slidingSum -= arr[i - (size - 1)];
            numSet.delete(arr[i - (size - 1)])
        }
    }
    return maxSum;
}
//[5,3,3,1,1]; // 0
console.log(maxSlideWindow(nums,3));


function maximumSubarraySum(nums, k) {
    if (nums.length < k) return 0;
    let maxSum = 0;
    let tempSum = 0;
    let duplicates = 0;
    let numFrequency = {};
    
    // Create the subArr and check for duplicates
    for (let i = 0; i< k; i++) {
        // store values of your subArray in an object to start while counting how many duplicates you've found
        if (numFrequency[nums[i]]) {
            duplicates++;
            numFrequency[nums[i]]++;
        } else {
            numFrequency[nums[i]] = 1;
        }
        tempSum += nums[i]
        
    }

    // if duplicates === 0 you don't have any duplicates yet
    if (duplicates === 0) {
        maxSum = tempSum;
    }


    let pointer1 = 0;
    let pointer2 = k;


    while (pointer2 < nums.length) {
        // need logic again to check for duplicates as you slide your window checking the new subArray each time
        if (numFrequency[nums[pointer2]]) {
            duplicates++
            numFrequency[nums[pointer2]]++
        } else {
            numFrequency[nums[pointer2]] = 1;
        }

        tempSum = tempSum - nums[pointer1] + nums[pointer2];
        numFrequency[nums[pointer1]]--;

        //removing the count from your object and removing the duplicate count if it was above 0
        if (numFrequency[nums[pointer1]] > 0) {
            duplicates--;
        }

        if (duplicates === 0) {
            maxSum = Math.max(tempSum, maxSum); 
        }

        pointer1++;
        pointer2++
    }

    return maxSum;
};


