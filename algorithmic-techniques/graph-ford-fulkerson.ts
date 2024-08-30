class MaxFlow {
  private graph: number[][];
  protected residualGraph: number[][];
  protected parent: number[];
  protected vertexCount: number;

  constructor(graph: number[][]) {
    this.graph = graph;
    this.vertexCount = graph.length;
    this.residualGraph = Array.from({ length: this.vertexCount }, (_, i) =>
      graph[i].slice()
    );
    this.parent = new Array(this.vertexCount).fill(-1);
  }

  private bfs(source: number, sink: number): boolean {
    let visited = new Array(this.vertexCount).fill(false);
    let queue: number[] = [];
    queue.push(source);
    visited[source] = true;
    this.parent.fill(-1);

    while (queue.length > 0) {
      let u = queue.shift()!;

      for (let v = 0; v < this.vertexCount; v++) {
        if (!visited[v] && this.residualGraph[u][v] > 0) {
          queue.push(v);
          visited[v] = true;
          this.parent[v] = u;

          if (v === sink) {
            return true;
          }
        }
      }
    }
    return false;
  }

  public fordFulkerson(source: number, sink: number): number {
    let maxFlow = 0;

    // O(VE^2) time complexity due to the use of BFS
    while (this.bfs(source, sink)) {
      let pathFlow = Number.MAX_SAFE_INTEGER;

      for (let v = sink; v !== source; v = this.parent[v]) {
        let u = this.parent[v];
        pathFlow = Math.min(pathFlow, this.residualGraph[u][v]);
      }

      for (let v = sink; v !== source; v = this.parent[v]) {
        let u = this.parent[v];
        this.residualGraph[u][v] -= pathFlow;
        this.residualGraph[v][u] += pathFlow;
      }

      maxFlow += pathFlow;
    }
    return maxFlow;
  }
}

// Example Usage
const graph = [
  [0, 16, 13, 0, 0, 0],
  [0, 0, 10, 12, 0, 0],
  [0, 4, 0, 0, 14, 0],
  [0, 0, 9, 0, 0, 20],
  [0, 0, 0, 7, 0, 4],
  [0, 0, 0, 0, 0, 0],
];

const maxFlowBFS = new MaxFlow(graph);
console.log(
  "The maximum possible flow using Edmonds-Karp is " +
    maxFlowBFS.fordFulkerson(0, 5)
);
