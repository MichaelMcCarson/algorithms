// BFS explores all neighbors at the present depth level before moving on to nodes at the next depth level.

function bfs(graph: Graph, start: number): number[] {
  const result: number[] = [];
  const visited: Set<number> = new Set();
  const queue: number[] = [start];

  while (queue.length) {
    const vertex = queue.shift();
    if (vertex !== undefined && !visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);
      const neighbors = graph.adjacencyList.get(vertex) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  return result;
}

// Examples;

const graph = new Graph();
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);
graph.addEdge(3, 6);
graph.addEdge(3, 7);

console.log("DFS Recursive:", dfsRecursive(graph, 1)); // Output: [1, 2, 4, 5, 3, 6, 7]
console.log("DFS Iterative:", dfsIterative(graph, 1)); // Output: [1, 3, 7, 6, 2, 5, 4]
console.log("BFS:", bfs(graph, 1)); // Output: [1, 2, 3, 4, 5, 6, 7]
