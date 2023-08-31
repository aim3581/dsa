/**
 * .You are a given an integer .You have to print all the possible valid parenthesis for this integer.
For eg for n=2,we have o/p= ()() ,(()),etc
I solved it using this approach.I first print all the possible permutations for a string possible using that integer and then finally check if it is a valid parenthesis,then print it.
 */

const openBr = "(";
const closeBr = ")";

function genUniqueParenthisis(map, n) {}

function generateParenthesis(n) {
	const result = [];

	function track(s, left, right) {
		if (s.length === 2 * n) {
			result.push(s);
			return;
		}
		if (left < n) {
			track(s + "(", left + 1, right);
		}
		if (right < left) {
			track(s + ")", left, right + 1);
		}
	}
	track("", 0, 0);
	return result;
}
console.log(generateParenthesis(5));
