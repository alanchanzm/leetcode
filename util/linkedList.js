import ListNode from './listNode';

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  get head() {
    return this.head;
  }

  isEmpty() {
    return this.size === 0;
  }

  append(val) {
    const node = new ListNode(val);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length += 1;
  }

  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return undefined;
    }

    let current = this.head;
    if (position === 0) {
      this.head = current.next;
    } else {
      let previous = current;
      let index = 0;
      while (index < position) {
        previous = current;
        current = current.next;
        index += 1;
      }
      previous.next = current.next;
    }
    this.length -= 1;
    return current.val;
  }
}

export default LinkedList;
