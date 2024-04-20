
// Node class represents each node in the BST
class Node {
    constructor(val) {
        this.key = val; // The value of the node
        this.left = null; // The left child of the node
        this.right = null; // The right child of the node
    }
}

/**
	 * Binary Tree
		• A binary tree is a tree with the following properties:
			• Each internal node has two children
			• The children of a node are an ordered pair
			• We call the children of an internal node left child and right child
			• Alternative recursive definition: a binary tree is either
				• a tree consisting of a single node, or
				• a tree whose root has an ordered pair of children, each of which is a disjoint binary tree
		• Applications:
			• arithmetic expressions
			• decision processes
			• searching
		The tree data structure

		
         10
       /  \
      8   14
     / \  /  \
    7  9 12  17
          /  /  \
         11 16  15
            \
            13

In-order (left, root, right): 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17
Pre-order (root, left, right): 10, 8, 7, 9, 14, 12, 11, 13, 17, 16, 15
Post-order (left, right, root): 7, 9, 8, 11, 13, 12, 15, 16, 17, 14, 10
Level-order (Breadth-first): 10, 8, 14, 7, 9, 12, 17, 11, 16, 13, 15

	?? 	How many leaves L does a proper binary tree of heighh have?
		The number of leaves at depth d = 2d
		If the height of the tree is h it has 2^h leaves.
		L = 2^h

	?? What is the height h of a proper binary tree with L leaves?
		leaves = 1 height = 0
		leaves = 2 height = 1
		leaves = 4 height = 2
		leaves = L height = LogL
		Since L = 2^h
		logL = log2^h
		h = logL
	
	??	The number of internal nodes of a proper binary tree of height h is ?
			Internal nodes = 0 height = 0
			Internal nodes = 1 height = 1
			Internal nodes = 1 + 2 height = 2
			Internal nodes = 1 + 2 + 4 height = 3
			1 + 2 + 2^2 + . . . + 2^(h-1) = 2^h - 1
			Thus, a complete binary tree of height = h has 2^h - 1 internal nodes.

	?? The number of nodes n of a proper binary tree of height h is ?

		nodes = 1 height = 0
		nodes = 3 height = 1
		nodes = 7 height = 2
		nodes = 2^(h+1)- 1 height = h
		Since L = 2^h
		and since the number of internal nodes = 2^h - 1 
		the total number of nodes n = 2^h+ 2^h - 1 = 2(2^h) – 1 = 2^(h+1) - 1

	?? If the number of nodes is n then what is the height?
		nodes = 1 height = 0
		nodes = 3 height = 1
		nodes = 7 height = 2
		nodes = n height = Log(n+1) - 1
		
		Since n = 2h+1-1
		n + 1 = 2^h+1
		Log(n+1) = Log2^(h+1)
		Log(n+1) = h+1
		h = Log(n+1) - 1

 */

// BST (Binary Search Tree) class represents the whole tree
class BST {
    constructor() {
        this.root = null; // The root node of the tree
        this.size = 0; // The number of nodes in the tree
        this.count = 0; // A counter used in findKthElement method
    }

		// Function to insert a new value into the Binary Search Tree
	insert(val) {
		// Create a new node with the given value
		const node = new Node(val);

		// Increment the size of the tree
		this.size++;

		// If the tree is empty (i.e., there is no root), set the new node as the root
		if (!this.root) {
			this.root = node;
			return;
		}

		// If the tree is not empty, find the parent node where the new node should be added
		const parent = this.findParent(this.root, val);

		// If the new value is less than the parent's value, add the new node to the left of the parent
		if (val < parent.key) {
			parent.left = node;
		} 
		// If the new value is greater than or equal to the parent's value, add the new node to the right of the parent
		else {
			parent.right = node;
		}
	}

		// Function to find the parent node for a given value in the Binary Search Tree
	findParent(node, val) {
		// Initialize a variable to keep track of the parent node
		let parent = null;

		// Start from the given node and move down the tree
		while (node) {
			// If the given value is less than the value of the current node
			if (val < node.key) {
				// Update the parent to the current node
				parent = node;
				// Move to the left child
				node = node.left;
			} 
			// If the given value is greater than the value of the current node
			else if (val > node.key) {
				// Update the parent to the current node
				parent = node;
				// Move to the right child
				node = node.right;
			} 
			// If the given value is equal to the value of the current node
			else {
				// Stop the loop as we've found the node for the given value
				break;
			}
		}

		// Return the parent node
		return parent;
	}

