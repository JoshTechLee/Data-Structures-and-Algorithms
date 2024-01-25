// https://leetcode.com/problems/clone-graph/description/

/*
    LOGIC:
        traverse the graph.  While traversing create new nodes for unvisited, update for existing.
        Use "visited" as means to track visited nodes AND save reference to new cloned graph.
*/

var cloneGraph = function(node) {
    
    if (!node) return node

    let queue = [node]
    let visited = {[node.val]: new Node(node.val)}
    while (queue.length > 0) {
        let current = queue.shift()
        for (const neighbor of current.neighbors) {
            if (!visited[neighbor.val]) {
                visited[neighbor.val] = new Node(neighbor.val)
                queue.push(neighbor)
            }
            visited[current.val].neighbors.push(visited[neighbor.val])
        }
    }


    return visited[node.val]
};