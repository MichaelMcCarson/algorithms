// --------------------------------------------
// Dijkstra's Algorithm is a well-known algorithm for finding the shortest paths between nodes in a weighted graph. It computes the shortest path from a single source node to all other nodes in the graph. Unlike the A* algorithm, Dijkstra's algorithm does not use a heuristic and guarantees the shortest path in all cases, even for graphs with non-negative weights.

class DijkstraGraph {
  adjacencyList: Map<string, { node: string; weight: number }[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1: string, vertex2: string, weight: number) {
    this.adjacencyList.get(vertex1)?.push({ node: vertex2, weight });
    this.adjacencyList.get(vertex2)?.push({ node: vertex1, weight }); // if the graph is undirected
  }
}

class PriorityQueue {
  private heap: { node: string; priority: number }[];

  constructor() {
    this.heap = [];
  }

  push(node: { node: string; priority: number }) {
    this.heap.push(node);
    this.heap.sort((a, b) => a.priority - b.priority);
  }

  pop(): { node: string; priority: number } | undefined {
    return this.heap.shift();
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }
}

function dijkstra(
  graph: DijkstraGraph,
  start: string
): { [key: string]: number } {
  const distances: { [key: string]: number } = {};
  const priorityQueue = new PriorityQueue();
  const previous: { [key: string]: string | null } = {};

  for (const vertex of graph.adjacencyList.keys()) {
    if (vertex === start) {
      distances[vertex] = 0;
      priorityQueue.push({ node: vertex, priority: 0 });
    } else {
      distances[vertex] = Infinity;
      priorityQueue.push({ node: vertex, priority: Infinity });
    }
    previous[vertex] = null;
  }

  while (!priorityQueue.isEmpty()) {
    const smallest = priorityQueue.pop();
    if (!smallest) {
      break;
    }

    const smallestNode = smallest.node;

    if (distances[smallestNode] === Infinity) {
      break;
    }

    for (const neighbor of graph.adjacencyList.get(smallestNode) || []) {
      const candidate = distances[smallestNode] + neighbor.weight;

      if (candidate < distances[neighbor.node]) {
        distances[neighbor.node] = candidate;
        previous[neighbor.node] = smallestNode;
        priorityQueue.push({ node: neighbor.node, priority: candidate });
      }
    }
  }

  return distances;
}

const graph = new DijkstraGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
const distances = dijkstra(graph, "A");

console.log(distances); // Output: { A: 0, B: 4, C: 2, D: 4, E: 7, F: 5 }

// A weighted graph is a type of graph where each edge between nodes(vertices) has an associated numerical value called a weight.These weights typically represent the cost, distance, or time required to travel from one node to another. Weighted graphs are used in a variety of applications, such as modeling transportation networks, financial networks, and more.

// --------------------------------------------
// Key Concepts of Weighted Graphs
// --------------------------------------------

// Vertices (Nodes): The fundamental units of the graph, which can represent locations, entities, or any discrete objects.

// Edges: Connections between pairs of vertices. Each edge can be directed(having a specific direction from one vertex to another) or undirected.

// Weights: Numerical values assigned to edges that represent the cost or distance between the connected vertices.

// --------------------------------------------
// Types of Weighted Graphs
// --------------------------------------------

// Directed Weighted Graph: Each edge has a direction and a weight. The weight represents the cost to traverse from the source vertex to the destination vertex.

// Undirected Weighted Graph: Each edge does not have a direction but has a weight. The weight represents the cost to traverse between the two vertices in either direction.

// --------------------------------------------
// Applications of Weighted Graphs
// --------------------------------------------

// Routing and Navigation: Finding the shortest path between locations, such as in GPS navigation systems.
// Networking: Optimizing the routing of data packets in communication networks.
// Supply Chain Management: Minimizing transportation costs and optimizing logistics.
// Project Management: Representing tasks and their dependencies with weights indicating time or cost.
