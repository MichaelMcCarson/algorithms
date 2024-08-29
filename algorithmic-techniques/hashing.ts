// --------------------------------------------
// Hashing
// --------------------------------------------

class HashTable {
  private table: [string, any][][];
  private size: number;

  constructor(size: number = 50) {
    this.size = size;
    this.table = new Array(size);
  }

  private hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash) % this.size;
  }

  set(key: string, value: any): void {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
  }

  get(key: string): any {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
    return undefined;
  }

  remove(key: string): boolean {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }

  display(): void {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}
const hashTable = new HashTable();
// Insert key-value pairs
hashTable.set("name", "John");
hashTable.set("age", 30);
hashTable.set("city", "New York");
// Retrieve values
console.log(hashTable.get("name")); // Output: John
console.log(hashTable.get("age")); // Output: 30
console.log(hashTable.get("city")); // Output: New York
// Remove a key
hashTable.remove("age");
console.log(hashTable.get("age")); // Output: undefined
// Display the hash table
hashTable.display();
