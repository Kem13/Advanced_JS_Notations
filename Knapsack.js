// Given two integer arrays to represent weights and profits of ‘N’ items, we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number ‘C.’ Each item can only be selected once, which means either we put an item in the knapsack or we skip it
// time coplxity O(2^n)
// Memoization is when we store the results of all the previously solved sub-problems and return the results from memory if we encounter a problem that has already been solved.

let solveKnapsack = function(profits, weights, capacity) {
    const dp = [];
    function knapsackRecursive(profits,weights, capacity, currentIndex) {
    // base checks
    if (capacity <= 0 || currentIndex >= profits.length) return 0;

    dp[currentIndex] = dp[currentIndex] || [];
    if (typeof dp[currentIndex][capacity] !== 'undefined') {
        return dp[currentIndex][capacity];
    }

    let profit1 = 0;
    if (weights[currentIndex] <= capacity) {
        profit1 = profits[currentIndex] + knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex + 1)
    }


    const profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);

    dp[currentIndex][capacity] = Math.max(profit1,profit2);
    return dp[currentIndex][capacity];

}
return knapsackRecursive(profits, weights, capacity, 0);
};