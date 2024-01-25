

var breadthFirstSearch = function(node) {
    
    let queue = [node]
    let visited = {[node.val]: true} // this can be an array, as long as you track indicies
    while (queue.length > 0) {
        let current = queue.shift()
        // do something with current node
        for (const neighbor of current.neighbors) {
            if (!visited[neighbor.val]) {
                visited[neighbor.val] = true
                queue.push(neighbor)
            }
            // do something with each neighbor of current node
        }
    }

    return visited[node.val]
};