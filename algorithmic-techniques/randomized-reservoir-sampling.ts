function reservoirSampling(stream: number[], k: number): number[] {
  const reservoir: number[] = new Array(k);

  // Fill the reservoir with the first k elements from the stream
  for (let i = 0; i < k; i++) {
    reservoir[i] = stream[i];
  }

  // Iterate through the rest of the stream
  for (let i = k; i < stream.length; i++) {
    // Generate a random index j in [0, i]
    const j = Math.floor(Math.random() * (i + 1));

    // If j is within the range of the reservoir, replace reservoir[j] with stream[i]
    if (j < k) {
      reservoir[j] = stream[i];
    }
  }

  return reservoir;
}

// Example usage:
const stream = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 3;
const sampledItems = reservoirSampling(stream, k);
console.log("Sampled items:", sampledItems);
