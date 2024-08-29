// Huffman coding is used for lossless data compression.It assigns variable - length codes to input characters, with shorter codes assigned to more frequent characters.

class HuffmanNode {
  char: string;
  freq: number;
  left: HuffmanNode | null;
  right: HuffmanNode | null;

  constructor(
    char: string,
    freq: number,
    left: HuffmanNode | null = null,
    right: HuffmanNode | null = null
  ) {
    this.char = char;
    this.freq = freq;
    this.left = left;
    this.right = right;
  }
}

function huffmanCoding(
  chars: string[],
  freqs: number[]
): { [key: string]: string } {
  const nodes: HuffmanNode[] = chars.map(
    (char, i) => new HuffmanNode(char, freqs[i])
  );
  while (nodes.length > 1) {
    nodes.sort((a, b) => a.freq - b.freq);
    const left = nodes.shift()!;
    const right = nodes.shift()!;
    const newNode = new HuffmanNode("", left.freq + right.freq, left, right);
    nodes.push(newNode);
  }

  const root = nodes[0];
  const codes: { [key: string]: string } = {};
  generateCodes(root, "");

  function generateCodes(node: HuffmanNode, code: string) {
    if (!node.left && !node.right) {
      codes[node.char] = code;
      return;
    }
    if (node.left) generateCodes(node.left, code + "0");
    if (node.right) generateCodes(node.right, code + "1");
  }
  return codes;
}

// Example usage
const chars = ["a", "b", "c", "d", "e", "f"];
const freqs = [5, 9, 12, 13, 16, 45];
console.log(huffmanCoding(chars, freqs));
// Output: { f: '0', c: '100', d: '101', a: '1100', b: '1101', e: '111' }
