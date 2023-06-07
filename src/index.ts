import DoublyLinkedlist from "./LinkedList.js";

const list = new DoublyLinkedlist();
list.addFirst(1);
list.addFirst(2);
// list.removeFirst();
list.addLast(4);
list.addLast(5);

list.removeAt(3);
