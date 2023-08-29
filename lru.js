// least recently used cache.

class ListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}
class LRUCache {
	constructor(capacity = 10) {
		this.head = null;
		this.tail = null;
		this.size = 0;
		this.cache = new Map();
		this.capacity = capacity;
	}

	insertAtHead(value) {
		this.size++;
		this.popTail();
		let newNode = createNode(value);
		this.cache.set(value, newNode);
		if (this.head) {
			newNode.next = this.head;
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.head = newNode;
		}
		if (this.tail) {
			this.tail.next = this.head;
		}
		if (!this.head) this.head = this.tail = newNode;
		return newNode;
	}

	popTail() {
		if (this.size > this.capacity && this.tail) {
			const temp = this.tail;
			this.tail = this.tail.prev;
			this.tail.next = this.head;
			console.log(temp.value + " poped");
			this.cache.delete(temp.value);
			this.size--;
		}
	}

	moveToHead(node) {
		this.removeNode(node);
		this.insertAtHead(node.value);
	}

	removeNode(node) {
		this.cache.delete(node.value);
		this.size--;
		node.prev.next = node.next;
		node.next.prev = node.prev;
	}

	get(key) {
		const node = this.cache.get(key);
		if (node == null) {
			return -1;
		}
		this.moveToHead(node);
		return node.value;
	}
}

function createNode(value) {
	return new ListNode(value);
}

const cache = new LRUCache(4);

cache.insertAtHead(10);
cache.insertAtHead(20);
cache.insertAtHead(30);
cache.insertAtHead(40);
console.log(cache.get(10));
cache.insertAtHead(50);

console.log(cache);
