/**
 * Given two arrays of equal size. First Array represents in the arrival timings of trains and second array represents the departure timings of the same trains. 
Now with the above two arrays data, give the number of platforms required to accommodate the trains. 

 */

function findReuiredPlatforms(arrival, departure) {
	const p = [];

	const arr2 = [];

	for (let index = 0; index < arrival.length; index++) {
		arr2[index] = { arr: arrival[index], dep: departure[index] };
	}

	arr2.sort((a, b) => a.arr - b.arr);

	p.push(arr2[0].dep);
	let count = 1;

	for (let i = 1; i < arrival.length; i++) {
		if (p[0] <= arr2[i].arr) {
			p.shift(); //check if can use existing platform or not
		} else {
			count++;
		}

		p.push(arr2[i].dep);
		p.sort();
	}
	console.log(count);
}

const arrival = [900, 940, 950, 1100, 1500, 1800];
const departure = [910, 1200, 1120, 1130, 1900, 2000];
findReuiredPlatforms(arrival, departure);
