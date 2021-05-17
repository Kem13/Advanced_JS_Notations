// Two pointer

// Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array. 

function ductch_flag_sort(arr) {
    //all elements < low are 0, and all elements > high are 2
    // all elements from >= low < i are 1
    let low = 0,
     high = arr.length - 1
     i = 0;
     while (i <= high) {
         if (arr[i] === 0) {
             [arr[i], arr[low]] = [arr[low], arr[i]]; // swap incriments 'i' and 'low'
             i += 1;
             low += 1;
         } else if (arr[i] === 1) {
             i += 1;
         } else {
             [arr[i], arr[high]] = [arr[high], arr[i]]; 
             high -=1;
         }
     }
}

// given an array, find the length of the smallest subarray in which when sorted will sort the whole array 

function shorteset_window_sort(arr) {
    let low = 0,
     high = arr.length - 1;
     // find the first number out of sorting order from the beginning
     while ((low < arr.length - 1 && arr[low] <= arr[low + 1])) {
         low += 1;
     }

     if (low === arr.length - 1) { // if the array is sorted
         return 0;
     }
     // find the first number out of sorting order from the end 
     while (high > 0 && arr[high] >= arr[high - 1]) {
         high -= 1;
     }

     // find the maximum and minimum of the subarray
     let subarrayMax = -Infinity,
     subarrayMin = Infinity;
     for (k = low; k < high + 1; k++) {
         subarrayMax = Math.max(subarrayMax, arr[k]);
         subarrayMin = Math.min(subarrayMin, arr[k]);
     }

     // extend the subarray to include any number which is bigger than the minimum of the subarray
  while (low > 0 && arr[low - 1] > subarrayMin) {
    low -= 1;
  }
  // extend the subarray to include any number which is smaller than the maximum of the subarray
  while (high < arr.length - 1 && arr[high + 1] < subarrayMax) {
    high += 1;
  }

  return high - low + 1;
}

