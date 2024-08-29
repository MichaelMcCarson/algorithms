// The Floyd-Warshall algorithm is a dynamic programming algorithm used to find the shortest paths between all pairs of vertices in a weighted graph. It works for both directed and undirected graphs and can handle graphs with negative weights, but not with negative weight cycles.

function floydWarshall(graph: number[][]): number[][] {
  const dist = JSON.parse(JSON.stringify(graph)); // Deep copy of the graph matrix
  const numVertices = graph.length;

  // Initialize the solution matrix with the same values as the input graph matrix
  for (let k = 0; k < numVertices; k++) {
    for (let i = 0; i < numVertices; i++) {
      for (let j = 0; j < numVertices; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}

const INF = Infinity;
const floydGraph = [
  [0, 3, INF, 5],
  [2, 0, INF, 4],
  [INF, 1, 0, INF],
  [INF, INF, 2, 0],
];

const shortestPaths = floydWarshall(floydGraph);

console.log(shortestPaths);
/*
Output:
[
 [0, 3, 7, 5],
 [2, 0, 6, 4],
 [3, 1, 0, 5],
 [5, 3, 2, 0]
]
*/

// --------------------------------------------
// Explanation
// --------------------------------------------

// --------------------------------------------
// Graph Representation
// --------------------------------------------

// The graph is represented as an adjacency matrix, where graph[i][j] is the weight of the edge from vertex i to vertex j. If there is no edge, it is represented by Infinity.

// --------------------------------------------
// Floyd - Warshall Algorithm
// --------------------------------------------

// Initialization: Create a distance matrix initialized with the same values as the graph matrix.

// Triple Loop:
// k loop: Iterate through each vertex as an intermediate vertex.
// i loop: Iterate through each vertex as a starting vertex.
// j loop: Iterate through each vertex as an ending vertex.
// For each pair of vertices i and j, update the distance dist[i][j] to be the minimum of its current value and the path through vertex k.

// The resulting dist matrix contains the shortest distances between all pairs of vertices.

// --------------------------------------------
// Time Complexity
// --------------------------------------------

// The Floyd-Warshall algorithm runs in O(V3)O(V^3)O(V3) time, where VVV is the number of vertices.
// It is suitable for dense graphs and graphs where the number of vertices is relatively small.

// --------------------------------------------
// Use Cases
// --------------------------------------------

// Network Routing: Finding the shortest paths between all pairs of nodes in a network.
// GIS (Geographic Information Systems): Calculating the shortest paths between all pairs of locations.
// Operations Research: Optimizing travel routes, scheduling, and logistics.
// The Floyd-Warshall algorithm is a powerful tool for solving all-pairs shortest path problems, especially when dealing with dense graphs or when the graph has negative weights but no negative weight cycles.