		// Function to perform an in-order depth-first search (DFS) on the Binary Search Tree
	inorderDFS(node) {
		// If the node is null (i.e., we've reached a leaf node), return
		if (node == null) {
			return;
		}

		// Recursively call the function on the left child of the node
		// This will explore all the nodes on the left side of the current node
		this.inorderDFS(node.left);

		// Print the value of the current node
		// In an in-order DFS, we visit the left child, then the parent, then the right child
		console.log(node.key + " ");

		// Recursively call the function on the right child of the node
		// This will explore all the nodes on the right side of the current node
		this.inorderDFS(node.right);
	}

	// Function to perform an in-order traversal of the Binary Search Tree using a stack
	inorderTraversalStack(root) {
		// Initialize an empty stack
		const stack = [];

		// Start from the root node
		let current = root;

		// Continue the loop as long as there are unvisited nodes
		while (current || stack.length > 0) {
			// Move to the leftmost node of the current node
			while (current) {
				// Push the current node to the stack before moving to its left child
				stack.push(current);
				current = current.left;
			}

			// By now we've reached the leftmost node, so we pop a node from the stack
			current = stack.pop();

			// Print the value of the current node
			console.log(current.key);

			// Finally, we move to the right child of the current node
			current = current.right;
		}
	};

	// Function to perform a pre-order depth-first search (DFS) on the Binary Search Tree
	preOrderDFS(node) {
		// If the node is null (i.e., we've reached a leaf node), return
		if (node == null) {
			return;
		}

		// Print the value of the current node
		// In a pre-order DFS, we visit the parent first, then the left child, then the right child
		console.log(node.key + " ");

		// Recursively call the function on the left child of the node
		// This will explore all the nodes on the left side of the current node
		this.preOrderDFS(node.left);

		// Recursively call the function on the right child of the node
		// This will explore all the nodes on the right side of the current node
		this.preOrderDFS(node.right);
	}

	/**
	 * Non-Recursive preorder traversal
		1. Start from root.
		2. Print the node.
		3. Push right child onto to stack.
		4. Push left child onto to stack.
		5. Pop node from the stack.
		6. Repeat Step 2 to 5 till stack is not empty.
	 */
	// Function to perform a pre-order traversal of the Binary Search Tree using a stack
	preOrderStack(root) {
		// Initialize an empty stack
		const stack = [];

		// If the root is null (i.e., the tree is empty), return
		if(!root) return;

		// Push the root node to the stack
		stack.push(root);

		// Continue the loop as long as there are unvisited nodes
		while(stack.length) {
			// Pop a node from the stack and print its value
			// In a pre-order traversal, we visit the parent first, then the left child, then the right child
			const current = stack.pop();
			console.log(current.key);

			// If the current node has a right child, push it to the stack
			if(current.right) {
				stack.push(current.right);
			}

			// If the current node has a left child, push it to the stack
			// We push the left child after the right child to ensure that it is visited first
			// because the last node added to the stack is the first one to be visited
			if(current.left) {
				stack.push(current.left);
			}
		}
	}

	// Function to perform a post-order depth-first search (DFS) on the Binary Search Tree
	postOrderDFS(node) {
		// If the node is null (i.e., we've reached a leaf node), return
		if (node == null) {
			return;
		}

		// Recursively call the function on the left child of the node
		// This will explore all the nodes on the left side of the current node
		this.postOrderDFS(node.left);

		// Recursively call the function on the right child of the node
		// This will explore all the nodes on the right side of the current node
		this.postOrderDFS(node.right);

		// Print the value of the current node
		// In a post-order DFS, we visit the left child, then the right child, then the parent
		console.log(node.key + " ");
	}

