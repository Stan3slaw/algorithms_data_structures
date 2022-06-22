class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    while (this.head && this.head.value === value) {
      deletedNode === this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail && this.tail.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  edit(value, newValue) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (value !== undefined && newValue !== undefined && currentNode.value === value) {
        currentNode.value = newValue;
        return;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  listLenght() {
    if (!this.head) {
      return 0;
    }

    let currentNode = this.head;

    let length = 0;
    while (currentNode !== null) {
      length++;
      currentNode = currentNode.next;
    }
    return length;
  }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(5);
linkedList.append(22);
linkedList.append(3);
linkedList.append(17);
linkedList.append(11);

console.log(linkedList);
