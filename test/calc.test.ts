import { LinkedList } from '../src/linkedlist';

describe('Singly Linked List', () => {
  let linkedList: LinkedList<number>;
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('1. Push front', () => {
    prePushFront(linkedList);
    expect(linkedList._count).toBe(3);
  });

  it('2. Pop front', () => {
    prePushFront(linkedList);
    expect(linkedList.pop()).toBe(2);
    expect(linkedList.pop()).toBe(1);
    expect(linkedList.pop()).toBe(0);
    expect(linkedList._count).toBe(0);
  });

  it('3. Insert at', () => {
    prePushFront(linkedList);
    linkedList.insert(7, 0);
    expect(linkedList.print()).toBe("7 -> 2 -> 1 -> 0");
    expect(linkedList.insert(10, 7)).toBeFalsy();
    linkedList.insert(15, 4);
    expect(linkedList.print()).toBe("7 -> 2 -> 1 -> 0 -> 15");
    linkedList.insert(12, 3);
    expect(linkedList.print()).toBe("7 -> 2 -> 1 -> 12 -> 0 -> 15");
  });

  
  it('4. Remove at', () => {
    prePushFront(linkedList);
    expect(linkedList.remove(7)).toBeNull();
    expect(linkedList.remove(-1)).toBeNull();
    expect(linkedList.remove(0)).toBe(2);
    expect(linkedList.remove(1)).toBe(0);
    expect(linkedList.print()).toBe("1");
    expect(linkedList.remove(0)).toBe(1);
    expect(linkedList.print()).toBe("");
  });

  it('5. Reverse', () => {
    prePushFront(linkedList);
    expect(linkedList.reverse().print()).toBe("0 -> 1 -> 2");
  });

  function prePushFront(linkedList: LinkedList<number>) {
    linkedList.push(0);
    linkedList.push(1);
    linkedList.push(2);
  }
});