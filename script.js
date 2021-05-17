// // the time complxity of this algorithm will be  O(N) where N is the total number
// // Space Complexity the algorithm runs in constant space O(1)
// function pair_with_target_sum(arr, targetSum) {
//     let left = 0,
//       right = arr.length - 1;
//     while (left < right) {
//       const currentSum = arr[left] + arr[right];
//       if (currentSum === targetSum) {
//         return [left, right];
//       }
  
//       if (targetSum > currentSum) {
//         left += 1; // we need a pair with a bigger sum
//       } else {
//         right -= 1; // we need a pair with a smaller sum
//       }
//     }
//     return [-1, -1];
//   }
// // Remove duplicates
// function remove_duplicates(arr) {
//     // index of the next non-duplicate element 
//     let nextNonDuplicate =1;
//     let next = 1
//     while (next < arr.length) {
//         if (arr[nextNonDuplicate - 1] !== arr[next]) {
//             arr[nextNonDuplicate] = arr[next];
//             nextNonDuplicate += 1;

//         }
//         next += 1;
//     }
//     // return nextNonDuplicate
//     return arr.slice(0, nextNonDuplicate) // returns as a list of elements
// }

// console.log(remove_duplicates([2,3,3,3,6,9,9]));

// // removing elements that match a key
// function remove_element(arr,key) {
//   let nextElement = 0 // index of the next element which is not 'key'
//   for (let i = 0; 1 <arr.length; i++) {
//     if (arr[i] !== key) {
//       arr[nextElement] = arr[i]
//       nextElement += 1;
//     }
//   }
//   return nextElement;
// }

// console.log(` Array new length: ${remove_element([3,2,3,6,3,10,9,3]), 3}`);

// code above won't open the browser

function makes_square(arr) {
    const n = arr.length
    squares - Array(n).fill(0);
    let highestSquareIdx = n - 1
    let left = 0,
    rigtht = n -1;
    while (left <= right) {
        let leftSquare = arr[left] * arr[left]
            rightSquare = arr[right] * arr[right]
        if (leftSquare > rightSquare ) {
            squares[highestSquareIdx] = leftSquare;
            left += 1;
        } else {
            squares[highestSquareIdx] = rightSquare;
            right -= 1;
        }
        highestSquareIdx -= 1;
    }
    return squares;
}


class Node {
    constructor(value, next= null) {
        this.value = value;
        this.next = next;
    }
}

function has_cycle(head) {
    let slow = head,
    fast = head;
    while (fast !== null && fast.next !==null) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}


const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);


/// Find the cycle and tell how long it is 

class Node {
    constructor(value, next= null) {
        this.value = value;
        this.next = next;
    }
}

function find_cycle_length(head) {
    let slow = head;
     fast = head;

     while (fast == null && fast.next !== null) {
         fast = fast.next.next
         slow = slow.next;
         if (slow === fast) { // find the cycle
            return calculate_cycle_length(slow);

         }
     }
     return 0;

}



function calculate_cycle_length(slow) {
    let current= slow,
}

// find the middle node


class Node {
    constructor(value, next= null) {
        this.value = value;
        this.next = next;
    }
}