	/**
	 * This function performs a post-order traversal of the Binary Search Tree using two stacks. 
	 * It uses the first stack to visit the nodes in the order of parent, right child, left child, 
	 * and the second stack to reverse the order to left child, right child, parent. 
	 * The result is that the nodes are visited in post-order.
	 */
	// Function to perform a post-order traversal of the Binary Search Tree using two stacks
	postOrderUsingTwoStacks(root) {
		// Initialize two empty stacks
		const stack1 = [];
		const stack2 = [];

		// If the root is null (i.e., the tree is empty), return
		if(!root) return;

		// Push the root node to the first stack
		stack1.push(root);

		// Continue the loop as long as there are unvisited nodes in the first stack
		while (stack1.length > 0) {
			// Pop a node from the first stack and push it to the second stack
			// In a post-order traversal, we visit the left child, then the right child, then the parent
			const current = stack1.pop();
			stack2.push(current);

			// If the current node has a left child, push it to the first stack
			if(current.left) {
				stack1.push(current.left);
			}

			// If the current node has a right child, push it to the first stack
			// We push the right child before the left child to ensure that it is visited first
			// because the last node added to the first stack is the first one to be visited
			if(current.right) {
				stack1.push(current.right);
			}
		}

		// Pop the nodes from the second stack and print their values
		// The nodes are popped in the order of left child, right child, parent
		while (stack2.length) {
			console.log(stack2.pop().key);
		}		
	}

	/**
	 * In this optimized function, we use a single stack to keep track of the nodes to be visited. 
	 * We push the right child to the stack before the left child to ensure that the left child is visited first. 
	 * When we encounter a leaf node or a node that has been visited, we print its value and update the root to the current node. 
	 * This allows us to avoid visiting the same node twice.
	 */
	// Function to perform a post-order traversal of the Binary Search Tree using a stack
	postOrderSingleStack(root) {
		// Initialize an empty stack
		const stack = [];

		// If the root is null (i.e., the tree is empty), return
		if(!root) return;

		// Push the root node to the stack
		stack.push(root);

		// Continue the loop as long as there are unvisited nodes
		while (stack.length > 0) {
			// Peek at the top node in the stack
			const current = stack[stack.length - 1];

			// If the current node is a leaf node or if it has been visited, print its value
			if (!current.left && !current.right || current.left === root || current.right === root) {
				console.log(stack.pop().key);
				root = current;
			} else {
				// If the current node has a right child, push it to the stack
				if (current.right) {
					stack.push(current.right);
				}

				// If the current node has a left child, push it to the stack
				// We push the left child after the right child to ensure that it is visited first
				// because the last node added to the stack is the first one to be visited
				if (current.left) {
					stack.push(current.left);
				}
			}
		}
	}	

	/**
	 * This function performs a level-order traversal (Breadth-First Search) of the Binary Search Tree. 
	 * It visits all the nodes at the current level before moving to the next level. 
	 * It uses a queue to keep track of the nodes to be visited and a widths object to keep track of the width of each level. 
	 * The width of a level is the number of nodes at that level.
	 */
	// Function to perform a level-order traversal (Breadth-First Search) of the Binary Search Tree
	levelOrderBFS() {
		// Initialize an empty queue
		const queue = [];

		// If the root is null (i.e., the tree is empty), return
		if (this.root == null) return;

		// Push the root node to the queue
		queue.push(this.root);

		// Initialize level and widths object to keep track of the width of each level
		let l = 1;
		const widths = {};
		widths[1] = queue.length;

		// Initialize count to keep track of the number of nodes at the current level
		let count = 1;

		// Continue the loop as long as there are unvisited nodes
		while (queue.length !== 0) {
			// Remove a node from the front of the queue and print its value
			const node = queue.shift();
			console.log(node.key);

			// If the current node has a left child, add it to the end of the queue
			if (node.left !== null) {
				queue.push(node.left);
			}

			// If the current node has a right child, add it to the end of the queue
			if (node.right !== null) {
				queue.push(node.right);
			}

			// Decrement the count of nodes at the current level
			count--;

			// If all nodes at the current level have been visited and there are more nodes to visit
			if (count == 0 && queue.length) {
				// Increment the level
				l++;

				// Update the width of the next level and the count of nodes at the next level
				widths[l] = queue.length;
				count = queue.length;
			}
		}

		// Print the widths of each level
		console.log(widths);

		// Return the widths of each level
		return widths;
	}

