class Node {
  value: any;
  next: Node | null;
  prev: Node | null;
  constructor(value: any, prev: Node | null, next: Node | null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