function  find_middle_of_linked_list(head) {
    let slow = head,
    fast = head;
    while ((fast !== null && fast.next !== null)) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Merging intervals get a hold of yourself  


// finding missing numbers and finding single numbers

function find_missing_number(arr) {
    const n = arr.length + 1;
    // x1 represents XOR of all values from 1 to n
    // find sum of all numbers from 1 to n
    let x1 = 1;
    for (let i = 2; i <= n; i++)
        x1 = x1 ^ i;      // ^ is XOR'ing ?? what does that mean?

    // X2 represents XXOR of all values in arr
    let x2 = arr[0];
    for (let i = 1; i < n-1; i++)
    x2 = x2 ^ arr[i];

    // missing number is the xor of x1 and x2
    return x1 ^ x2;
}

function find_single_number(arr) {
    let num = 0;
    for (i = 0; i < arr.length; i++) {
        num ^= arr[i];
    }
    return num;
}

console.log(find_single_number([1,4,2,1,3,2,3]))

// Find top numbers 

const Heap = require('./collections/heap'); //http://www.collectionjs.com


function find_k_largest_numbers(nums, k) {
    const minHeap = new Heap([], null, ((a,b) => b - a));
    // put first 'K' numbers in the min heap
    for (let i = 0; i < k; i++) {
        minHeap.push(nums[i]);
    }

    // go through the remaining numbers of the array, if the number from the array is bigger than the top(i.e., smallest) number of the min-heap, remove the top number from heap and add the number from array
    for (let i = k; i < nums.length; i++) {
        if (nums[i] > minHeap.peek()) {
            minHeap.pop();
            minHeap.push(nums[i]);
        }
    }

    // the heap has the top 'K' numbers, return them in a list
    return minHeap.toArray();
}

// find smallest numbers
// Time complexity = O(K * logK + (N - K) * logK) which is asymptotically equal to O(N * logK)
const Heap = require('./collections/heap'); //http://www.collectionjs.com

function find_Kth_smallest_number(nums, k) {
    maxHeap = new Heap();
    // put first k numbers in the max heap
    for (let i = 0; i < k; i++) {
        maxHeap.push(nums[i]);
    }

    // go through the remaining numbers of the array
    for (let i = k; i < nums.length; i++) {
        if (nums[i] < maxHeap.peek()) {
            maxHeap.pop();
            maxHeap.push(nums[i]);
        }
    }

    return maxHeap.peek();
}
//  "K" Closest Point to the Origin 
const Heap = require('./collections/heap'); //http://www.collectionjs.com

class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    // use for max-heap
    compare(other) {
        return this.distance_from_origion() - other.distance_from_origion();
    }
    distance_from_origion() {
        // ignoring sqrt to calculate the distance
        return (this.x * this.x) + (this.y * this.y);
    }
    print_point() {
        process.stdout.write(`[${this.x}, ${this.y}]`);
    }
}

function find_closest_points (points, k) {
    const maxHeap = new Heap([], null, ((a,b,) => a.compare(b)));
    // put first 'k' points in the max heap
    for (i = 0; i < k; i++) {
        maxHeap.push(points[i]);
    }

    // go through the remaining points of the input array, if a point is close3r to the origin than the top point 
    // of the max-heap, remove the top point from heap and add the point from the input array

for (i = k; i < points.length; i++) {
    if (points[i].distance_from_origion < maxHeap.peek().distance_from_origion()) {
        maxHeap.pop();
        maxHeap.push(points[i])
    }
}
    // the heap has 'k' points closest to the origin, return them in a list
    return maxHeap.toArray();
}
// Space complexity O(N) Time complexity O(N * logN)
const Heap = require('./collections/heap')

function minimum_cost_to_connect_ropes(ropeLengths) {
    const minHeap = new Heap(ropeLengths, null, ((a,b) => b -a))

    let result = 0;
    while (minHeap.length > 1) {
        const tempCost = minHeap.pop() + minHeap.pop()
        result += tempCost;
        minHeap.push(tempCost)
    }
    return result;
}

// Merge K sort list
// Given an array of 'K' sorted linkedlists, merge them into one sorted list.
//  Time complexity O(N * logK) Space complexity
 class ListNode {
     constructor(value, next = null) {
         this.value = value;
         this.next = next;
     }
 }

 function merge_list(lists) {
     const minHeap = new Heap([], null, ((a,b) => b.value - a.value));

     lists.forEach((a) => {
         if (a !== null ) {
             minHeap.push(a);
         }
     }); 
    let resultHead = null,
    resultTail = null;
    while (minHeap.length > 0) {
        const node = minHeap.pop
        if (resultHead === null) {
            resultHead = resultTail = node;
        } else {
            resultTail.next = node;
            resultTail = resultTail.next;
        }
        if (node.next !== null) {
            minHeap.push(node.next);
        }
    }

    return resultHead;
 }

 // Given an array, find the average of all contiguous subarrays of size "K" in it
 // Contiguous = sharing a common border
 function find_averages_of_subarrays(K, arr) {
    const result = [];
    let windowSum = 0.0,
      windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd]; // add the next element
      // slide the window, we don't need to slide if we've not hit the required window size of 'k'
      if (windowEnd >= K - 1) {
        result.push(windowSum / K); // calculate the average
        windowSum -= arr[windowStart]; // subtract the element going out
        windowStart += 1; // slide the window ahead
      }
    }
  
    return result;
  }
  
  
  const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
  console.log(`Averages of subarrays of size K: ${result}`);

  