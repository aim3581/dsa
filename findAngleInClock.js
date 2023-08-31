/**
 * Given a time in hours and minutes, find the angle between hours and minutes pointers in analog clock
 */

function getAngle(hours, minutes) {
	return 30 * hours - (11 / 2) * minutes;
}

function findAngle(time) {
	if (!time) {
		return 0;
	}

	const [hour = 0, minuts = 0] = time.split(":");
	return getAngle(hour, minuts);
}

const time = "12:15";

const angle = findAngle(time);
console.log(angle);