	levelOrderBFSWithoutWidths() {
		// Initialize an empty queue
		const queue = [];
	
		// If the root is null (i.e., the tree is empty), return
		if (this.root == null) return;
	
		// Push the root node to the queue
		queue.push(this.root);
	
		// Continue the loop as long as there are unvisited nodes
		while (queue.length !== 0) {
			// Initialize count to keep track of the number of nodes at the current level
			let count = queue.length;
	
			// Iterate over each node at the current level
			for (let i = 0; i < count; i++) {
				// Remove a node from the front of the queue and print its value
				const node = queue.shift();
				console.log(node.key);
	
				// If the current node has a left child, add it to the end of the queue
				if (node.left !== null) {
					queue.push(node.left);
				}
	
				// If the current node has a right child, add it to the end of the queue
				if (node.right !== null) {
					queue.push(node.right);
				}
			}
		}
	}	

	/**
	 * This function uses a post-order Depth-First Search (DFS) traversal to find the Lowest Common Ancestor (LCA) of two nodes in a Binary Search Tree (BST). 
	 * The LCA is the lowest node that has both nodes as descendants (where we allow a node to be a descendant of itself). 
	 * The function takes advantage of the properties of a BST to improve performance by only searching the necessary subtrees.
	 */
	// Function to find the Lowest Common Ancestor (LCA) of two nodes in the Binary Search Tree
	findLCA(root, nodeA, nodeB) {
		// If the root is null (i.e., the tree is empty), return null
		if (root == null) {
			return root;
		}

		// If the root is one of the nodes we are looking for, return the root
		if (root.key === nodeA || root.key === nodeB) {
			return root;
		}

		// If the root's key is greater than both nodes' keys, the LCA must be in the left subtree
		// So, we only need to search the left subtree
		if (root.key > nodeA && root.key > nodeB) {
			return this.findLCA(root.left, nodeA, nodeB);
		}

		// If the root's key is less than both nodes' keys, the LCA must be in the right subtree
		// So, we only need to search the right subtree
		if (root.key < nodeA && root.key < nodeB) {
			return this.findLCA(root.right, nodeA, nodeB);
		}

		// If neither of the above conditions is true, the LCA must be the root
		// So, we search both the left and right subtrees
		const leftLCA = this.findLCA(root.left, nodeA, nodeB);
		const rightLCA = this.findLCA(root.right, nodeA, nodeB);

		// If both subtrees return a node, then one node is in one subtree and the other is in the other
		// So this node is the LCA
		if (leftLCA !== null && rightLCA !== null) {
			return root;
		}

		// Otherwise check if left subtree or right subtree is the LCA
		return leftLCA || rightLCA;
	}

	// Function to find the distance from the root to a given node in the Binary Search Tree
	findDistance(root, node, distance = 0) {
		// If the root is null (i.e., the tree is empty) or the root is the node we are looking for,
		// return the current distance
		if (root == null || root.key === node) {
			return distance;
		}

		// If the node's key is less than the root's key, the node must be in the left subtree
		// So, we only need to search the left subtree and increment the distance by 1
		if (node < root.key) {
			return this.findDistance(root.left, node, distance + 1);
		}

		// If the node's key is greater than the root's key, the node must be in the right subtree
		// So, we only need to search the right subtree and increment the distance by 1
		return this.findDistance(root.right, node, distance + 1);
	}

	// Function to find the distance between two nodes in the Binary Search Tree
	findDistanceBetweenNodes(nodeA, nodeB) {
		// First, find the Lowest Common Ancestor (LCA) of the two nodes
		const lca = this.findLCA(this.root, nodeA, nodeB);

		// Then, find the distance from the LCA to the first node
		const distanceA = this.findDistance(lca, nodeA);

		// And find the distance from the LCA to the second node
		const distanceB = this.findDistance(lca, nodeB);

		// The distance between the two nodes is the sum of the two distances
		return distanceA + distanceB;
	}

	/**
	 * This function uses a recursive approach to calculate the height of a node in a Binary Search Tree (BST). 
	 * The height of a node is defined as the number of edges on the longest path from the node to a leaf. 
	 * An empty tree has a height of 0.
	 * 
	 * Computing Height of Tree
		Can be computed using the following idea:
		1. The height of a leaf node is 0
		2. The height of a node other than the leaf is the
		maximum of the height of the left subtree and the
		height of the right subtree plus 1.
		-------  Height(v) = max[height(vleft) + height(vright)] + 1 -------
	 * 
	 */
	// Function to calculate the height of a node in the Binary Search Tree
	height(node) {
		// If the node is null (i.e., we've reached an empty leaf), return 0
		if (node === null) {
			return 0;
		}

		// Otherwise, the height of the node is 1 (for the node itself) plus the maximum of the heights of its left and right children
		return 1 + Math.max(this.height(node.left), this.height(node.right));
	}

