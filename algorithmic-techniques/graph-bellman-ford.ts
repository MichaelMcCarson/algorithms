// The Bellman-Ford algorithm is a classic algorithm used for finding the shortest paths from a single source vertex to all other vertices in a weighted graph. Unlike Dijkstra's algorithm, Bellman-Ford can handle graphs with negative weights, making it more versatile but generally slower.

class Edge {
  constructor(
    public source: string,
    public destination: string,
    public weight: number
  ) {}
}

class SearchGraph {
  vertices: Set<string>;
  edges: Edge[];

  constructor() {
    this.vertices = new Set();
    this.edges = [];
  }

  addEdge(source: string, destination: string, weight: number) {
    this.edges.push(new Edge(source, destination, weight));
    this.vertices.add(source);
    this.vertices.add(destination);
  }
}

function bellmanFord(
  graph: SearchGraph,
  start: string
): { [key: string]: number } | null {
  const distances: { [key: string]: number } = {};
  const vertices = Array.from(graph.vertices);

  // Step 1: Initialize distances
  for (const vertex of vertices) {
    distances[vertex] = Infinity;
  }
  distances[start] = 0;

  // Step 2: Relax edges repeatedly
  for (let i = 0; i < vertices.length - 1; i++) {
    for (const edge of graph.edges) {
      const { source, destination, weight } = edge;
      if (distances[source] + weight < distances[destination]) {
        distances[destination] = distances[source] + weight;
      }
    }
  }

  // Step 3: Check for negative weight cycles
  for (const edge of graph.edges) {
    const { source, destination, weight } = edge;
    if (distances[source] + weight < distances[destination]) {
      console.log("Graph contains a negative weight cycle");
      return null;
    }
  }

  return distances;
}

const searchGraph = new SearchGraph();
searchGraph.addEdge("A", "B", 4);
searchGraph.addEdge("A", "C", 2);
searchGraph.addEdge("B", "E", 3);
searchGraph.addEdge("C", "D", 2);
searchGraph.addEdge("C", "F", 4);
searchGraph.addEdge("D", "E", 3);
searchGraph.addEdge("D", "F", 1);
searchGraph.addEdge("E", "F", 1);

const searchDistances = bellmanFord(searchGraph, "A");

if (searchDistances) {
  console.log(searchDistances); // Output: { A: 0, B: 4, C: 2, D: 4, E: 7, F: 5 }
}

// Explanation

// --------------------------------------------
// Graph Class
// --------------------------------------------

// Represents the graph using an adjacency list of edges.
// addEdge method adds a directed edge with a weight between two vertices.

// --------------------------------------------
// Bellman-Ford Algorithm
// --------------------------------------------

// Initialization: Set the distance to the start vertex to 0 and all other vertices to infinity.

// Edge Relaxation: For each edge, update the distance to the destination vertex if a shorter path is found. Repeat this process |V| - 1 times, where |V| is the number of vertices.

// Negative Cycle Detection: Check for negative weight cycles by attempting to relax the edges one more time. If a shorter path is found, a negative weight cycle exists, and the algorithm returns null.

// --------------------------------------------
// Time Complexity
// --------------------------------------------

// The Bellman-Ford algorithm runs in O(V⋅E) time, where V is the number of vertices and E is the number of edges.
// It is less efficient than Dijkstra's algorithm for graphs with non-negative weights but is essential for graphs that may contain negative weights.

// --------------------------------------------
// Use Cases
// --------------------------------------------

// Network Routing: Finding the shortest path in networks where link weights can be negative due to various factors like delays.
// Finance: Detecting arbitrage opportunities in currency exchange.
// Geographic Information Systems (GIS): Modeling paths where certain paths might have negative effects (like tolls or restrictions).

// The Bellman - Ford algorithm is a powerful tool for shortest path problems, especially when negative weights are involved.
