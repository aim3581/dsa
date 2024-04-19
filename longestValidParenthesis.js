/**
 * @param {string} s
 * @return {number}
 */
// Function to find the length of the longest valid parentheses substring
var longestValidParentheses = function(s) {
    // Initialize a stack with -1 to handle edge cases
    let stack = [-1];

    // Variable to keep track of the maximum length of valid parentheses substring
    let count = 0;

    // Iterate over the string
    for(let i=0; i < s.length; i++){
        const char = s[i];

        // If the character is not a parenthesis, skip it
        if(!["(",")"].includes(char) ) continue;

        // If the character is an opening parenthesis, push its index to the stack
        if( char === "(" ){
            stack.push(i);
        } else {
            // If the character is a closing parenthesis, pop an element from the stack
            if(stack.length !==0 ){
                stack.pop();
            }

            // If the stack is not empty, calculate the length of the current valid substring by subtracting the top element of the stack from the current index
            if(stack.length!==0)  {
                count = Math.max(count, i - stack[stack.length - 1]);
            } else {
                // If the stack is empty, push the current index to the stack to serve as the new base for the next valid substring
                stack.push(i)
            }
        }
    }

    // Return the length of the longest valid parentheses substring
    return count;
};

// Test the function
console.log(longestValidParentheses(")()()()()))((()()()))))"))