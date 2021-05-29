import { Node } from './node';

export class LinkedList<T> {
  public _head: Node<T>;
  public _count: number;

  get head() {
    return this._head;
  }

  //Initialize an empty linked list upon creation
  constructor() {
    this._head = null;
    this._count = 0;
  }

  //Pushes in the front
  push(value: T) {
    this._count++;
    let node = new Node(value);
    node.next = this._head;
    this._head = node;
  }

  //Pops the item in the front
  pop(): T {
    if (!this._head) {
      return undefined;
    }

    this._count--;
    let val = this._head.val;
    this._head = this._head.next;

    return val;
  }

  //Push at the end of the linked list
  pushBack(value: T) {
    let newNode = new Node(value);
    this._count++;
    if (!this._head) {
      this._head = newNode;
      return this;
    }
    let curr = this._head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  //Pops the item at the end of the linked list
  popBack(): T {
    if (!this._head) {
      return undefined;
    }
    if (this._count === 1) {
      let val = this._head.val;
      this._head = null;
      this._count--;
      return val;
    }
    let curr = this._head;
    while (curr.next.next) {
      curr = curr.next;
    }
    let val = curr.next.val;
    curr.next = null;
    this._count--;
    return val;
  }

  insert(value: T, index: number): boolean {
    if (index < 0 || index > this._count) return false;
    if (index === 0) {
        this.push(value);
        return true;
    }
    else if (index === this._count) {
        this.pushBack(value); 
        return true;
    }
    else {
      let currentNode = this._head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      const newNode = new Node(value, null);
      const tempNode = currentNode.next;
      currentNode.next = newNode;
      newNode.next = tempNode;
      this._count++;
      return true;
    }
  }

  remove(index: number) : T | null{
    if (index < 0 || index >= this._count) return null;
    if (index === 0) return this.pop();
    else if (index === this._count - 1) return this.popBack();
    else {
      let preViousNode = null;
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        preViousNode = currentNode;
        currentNode = currentNode.next;
      }
      const data = currentNode.val;
      preViousNode.next = currentNode.next;
      this._count--;
      return data;
    }
  }

  reverse(): LinkedList<T> {
    let curr = this._head;
    let prev = null;
    let next = null;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this._head = prev;
    return this;
  }

  print(): string {
    let arr = [];
    let curr = this._head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr.join(' -> ');
  }

}