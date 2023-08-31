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

  function climb(totalSteps,stepNum,count){

    if(stepNum===totalSteps){
      return count +1;
    }

    if(totalSteps-stepNum >=1){
      count= climb(totalSteps,stepNum+1,count);
    }

    if(totalSteps-stepNum >=2){
      count= climb(totalSteps,stepNum+2,count);
    }
    if(totalSteps-stepNum >=3){
      count= climb(totalSteps,stepNum+3,count);
    }
return count
  }

  function countWaysRecursivly(n){
    let count =0;

    count =climb(n,0,count);
    return count;
  }
  
  const n = 4; // Number of steps
  const ways = countWaysToClimbStairs(n);
  console.log(`Number of ways to climb ${n} steps: ${ways}`);
  