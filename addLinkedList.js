let add_integers = function (integer1, integer2) {
	let result = null;
	let last = null;
	let carry = 0;
	while (integer1 || integer2) {
		let first = !integer1 ? 0 : integer1.data;
		let second = !integer2 ? 0 : integer2.data;
		let sum = first + second + carry;
		let node = create_linked_list([sum]);
		if (result === null) {
			result = node;
		} else {
			last.next = node;
		}
		last = node;
		if (integer2) {
			integer2 = integer2.next;
		}
		if (integer1) {
			integer1 = integer1.next;
		}
	}
	return result;
};
