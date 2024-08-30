// --------------------------------------------
// Stable Marriage
// aka Gale-Shapley algorithm

// It uses a greedy approach but is also at a higher level a Matching Algorithm! The goal is to find a stable matching between two equally sized sets, where no pair would rather be matched with each other than their current partners.
// --------------------------------------------

type Preferences = number[][];

function stableMarriage(
  menPrefs: Preferences,
  womenPrefs: Preferences
): [number[], number[]] {
  const n = menPrefs.length;

  // Initialize data structures
  const freeMen: number[] = Array.from({ length: n }, (_, i) => i);
  const menPartner: number[] = Array(n).fill(-1);
  const womenPartner: number[] = Array(n).fill(-1);
  const womenRank: Array<{ [key: number]: number }> = womenPrefs.map(
    (prefs) => {
      const rank: { [key: number]: number } = {};
      prefs.forEach((man, index) => {
        rank[man] = index;
      });
      return rank;
    }
  );
  const menNextProposal: number[] = Array(n).fill(0);

  // While there are free men
  while (freeMen.length > 0) {
    const man = freeMen.shift()!;
    const woman = menPrefs[man][menNextProposal[man]];
    menNextProposal[man] += 1;

    if (womenPartner[woman] === -1) {
      // Woman is free, engage with the man
      womenPartner[woman] = man;
      menPartner[man] = woman;
    } else {
      const currentPartner = womenPartner[woman];
      if (womenRank[woman][man] < womenRank[woman][currentPartner]) {
        // Woman prefers the new man, switch partners
        womenPartner[woman] = man;
        menPartner[man] = woman;
        freeMen.push(currentPartner);
        menPartner[currentPartner] = -1;
      } else {
        // Woman prefers current partner, reject the new man
        freeMen.push(man);
      }
    }
  }

  return [menPartner, womenPartner];
}

// Example

const menPrefs: Preferences = [
  [0, 1, 2],
  [2, 1, 0],
  [1, 0, 2],
];

const womenPrefs: Preferences = [
  [2, 0, 1],
  [0, 1, 2],
  [1, 2, 0],
];

const [menPartner, womenPartner] = stableMarriage(menPrefs, womenPrefs);
console.log("Men's partners:", menPartner);
console.log("Women's partners:", womenPartner);
