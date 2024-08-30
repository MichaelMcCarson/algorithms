// An Eulerian Path is a trail in a graph that visits every edge exactly once. An Eulerian Circuit is an Eulerian Path that starts and ends at the same vertex. For a graph to have an Eulerian Path or Circuit, it must satisfy certain conditions.

// --------------------------------------------
// Conditions for Eulerian Path and Circuit
// --------------------------------------------

// Eulerian Circuit:

// An undirected graph has an Eulerian Circuit if and only if all vertices have even degree and all of its vertices with nonzero degree are connected.
// A directed graph has an Eulerian Circuit if and only if every vertex has the same in-degree as out-degree, and all vertices with nonzero degree are strongly connected.

// Eulerian Path:

// An undirected graph has an Eulerian Path if and only if exactly zero or two vertices have an odd degree, and all of its vertices with nonzero degree are connected.
// A directed graph has an Eulerian Path if and only if exactly one vertex has (out-degree) - (in-degree) = 1, exactly one vertex has (in-degree) - (out-degree) = 1, and all other vertices have equal in-degree and out-degree, and all vertices with nonzero degree are strongly connected.

// --------------------------------------------
// Explanation
// --------------------------------------------

// --------------------------------------------
// Hierholzer's Algorithm for Undirected Graph
// --------------------------------------------

// Initialization:
// The graph is represented as an adjacency list using a Map.
// Initialize the circuit as an empty array.

// isValidNextEdge:
// Checks if the edge (u, v) can be part of the Eulerian path/circuit.
// Ensures the graph remains connected if the edge is removed.

// dfsCount:
// Counts the number of reachable vertices from a given vertex using DFS.

// removeEdge/addEdge:
// Helper functions to remove and add edges in the graph.

// findEulerianCircuitOrPath:
// Finds a vertex with an odd degree to start (if any).
// Calls the recursive utility function to construct the path/circuit.

// eulerianCircuitOrPathUtil:
// Recursively constructs the Eulerian path/circuit by following valid edges.

// --------------------------------------------
// Hierholzer's Algorithm for Directed Graph
// --------------------------------------------

// Initialization:

// The graph, in-degrees, and out-degrees are represented using Map.
// Initialize the circuit as an empty array.

// findStartNode:
// Finds a starting node for the Eulerian path/circuit based on degree conditions.

// findEulerianCircuitOrPath:
// Uses a stack (currentPath) to simulate the traversal.
// Constructs the Eulerian path / circuit by following valid edges.

// --------------------------------------------
// Conditions for Eulerian Path and Circuit
// --------------------------------------------

// Eulerian Circuit (Undirected): All vertices have even degree, and all vertices with nonzero degree are connected.

// Eulerian Circuit (Directed): Every vertex has the same in-degree as out-degree, and all vertices with nonzero degree are strongly connected.

// Eulerian Path (Undirected): Exactly zero or two vertices have an odd degree, and all vertices with nonzero degree are connected.

// Eulerian Path (Directed): Exactly one vertex has (out-degree) - (in-degree) = 1, exactly one vertex has (in-degree) - (out-degree) = 1, and all other vertices have equal in-degree and out-degree, and all vertices with nonzero degree are strongly connected.

// --------------------------------------------
// Hierholzer's Algorithm for Undirected Graph
// --------------------------------------------

class EulerianPathCircuitUndirected {
  private graph: Map<number, number[]>;
  private circuit: number[];

  constructor(edges: number[][]) {
    this.graph = new Map();
    this.circuit = [];
    for (const [u, v] of edges) {
      if (!this.graph.has(u)) this.graph.set(u, []);
      if (!this.graph.has(v)) this.graph.set(v, []);
      this.graph.get(u)!.push(v);
      this.graph.get(v)!.push(u);
    }
  }

  private isValidNextEdge(u: number, v: number): boolean {
    if (this.graph.get(u)!.length === 1) {
      return true;
    }

    let visited = new Set<number>();
    let count1 = this.dfsCount(u, visited);

    this.removeEdge(u, v);
    visited = new Set<number>();
    let count2 = this.dfsCount(u, visited);

    this.addEdge(u, v);

    return count1 <= count2;
  }