	/**
	 * This function uses a recursive approach to calculate the depth of a node in a Binary Search Tree (BST). 
	 * The depth of a node is defined as the number of edges on the path from the root of the tree to the node. An empty tree has a depth of -1.
	 */
	// Function to calculate the depth of a given node in the Binary Search Tree
	depth(node, x = "") {
		// If the node is null (i.e., we've reached an empty leaf), return -1
		if (node === null) {
			return -1;
		}

		// Initialize a variable to keep track of the depth
		let d = -1;

		// If the current node's key is equal to the given key, or if the given key is found in the left or right subtree,
		// return the depth of the current node (which is the depth of the parent node plus 1)
		if (
			node.key == x ||
			(d = this.depth(node.left, x)) >= 0 ||
			(d = this.depth(node.right, x)) >= 0
		)
			return d + 1;

		// If the given key is not found in either the current node or its subtrees, return -1
		return d;
	}

	/**
	 * This function uses an in-order traversal to find the kth smallest element in a Binary Search Tree (BST). 
	 * The in-order traversal visits the nodes in ascending order, so the kth node visited is the kth smallest element. 
	 * The function uses a counter to keep track of the number of nodes visited.
	 */
	// Function to find the kth smallest element in the Binary Search Tree
	findKthElement(node, k) {
		// If the node is null (i.e., we've reached an empty leaf), return null
		if (node == null) {
			return null;
		}

		// First, we recursively search the left subtree
		const left = this.findKthElement(node.left, k);

		// If the kth element is found in the left subtree, we return it
		if(left != null){
			return left;
		}

		// If the left subtree is null or doesn't contain the kth element, we increment the count (which keeps track of the number of nodes we've visited)
		this.count++;

		// If the count is equal to k, it means the current node is the kth smallest element, so we return its key
		if(k == this.count){
			return node.key;
		}

		// If the kth element is not found in the current node or its left subtree, we search the right subtree
		return this.findKthElement(node.right, k);
	}

	/**
	 * This function is a wrapper for the findKthElement(node, k) function. 
	 * It resets the count of visited nodes to 0 and starts the search for the kth smallest element from the root of the tree.
	 */
	// Function to find the kth smallest element in the Binary Search Tree
	findKthEle(k) {
		// Reset the count to 0 before starting the search
		this.count = 0;

		// Call the helper function findKthElement to start the search from the root of the tree
		return this.findKthElement(this.root, k);
	}
}

/**
 * 
         10
       /  \
      8   14
     / \  /  \
    7  9 12  17
          /  /  \
         11 16  15
            \
            13

In-order (left, root, right): 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17
Pre-order (root, left, right): 10, 8, 7, 9, 14, 12, 11, 13, 17, 16, 15
Post-order (left, right, root): 7, 9, 8, 11, 13, 12, 15, 16, 17, 14, 10
Level-order (Breadth-first): 10, 8, 14, 7, 9, 12, 17, 11, 16, 13, 15			
 */
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

// console.log(JSON.stringify(tree));
// console.log("----------------------------------------");
// tree.inorderDFS(tree.root);
// console.log("----------------------------------------");
//  tree.preOrderDFS(tree.root);
// console.log("----------------------------------------");
tree.postOrderDFS(tree.root);
console.log("----------------------------------------");

// tree.levelOrderBFS();
// console.log("----------------------------------------");

// const n = tree.findLCA(tree.root, 13, 15);
// console.log("LCA: ", n.key);
// console.log("----------------------------------------");
// console.log(tree.findDistance(tree.root, 15));
// console.log("----------------------------------------");
// console.log(tree.findDistanceBetweenNodes(7, 15));

// console.log("Height : ", tree.height(tree.root));

// console.log("depth : ", tree.depth(tree.root, 8));

// const result= tree.findKthElement(tree.root,3)
// console.log(result);

tree.postOrderStack(tree.root)

exports.BST=BST;

