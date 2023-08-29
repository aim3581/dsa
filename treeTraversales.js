class Node {
	constructor(val) {
		this.key = val;
		// parent = null;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(val) {
		const node = new Node(val);
		if (!this.root) {
			this.root = node;
			return;
		}
		const parent = this.findParent(this.root, val);
		// node.parent = parent;
		if (val < parent.key) {
			parent.left = node;
		} else {
			parent.right = node;
		}
	}

	findParent(node, val) {
		if (val < node.key) {
			return node.left ? this.findParent(node.left, val) : node;
		} else {
			return node.right ? this.findParent(node.right, val) : node;
		}
	}

	inorderDFS(node) {
		if (node == null) {
			return;
		}

		this.inorderDFS(node.left);

		console.log(node.key + " ");

		this.inorderDFS(node.right);
	}

	preOrderDFS(node) {
		if (node == null) {
			return;
		}
		console.log(node.key + " ");
		this.preOrderDFS(node.left);
		this.preOrderDFS(node.right);
	}

	postOrderDFS(node) {
		if (node == null) {
			return;
		}
		this.postOrderDFS(node.left);
		this.postOrderDFS(node.right);
		console.log(node.key + " ");
	}

	levelOrderBFS() {
		const queue = [];
		if (this.root == null) return;
		queue.push(this.root);
		while (queue.length !== 0) {
			const node = queue.shift();
			console.log(node.key);
			if (node.left !== null) {
				queue.push(node.left);
			}
			if (node.right !== null) {
				queue.push(node.right);
			}
		}
	}

	// used post order DFS traversal  to find lowest common ancestor
	findLCA(root, nodeA, nodeB) {
		if (root == null) {
			return root;
		}
		if (root.key === nodeA || root.key === nodeB) {
			return root;
		}

		// this check is added to improve performance where no need to check right sub tree of root
		if (root.key > nodeA && root.key > nodeB) {
			return this.findLCA(root.left, nodeA, nodeB);
		}
		// this check is added to improve performance where no need to check left sub tree of root
		if (root.key < nodeA && root.key < nodeB) {
			return this.findLCA(root.right, nodeA, nodeB);
		}
		const leftLCA = this.findLCA(root.left, nodeA, nodeB);
		const rightLCA = this.findLCA(root.right, nodeA, nodeB);

		//if both are present then return root as common ancestor
		if (leftLCA !== null && rightLCA !== null) {
			return root;
		}

		return leftLCA || rightLCA;
	}

	findDistance(root, node, distance = 0) {
		if (root == null || root.key === node) {
			return distance;
		}

		if (node < root.key) {
			return this.findDistance(root.left, node, distance + 1);
		}
		return this.findDistance(root.right, node, distance + 1);
	}

	findDistanceBetweenNodes(root, node, distance = 0) {
		if (root == null || root.key === node) {
			return distance;
		}

		if (node < root.key) {
			return this.findDistance(root.left, node, distance + 1);
		}
		return this.findDistance(root.right, node, distance + 1);
	}
}

const tree = new BST();

tree.insert(10);
tree.insert(8);
tree.insert(7);
tree.insert(9);
tree.insert(14);
tree.insert(12);
tree.insert(11);
tree.insert(13);
tree.insert(17);
tree.insert(16);
tree.insert(15);

console.log(JSON.stringify(tree));
console.log("----------------------------------------");
tree.inorderDFS(tree.root);
console.log("----------------------------------------");
tree.preOrderDFS(tree.root);
console.log("----------------------------------------");
tree.postOrderDFS(tree.root);
console.log("----------------------------------------");

tree.levelOrderBFS();
console.log("----------------------------------------");

const n = tree.findLCA(tree.root, 13, 15);
console.log("LCA: ", n.key);
console.log("----------------------------------------");
console.log(tree.findDistance(tree.root, 8));