  private dfsCount(v: number, visited: Set<number>): number {
    visited.add(v);
    let count = 1;

    for (const adj of this.graph.get(v)!) {
      if (!visited.has(adj)) {
        count += this.dfsCount(adj, visited);
      }
    }
    return count;
  }

  private removeEdge(u: number, v: number): void {
    this.graph.set(
      u,
      this.graph.get(u)!.filter((x) => x !== v)
    );
    this.graph.set(
      v,
      this.graph.get(v)!.filter((x) => x !== u)
    );
  }

  private addEdge(u: number, v: number): void {
    this.graph.get(u)!.push(v);
    this.graph.get(v)!.push(u);
  }

  private findEulerianCircuitOrPath(): void {
    let u = 0;

    for (const [vertex, adjList] of this.graph.entries()) {
      if (adjList.length % 2 !== 0) {
        u = vertex;
        break;
      }
    }

    this.eulerianCircuitOrPathUtil(u);
  }

  private eulerianCircuitOrPathUtil(u: number): void {
    for (let i = 0; i < this.graph.get(u)!.length; i++) {
      const v = this.graph.get(u)![i];
      if (this.isValidNextEdge(u, v)) {
        this.circuit.push(u);
        this.removeEdge(u, v);
        this.eulerianCircuitOrPathUtil(v);
      }
    }
  }

  public getCircuit(): number[] {
    this.findEulerianCircuitOrPath();
    return this.circuit;
  }
}

// Example usage for undirected graph
const edgesUndirected = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 3],
  [3, 4],
  [3, 5],
  [4, 5],
];

const eulerianPathCircuitUndirected = new EulerianPathCircuitUndirected(
  edgesUndirected
);
console.log(eulerianPathCircuitUndirected.getCircuit());

// --------------------------------------------
// Hierholzer's Algorithm for Directed Graph
// --------------------------------------------

class EulerianPathCircuitDirected {
  private graph: Map<number, number[]>;
  private inDegree: Map<number, number>;
  private outDegree: Map<number, number>;
  private circuit: number[];

  constructor(edges: number[][]) {
    this.graph = new Map();
    this.inDegree = new Map();
    this.outDegree = new Map();
    this.circuit = [];
    for (const [u, v] of edges) {
      if (!this.graph.has(u)) this.graph.set(u, []);
      if (!this.graph.has(v)) this.graph.set(v, []);
      this.graph.get(u)!.push(v);
      this.outDegree.set(u, (this.outDegree.get(u) || 0) + 1);
      this.inDegree.set(v, (this.inDegree.get(v) || 0) + 1);
    }
  }

  private findStartNode(): number {
    let startNode = 0;

    for (const [vertex, outD] of this.outDegree.entries()) {
      if (outD - (this.inDegree.get(vertex) || 0) === 1) return vertex;
    }

    for (const [vertex, adjList] of this.graph.entries()) {
      if (adjList.length > 0) {
        startNode = vertex;
      }
    }
    return startNode;
  }

  private findEulerianCircuitOrPath(): void {
    let currentPath: number[] = [];
    let circuit: number[] = [];

    let currentNode = this.findStartNode();
    currentPath.push(currentNode);

    while (currentPath.length > 0) {
      if (this.graph.get(currentNode)!.length > 0) {
        currentPath.push(currentNode);
        const nextNode = this.graph.get(currentNode)!.pop()!;
        currentNode = nextNode;
      } else {
        circuit.push(currentNode);
        currentNode = currentPath.pop()!;
      }
    }

    this.circuit = circuit.reverse();
  }

  public getCircuit(): number[] {
    this.findEulerianCircuitOrPath();
    return this.circuit;
  }
}

// Example usage for directed graph
const edgesDirected = [
  [0, 1],
  [1, 2],
  [2, 0],
  [0, 3],
  [3, 4],
  [4, 0],
];

const eulerianPathCircuitDirected = new EulerianPathCircuitDirected(
  edgesDirected
);
console.log(eulerianPathCircuitDirected.getCircuit());
