class AStarNode {
  constructor(
    public position: [number, number],
    public g: number = 0,
    public h: number = 0,
    public f: number = 0,
    public parent: AStarNode | null = null
  ) {}
}

class PriorityQueue {
  heap: AStarNode[];

  constructor() {
    this.heap = [];
  }

  public push(node: AStarNode) {
    this.heap.push(node);
    this.heap.sort((a, b) => a.f - b.f);
  }

  public pop(): AStarNode | undefined {
    return this.heap.shift();
  }

  public isEmpty(): boolean {
    return this.heap.length === 0;
  }
}

function aStar(
  grid: number[][],
  start: [number, number],
  goal: [number, number]
): AStarNode | null {
  const openList = new PriorityQueue();
  const closedList: Set<string> = new Set();

  const startNode = new AStarNode(
    start,
    0,
    heuristic(start, goal),
    heuristic(start, goal)
  );
  openList.push(startNode);

  while (!openList.isEmpty()) {
    const currentNode = openList.pop();
    if (!currentNode) {
      break;
    }

    if (
      currentNode.position[0] === goal[0] &&
      currentNode.position[1] === goal[1]
    ) {
      return currentNode;
    }

    closedList.add(currentNode.position.toString());

    const neighbors = getNeighbors(currentNode.position, grid);
    for (const neighbor of neighbors) {
      if (closedList.has(neighbor.toString())) {
        continue;
      }

      const gScore = currentNode.g + 1;
      const hScore = heuristic(neighbor, goal);
      const neighborNode = new AStarNode(
        neighbor,
        gScore,
        hScore,
        gScore + hScore,
        currentNode
      );

      const existingNode = openList.heap.find(
        (node) => node.position.toString() === neighbor.toString()
      );
      if (existingNode) {
        if (gScore < existingNode.g) {
          existingNode.g = gScore;
          existingNode.f = gScore + hScore;
          existingNode.parent = currentNode;
          openList.heap.sort((a, b) => a.f - b.f);
        }
      } else {
        openList.push(neighborNode);
      }
    }
  }

  return null;
}

function heuristic(pos: [number, number], goal: [number, number]): number {
  return Math.abs(pos[0] - goal[0]) + Math.abs(pos[1] - goal[1]);
}

function getNeighbors(
  pos: [number, number],
  grid: number[][]
): [number, number][] {
  const [x, y] = pos;
  const neighbors: [number, number][] = [];
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (const [dx, dy] of directions) {
    const newX = x + dx;
    const newY = y + dy;
    if (
      newX >= 0 &&
      newX < grid.length &&
      newY >= 0 &&
      newY < grid[0].length &&
      grid[newX][newY] === 0
    ) {
      neighbors.push([newX, newY]);
    }
  }

  return neighbors;
}

// Example:

const grid = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

const aStarStart: [number, number] = [0, 0];
const goal: [number, number] = [4, 4];

const pathNode = aStar(grid, aStarStart, goal);

if (pathNode) {
  const path: [number, number][] = [];
  let currentNode: AStarNode | null = pathNode;
  while (currentNode) {
    path.push(currentNode.position);
    currentNode = currentNode.parent;
  }
  path.reverse();
  console.log("Path:", path);
} else {
  console.log("No path found.");
}
