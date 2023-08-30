/*

The problem was to match a given string with a given regular expression 
with “*”  and “.” in it, where “a*” means zero or more than one occurrence of a, 
and “.” means single occurrence of any character 
(Note: “.*” is also a valid expression)

Matching a string against a regular expression containing `*` and `.` characters 
can be achieved using a technique called "Backtracking" or "Recursive Descent Parsing." 
Here, I'll provide a basic implementation of how you might approach this problem in JavaScript.
*/
function isMatch(s, p) {
    if (p === "") {
        return s === "";  // If pattern is empty, string should also be empty
    }
    
    const firstMatch = (s !== "" && (s[0] === p[0] || p[0] === "."));
    
    if (p.length >= 2 && p[1] === "*") {
        // Either skip the current pattern or skip the first character of the string
        return (isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p)));
    } else {
        // Move to the next character in both string and pattern
        return firstMatch && isMatch(s.substring(1), p.substring(1));
    }
}

// Example usage
console.log(isMatch("aa", "a"));         // Output: false
console.log(isMatch("aa", "a*"));        // Output: true
console.log(isMatch("ab", ".*"));        // Output: true
console.log(isMatch("mississippi", "mis*is*p*.")); // Output: false
/*

In this implementation:

- We recursively check each character of the string and the pattern.
- If the second character in the pattern is `*`, we have two options: 
  1. Skip the current pattern character and the `*`, and continue checking with the remaining pattern (`isMatch(s, p.substring(2))`).
  2. Check if the first character of the string matches the current pattern character (or is a `.`), and then continue checking with the remaining string and the same pattern (`firstMatch && isMatch(s.substring(1), p)`).
- If the second character in the pattern is not `*`, we simply match the current characters and continue to the next character in both the string and the pattern.

This is a basic and simplified implementation. Handling edge cases and optimizing the algorithm for efficiency is essential for a robust solution, especially for longer strings and patterns. Additionally, consider using dynamic programming to memoize repeated subproblems for better performance.
*/