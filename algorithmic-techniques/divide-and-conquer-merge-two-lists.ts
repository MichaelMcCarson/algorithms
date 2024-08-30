class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Create a dummy node to act as the start of the merged list
  let dummy = new ListNode();
  let current = dummy;

  // Traverse both lists
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Attach the remaining nodes, if any
  current.next = list1 !== null ? list1 : list2;

  // Return the merged list starting from the next node of dummy
  return dummy.next;
}

// Example usage:
const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

const mergedList = mergeTwoLists(list1, list2);

// Print merged list
let current = mergedList;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}
