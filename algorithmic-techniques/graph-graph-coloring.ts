class Graph {
  private adjList: Map<number, number[]>; // Adjacency list representation of the graph

  constructor() {
    this.adjList = new Map<number, number[]>();
  }

  // Function to add an edge between two vertices
  addEdge(v: number, w: number): void {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
    if (!this.adjList.has(w)) {
      this.adjList.set(w, []);
    }
    this.adjList.get(v)!.push(w);
    this.adjList.get(w)!.push(v);
  }

  performGreedyGraphColoring(): Map<number, number> {
    const vertexToColorMappingMap = new Map<number, number>();
    const vertices = Array.from(this.adjList.keys());

    // Assign colors to vertices one by one
    vertices.forEach((vertex) => {
      let availableColors = new Set<number>(); // Set to keep track
      this.adjList.get(vertex)!.forEach((neighbour) => {
        if (vertexToColorMappingMap.has(neighbour)) {
          availableColors.add(vertexToColorMappingMap.get(neighbour)!);
        }
      });

      // Find the smallest available color
      let color = 0;
      while (availableColors.has(color)) {
        color++;
      }
      vertexToColorMappingMap.set(vertex, color);
    });
    return vertexToColorMappingMap;
  }
}

// Example

const g = new Graph();
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);

const colorMap = g.performGreedyGraphColoring();
console.log("Vertex -> Color mapping:", colorMap);
