/*
Interviewer described a game scenario which consisted of a Cartesian plane and there are steps fixed at particular coordinates. 
The player enters from the top left point and can jump from a point to an adjacent point if there is a step there and 
the distance to jump is not more than one unit. 
Destination point is bottom right corner. 
Find the minimum number of steps the player needs to go from source to destination.


Will rat find the hole in maze

*/

let count = 0;

function findPath(matrix, r, i, visited = {}) {
	//recieved matrix
	// need to check adjuscent elements has 1 value or not
	// let's find left/right/down or up elements has 1
	// if found do same thing for the remaining one recusrsive call to an same method with updated data
	const numOfRows = matrix.length;
	const n = matrix[0].length;
	count++;
	if (r == numOfRows - 1 && i == n - 1) {
		return true; // this means rat is able to reach to the hole
	}
	visited[`${r}${i}`] = true;
	const li = i - 1;
	const ri = i + 1;
	const ur = r - 1;
	const dr = r + 1;
	if (!visited[`${r}${ri}`] && ri < n && matrix[r][ri] == 1) {
		if (findPath(matrix, r, ri, visited)) {
			return true;
		} // if right element on same row has 1
	}

	if (!visited[`${r}${li}`] && li > -1 && matrix[r][li] == 1) {
		if (findPath(matrix, r, li, visited)) {
			return true;
		} // if left element on same row has 1
	}

	if (!visited[`${dr}${i}`] && dr < numOfRows && matrix[dr][i] == 1) {
		if (findPath(matrix, dr, i, visited)) {
			return true;
		} // if down element on below row has 1
	}

	if (!visited[`${ur}${i}`] && ur > -1 && matrix[ur][i] == 1) {
		if (findPath(matrix, ur, i, visited)) {
			return true;
		} // if up element on above row has 1
	}
	return false;
}

/*

































*/

const matrix = [
	[1, 1, 1, 1],
	[1, 0, 1, 0],
	[1, 1, 1, 0],
	[0, 0, 1, 1],
];
const result = findPath(matrix, 0, 0);
console.log(count, result);
