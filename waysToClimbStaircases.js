function countWaysToClimbStairs(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // Base case
  
    for (let i = 1; i <= n; i++) {
      // Add the ways from taking 1, 2, and 3 steps
      dp[i] += dp[i - 1];
      if (i >= 2) {
        dp[i] += dp[i - 2];
      }
      if (i >= 3) {
        dp[i] += dp[i - 3];
      }
    }
  
    return dp[n];
  }
  
  const n = 4; // Number of steps
  const ways = countWaysToClimbStairs(n);
  console.log(`Number of ways to climb ${n} steps: ${ways}`);
  