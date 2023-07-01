interface Node<T> {
  data: T;
  next: Node<T> | null;
}

export class SinglyLinkedList<T> {
  constructor(
    private length: number = 0,
    private head: Node<T> = null,
    private tail: Node<T> = null
  ) {}

  public isEmpty(): boolean {
    return this.length === 0 ? true : false;
  }

  public prepend(data: T): void {
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

  public append(data: T): void {
    let node: Node<T> = {
      data,
      next: null,
    };

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }

  private traverse(): Node<T> {
    let p = this.head;
    while (p.next) {
      p = p.next;
    }
    return p;
  }

  public printTraverse(): void {
    let p = this.head;
    console.log(p.data);
    while (p.next) {
      p = p.next;
      console.log(p.data);
    }
  }

  public printHead(): void {
    console.log(this.head);
  }

  public getHead(): Node<T> {
    return this.head;
  }

  public getTail(): Node<T> {
    return this.tail;
  }

  public size(): number {
    return this.length;
  }
  public printList(): void {
    console.log(this);
  }
}
