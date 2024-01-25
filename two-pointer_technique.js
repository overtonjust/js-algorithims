var isPalindrome = function(s) {
    let regex = /[A-Za-z0-9]/g;
    let letters = s.match(regex); 
    for(let i in letters) {
        letters[i] = letters[i].toLowerCase()
    }
    

let potentialPalindrome = letters.join('');
let left = 0;
let right = potentialPalindrome.length -1;


    while(left < right) {
        if(potentialPalindrome[left] !== potentialPalindrome[right]) {
            return false;
        }
        else {
            left++;
            right--;
     }
    }
    return true;
};

// console.log(isPalindrome('0P'))

/** 
Problem 1 
Implement a function that checks if a given array of integers is sorted in non-decreasing order. Use the two pointers approach to solve this problem efficiently.
 * @param {number[]} nums
 * @returns {boolean}

*/
function isSorted(nums) {

let newArr = nums.map(num => num);
let sortedArr = nums.sort();

    for(const i in newArr) {
        if(newArr[i] !== sortedArr[i]) {
            return false;
        }
    }  

  return true;
}

function isSortedRefactored(arr) {

    for (let i = 0; i < arr.length; i++){
        if(arr[i+1] < arr[i]) {
            return false;
        }
    }
    return true;
}

// Example
// console.log(isSortedRefactored([1, 2, 3, 4, 5]));  // Should return true
// console.log(isSortedRefactored([5, 3, 7, 8, 10]));  // Should return false

/**  
Problem 2 
Given a sorted array of distinct integers and a target sum, find a pair of elements in the array that add up to the target sum. Implement the solution using the two pointers technique.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSumPair(nums, target) {

let left = 0;
let right = nums.length -1;

    while(nums[left] + nums[right] !== target) {
       if(nums[left] + nums[right] < target){
        left++;
       }
       else {
        right--;
       }

    }

    return [nums[left],nums[right]];
}

// Example
// console.log(twoSumPair([1, 2, 3, 4, 5], 9));  // Should return [4, 5]
// console.log(twoSumPair([-2, 0, 2, 5, 7], 5));  // Should return [0, 5]

/* 
Given an array of integers and a target sum, find all pairs of elements in the array that add up to the target sum. Return all pairs in an array.

examples: ([6,4,7,8,4,2,3,1,5,4,1,1,3,5], 13) => [5, 8]

*/


function findPairsWithSum(nums,target) {
    nums.sort();
    let allPairs = [];
    let left = 0;
    let right = nums.length -1;

    while(left < right) {
       const runningSum = nums[left] + nums[right];

       if(runningSum !== target) {
        if(runningSum < target) {
            left++
        }
        else {
            right--;
        }
       }   

       else {
        allPairs.push([nums[left],nums[right]])
        left++;
        right--;
       }
    }

    return allPairs;
}

// console.log(findPairsWithSum([6,4,7,8,4,2,3,1,5,4,1,1,3,5], 13))

/** 
Problem 3 
Given an array of integers, find all unique triplets that sum up to a target value. Ensure that the triplets are in non-decreasing order. Implement the solution using the two pointers approach.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[][]}
 */
function threeSum(nums, target) {
    // Implementation
    nums.sort((a,b) => a - b);
    let arrOfTriplets = [];

    for(let i = 0; i < nums.length - 2; i++) {
        // if (i > 0 && nums[i] === nums[i - 1]) continue;
            let left = i + 1;
            let right = nums.length - 1;
            const sumToCheck = nums[i] + nums[left] + nums[right];

        while(left < right) {
            if(sumToCheck === target) {
                arrOfTriplets.push([nums[i], nums[left], nums[right]]); 
                left++;
                right--;                   
            }
            else if(sumToCheck < target) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    return arrOfTriplets;
}

// Example
// console.log(threeSum([-1, 0, 1, 2, -1, -4], 0)); // Should return [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum([0, 0, 0], 0));  // Should return [[0, 0, 0]]


/**  
Problem 4 
Implement the "Container With Most Water" problem. Given an array representing the height of bars, find two bars that together with the x-axis forms a container that can hold the most water. Use the two pointers algorithm to optimize the solution.

Input: array = [1, 5, 4, 3]
Output: 6
Explanation : 
5 and 3 are distance 2 apart. 
So the size of the base = 2. 
Height of container = min(5, 3) = 3. 
So total area = 3 * 2 = 6

Input: array = [3, 1, 2, 4, 5]
Output: 12
Explanation : 
5 and 3 are distance 4 apart. 
So the size of the base = 4. 
Height of container = min(5, 3) = 3. 
So total area = 4 * 3 = 12

 * @param {number[]} height
 * @returns {number}
 */
function maxArea(height) {
    // Implementation
    let left = 0;
    let right = height.length -1;
    let biggestContainer = 0;

    while (left < right) {
        let size = right - left;
        let containerHeight = Math.min(height[left],height[right]);
        let areaCompare = size * containerHeight;

        biggestContainer = Math.max(biggestContainer,areaCompare);

        if(height[left] < height[right]) {
            left++;
        }

        else {
            right--;
        }

    }
    return biggestContainer;
}

// Example
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));  // Should return 49


/**  
Problem 5 
Given two sorted arrays, find the median element. The overall run time complexity should be O(log(min(m,n))), where m and n are the lengths of the two arrays. Utilize the two pointers algorithm and binary search to achieve this efficiency.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}c
 */

function findMedianSortedArrays(nums1, nums2) {
    // Implementation
}

// Example
console.log(findMedianSortedArrays([1, 3], [2]));  // Should return 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4]));  // Should return 2.5

// Iterative function to implement Binary Search
let iterativeFunction = function (arr, x) {
 
    let start = 0, end = arr.length - 1;
 
    // Iterate while start not meets end
    while (start <= end) {
 
        // Find the mid index
        let mid = Math.floor((start + end) / 2);
 
        // If element is present at 
        // mid, return True
        if (arr[mid] === x) return true;
 
        // Else look in left or 
        // right half accordingly
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }
 
    return false;
}
 
// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;
 
if (iterativeFunction(arr, x, 0, arr.length - 1)) {
    console.log("Element found!");
}
else {
    console.log("Element not found!");
}
 
x = 8;
 
if (iterativeFunction(arr, x, 0, arr.length - 1)) {
    console.log("Element found!");
}
else {
    console.log("Element not found!");
}