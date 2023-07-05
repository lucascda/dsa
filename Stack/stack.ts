import { Node } from "../Node/node";

export class Stack<T> {
  constructor(private head: Node<T> = null, private length = 0) {}

  public isEmpty(): boolean {
    return this.length === 0 ? true : false;
  }

  public push(data: T): void {
    let node: Node<T> = {
      data,
      next: null,
    };
    if (this.isEmpty()) {
      this.head = node;
      this.length++;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }

  public pop(): Node<T> | null {
    if (this.isEmpty()) {
      return null;
    } else {
      // size = 1
      if (this.head.next === null) {
        const temp = this.head;
        this.head = null;
        this.length--;
        return temp;
      } else {
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        return temp;
      }
    }
  }
}
