


function climb(totalSteps) {
  if (totalSteps <= 3) {
      return totalSteps;
  }
  
  let first = 1;
  let second = 2;
  
  for (let i = 3; i <= totalSteps; i++) {
      const ways = first + second ;
      first = second;
      second = ways;
  }
  
  return second;
}


  const n = 2; // Number of steps
  const ways = climb(n);
  console.log(`Number of ways to climb ${n} steps: ${ways}`);
  