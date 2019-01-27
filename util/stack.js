class Stack {
  constructor() {
    this.stack = [];
  }

  get size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(...element) {
    this.stack.push(...element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.size - 1];
  }

  clear() {
    this.stack = [];
  }
}

export default Stack;
