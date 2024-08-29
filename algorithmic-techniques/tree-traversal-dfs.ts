class Graph {
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
    this.adjacencyList.get(vertex2)?.push(vertex1); //Undirected graph
  }
}

// --------------------------------------------
// Depth - First Search(DFS)
// --------------------------------------------

// DFS explores as far as possible along each branch before backtracking.Here is the implementation for both recursive and iterative approaches:

// --------------------------------------------
// Recursive DFS
// --------------------------------------------

function dfsRecursive(graph: Graph, start: number): number[] {
  const result: number[] = [];
  const visited: Set<number> = new Set();

  function dfs(vertex: number) {
    if (!vertex) return;
    visited.add(vertex);
    result.push(vertex);
    const neighbors = graph.adjacencyList.get(vertex) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }
  dfs(start);
  return result;
}

// --------------------------------------------
// Iterative DFS
// --------------------------------------------

function dfsIterative(graph: Graph, start: number): number[] {
  const result: number[] = [];
  const visited: Set<number> = new Set();
  const stack: number[] = [start];

  while (stack.length) {
    const vertex = stack.pop();
    if (vertex !== undefined && !visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);
      const neighbors = graph.adjacencyList.get(vertex) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return result;
}
