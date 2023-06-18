import { SinglyLinkedList } from "./SinglyLinkedList/singlyLinkedList";

let list = new SinglyLinkedList<number>();
console.log(list.isEmpty());
console.log(list.append(0));
console.log(list.append(1));
console.log(list.append(2));
console.log(list.prepend(-1));
list.printList();
list.printTraverse();
