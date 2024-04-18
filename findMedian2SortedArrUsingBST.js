const {BST} = require("./treeTraversales")

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.count = 1; // To keep track of the number of nodes in the subtree rooted at this node.
    }
}

const insertIntoBST = (root, val) => {
    if (!root) return new TreeNode(val);

    if (val <= root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }

    root.count++; // Increment the count of nodes in the subtree.
    console.log(root)
    return root;
};

const findKthElement = (root, k) => {
    if (!root) return null;

    const leftCount = root.left ? root.left.count : 0;

    if (k === leftCount + 1) {
        return root.val;
    } else if (k <= leftCount) {
        return findKthElement(root.left, k);
    } else {
        return findKthElement(root.right, k - leftCount - 1);
    }
};

var findMedianSortedArrays = function(nums1, nums2) {
    const totalElements = nums1.length + nums2.length;
    const tree = new BST();

    for (const num of nums1) {
        tree.insert( num);
    }

    for (const num of nums2) {
        tree.insert( num);
    }

    if (totalElements % 2 === 1) {
        return tree.findKthEle( Math.floor(totalElements / 2) + 1);
    } else {
        const left = tree.findKthEle( totalElements / 2);
        tree.count=0;
        const right = tree.findKthEle( (totalElements / 2) + 1);
        return (left + right) / 2;
    }
};

const result = findMedianSortedArrays([2], [1, 3, 4]);
console.log(result); // Output: 2.5
