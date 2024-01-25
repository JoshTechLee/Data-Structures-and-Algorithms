// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

/*
    queue
*/

var levelOrder = function(root) {
    let queue = [{tree: root, level: 0}]
    let solution = []
    if (!root) return []
    while (queue.length > 0) {
        let current = queue.shift()
        if (solution.length != current.level + 1) {
            solution.push([current.tree.val])
        } else {
            solution[current.level].push(current.tree.val)
        }
        const level = current.level + 1
        if (current.tree.left) queue.push({tree: current.tree.left, level})
        if (current.tree.right) queue.push({tree: current.tree.right, level})
    }
    return solution
};

