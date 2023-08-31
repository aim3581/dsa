

/*
Alice: “Let’s just use a very simple code: We’ll assign ‘A’ the code word 1, ‘B’ will be 2, and so on down to ‘Z’ being assigned 26.”

Bob: “That’s a stupid code, Alice. Suppose I send you the word ‘BEAN’ encoded as 25114. You could decode that in many different ways!”

Alice: “Sure you could, but what words would you get? Other than ‘BEAN’, you’d get ‘BEAAD’, ‘YAAD’, ‘YAN’, ‘YKD’ and ‘BEKD’. I think you would be able to figure out the correct decoding. And why would you send me the word ‘BEAN’ anyway?”

Bob: “OK, maybe that’s a bad example, but I bet you that if you got a string of length 5000 there would be tons of different decodings and with that many you would find at least two different ones that would make sense.”

Alice: “How many different decodings?” Bob: “Jillions!”
program that will determine how many decodings there can be for a given string using her code
Input

Input will consist of multiple input sets. Each set will consist of a single line of at most 5000 digits representing a valid encryption (for example, no line will begin with a 0). There will be no spaces between the digits. An input line of ‘0’ will terminate the input and should not be processed.
For each input set, output the number of possible decodings for the input string. All answers will be within the range of a 64 bit signed integer.
*/

function numDecodings(s) {
    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[n] = 1; // Base case: empty string has 1 way to decode
    
    for (let i = n - 1; i >= 0; i--) {
      if (s[i] !== '0') {
        dp[i] = dp[i + 1]; // Take one digit as a character
      }
      
      if (i < n - 1 && (s[i] === '1' || (s[i] === '2' && s[i + 1] <= '6'))) {
        dp[i] += dp[i + 2]; // Take two digits as a character
      }
    }
    
    return dp[0];
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const inputs = [];
  
  rl.on('line', line => {
    if (line === '0') {
      rl.close();
    } else {
      inputs.push(line);
    }
  });
  
  rl.on('close', () => {
    for (const input of inputs) {
      const result = numDecodings(input);
      console.log(result);
    }
  });
  