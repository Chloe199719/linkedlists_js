class NodeLinked<T> {
  value: T | null;
  next: NodeLinked<T> | null;
  prev: NodeLinked<T> | null;
  constructor(
    value: any,
    prev: NodeLinked<T> | null,
    next: NodeLinked<T> | null
  ) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export default class DoublyLinkedlist<T> {
  head: NodeLinked<T> | null;
  tail: NodeLinked<T> | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  public clear() {
    let trav = this.head;
    while (trav != null) {
      const next = trav.next;
      trav.next = trav.prev = null;
      trav.value = null;
      trav = next;
    }
  }
  public size(): number {
    return this.length;
  }
  public isEmpty(): boolean {
    return this.length === 0;
  }

  public addFirst(value: T) {
    if (this.isEmpty()) {
      this.head = this.tail = new NodeLinked<T>(value, null, null);
    } else {
      this.head!.prev = new NodeLinked<T>(value, null, this.head);
      this.head = this.head!.prev;
    }
    this.length++;
  }
  public addLast(value: T) {
    if (this.isEmpty()) {
      this.head = this.tail = new NodeLinked<T>(value, null, null);
    } else {
      this.tail!.next = new NodeLinked<T>(value, this.tail, null);
      this.tail = this.tail!.next;
    }
    this.length++;
  }
  public peekFirst(): T | void {
    if (this.isEmpty()) throw new Error("Empty list");
    return this.head!.value!;
  }
  public peekLast(): T | void {
    if (this.isEmpty()) throw new Error("Empty list");
    return this.tail!.value!;
  }
  public removeFirst(): T | void {
    if (this.isEmpty()) throw new Error("Empty list");
    const value = this.head!.value!;
    this.head = this.head!.next;
    this.length--;
    if (this.isEmpty()) this.tail = null;
    else this.head!.prev = null;
    return value;
  }
  public remove(node: NodeLinked<T>): T | void {
    if (node.prev === null) return this.removeFirst();
    if (node.next === null) return this.removeLast();
    node.next.prev = node.prev;
    node.prev.next = node.next;
    const value = node.value;
    node.value = null;
    node.prev = node.next = null;
    this.length--;
    return value!;
  }
  public removeLast(): T | void {
    if (this.isEmpty()) throw new Error("Empty list");
    const value = this.tail!.value!;
    this.tail = this.tail!.prev;
    this.length--;
    if (this.isEmpty()) this.head = null;
    else this.tail!.next = null;
    return value;
  }
  public removeAt(index: number): T | void {
    if (index < 0 || index >= this.length) throw new Error("Invalid index");
    let i: number;
    let trav: NodeLinked<T>;
    if (index < this.length / 2) {
      for (i = 0, trav = this.head!; i !== index; i++) {
        trav = trav.next!;
      }
    } else {
      for (i = this.length - 1, trav = this.tail!; i !== index; i--) {
        trav = trav.prev!;
      }
    }
    return this.remove(trav);
  }
  public indexOf(value: T): number {
    let index = 0;
    let trav = this.head;
    while (trav != null) {
      if (trav.value === value) return index;
      index++;
      trav = trav.next;
    }
    return -1;
  }
  public contains(value: T): boolean {
    return this.indexOf(value) !== -1;
  }
  public toString(): string {
    let trav = this.head;
    let str = "[";
    while (trav != null) {
      str += trav.value + " <=> ";
      trav = trav.next;
    }
    str += "]";
    return str;
  }
}
