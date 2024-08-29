class TopologicalGraph {
  adjacencyList: Map<number, number[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: number) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1: number, vertex2: number) {
    if (!this.adjacencyList.has(vertex1)) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList.has(vertex2)) {
      this.addVertex(vertex2);
    }
    this.adjacencyList.get(vertex1)?.push(vertex2);
  }
}

// --------------------------------------------
// Topological Sort using DFS
// --------------------------------------------

function topologicalSort(graph: TopologicalGraph): number[] {
  const stack: number[] = [];
  const visited: Set<number> = new Set();

  function dfs(vertex: number) {
    visited.add(vertex);
    const neighbors = graph.adjacencyList.get(vertex) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
    stack.push(vertex);
  }

  for (const vertex of graph.adjacencyList.keys()) {
    if (!visited.has(vertex)) {
      dfs(vertex);
    }
  }

  return stack.reverse();
}

const topologicalGraph = new TopologicalGraph();
topologicalGraph.addEdge(5, 2);
topologicalGraph.addEdge(5, 0);
topologicalGraph.addEdge(4, 0);
topologicalGraph.addEdge(4, 1);
topologicalGraph.addEdge(2, 3);
topologicalGraph.addEdge(3, 1);

const sortedOrder = topologicalSort(topologicalGraph);
console.log("Topological Sort:", sortedOrder); // Output: [5, 4, 2, 3, 1, 0] or any valid topological order
