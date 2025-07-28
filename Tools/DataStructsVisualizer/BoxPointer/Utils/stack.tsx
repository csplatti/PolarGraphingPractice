class Stack {
  stack: string[];

  constructor() {
    this.stack = [];
  }

  public push(element: string) {
    this.stack.push(element);
  }

  public pop() {
    return this.stack.pop();
  }
}

export { Stack };
