/**
 * example, "()" and "()[]" are all valid but "(]" and
"([]]" are not. Given an array of several strings
as the input. print "Valid" or "Not valid" on
separate lines for each input string. f the input
string contains any characters other than '(', ')',
"{", '}', '[' and ']'. then just print "Not valid".
Empty strings are always valid.

 */

function isValidString(string) {
	const stack = [];
	const map = { ")": "(", "]": "[", "}": "{" };
	if (!string) return "Valid";
	for (const char of string) {
		if (map[char]) {
			if (map[char] != stack.pop()) {
				return "Not Valid";
			} else {
				continue;
			}
		}
		if (!Object.values(map).includes(char)) {
			return "Not Valid";
		}

		stack.push(char);
	}
	return "Valid";
}

const arr = ["", "()", "[]", "()[]", "(]", "([)]", "{([])}", "{[)}(]", ";{}"];

for (const string of arr) {
	console.log(`Is ${string} : ${isValidString(string)}`);
}
