/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let stack = [-1];
    let count = 0;
    for(let i=0; i < s.length; i++){
        const char = s[i];
        if(!["(",")"].includes(char) ) continue;
        if( char === "(" ){
            stack.push(i);
        }else{
            if(stack.length !==0 ){
                stack.pop();
            }
             if(stack.length!==0)  {
                 count = Math.max(count, i - stack[stack.length - 1]);
             } else {
                stack.push(i)
            }
            
        }
    }
    return count;
};


console.log(longestValidParentheses(")()()()()))((()()()))))"))