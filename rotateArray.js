/**
 * 2. Rotate an m by m matrix by 90 degrees.

i/p:     [
	 [1, 2, 3, 4],
     [5, 6, 7, 8],
     [9, 10, 11, 12],
     [13, 14, 15, 16]
	]
         
o/p:     [
	 [13, 9, 5, 1],
     [14, 10, 6, 2],
     [15, 11, 7, 3],
     [16, 12, 8, 4]
	]

 */

function swapElements(matrix, [r1, c1], [r2, c2]) {
	const temp = matrix[r1][c1];
	matrix[r1][c1] = matrix[r2][c2];
	matrix[r2][c2] = temp;
}

function rotateCorners(matrix) {
	const m = matrix.length;
	const n = matrix[0].length;

	if (m !== n) {
		return matrix;
	}
	const arr = [
		[0, m - 1],
		[m - 1, m - 1],
		[m - 1, 0],
		[0, 0],
	];
	let temp = matrix[0][0];
	for (let i = 0; i < arr.length; i++) {
		const [r, c] = arr[i];
		let temp2 = matrix[r][c];
		matrix[r][c] = temp;
		temp = temp2;
	}
}

function rotateMiddleElements(matrix) {
	const n = matrix.length - 1;
	for (let i = 0; i < n / 2; i++) {
		for (let j = i; j < n - i; j++) {
			const temp = matrix[i][j];
			matrix[i][j] = matrix[n - j][i];
			matrix[n - j][i] = matrix[n - i][n - j];
			matrix[n - i][n - j] = matrix[j][n - i];
			matrix[j][n - i] = temp;
		}
	}
}

const matrix = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
];

console.log(matrix);

rotateMiddleElements(matrix);
console.log(matrix);
