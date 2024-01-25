//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/submissions/

/*
    LOGIC:
    the highest point where root.val is between p.val and q.val is where our lowest common ancestor
    is in a BST
*/

// recursively
var lowestCommonAncestor = function(root, p, q) {
    if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q)
    else if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q)
    return root
};

// iteratively
var lowestCommonAncestor = function(root, p, q) {
    let current = root
    let [low, high] = p.val <= q.val ? [p.val, q.val] : [q.val, p.val]
    while (current.val < low || current.val > high) {
        if (current.val > low && current.val > high) current = current.left
        else if (current.val < low && current.val < high) current = current.right
    }
    return current
};