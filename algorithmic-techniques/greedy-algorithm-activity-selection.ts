function activitySelection(start: number[], end: number[]): number[] {
  const activities = start.map((s, i) => ({ start: s, end: end[i], index: i }));
  activities.sort((a, b) => a.end - b.end);

  const selected: number[] = [];
  let lastEndTime = 0;

  for (const activity of activities) {
    if (activity.start >= lastEndTime) {
      selected.push(activity.index);
      lastEndTime = activity.end;
    }
  }

  return selected;
}

// Example usage
const start = [1, 3, 0, 5, 8, 5];
const end = [2, 4, 6, 7, 9, 9];
console.log(activitySelection(start, end)); // Output: [0, 1, 3, 4]
