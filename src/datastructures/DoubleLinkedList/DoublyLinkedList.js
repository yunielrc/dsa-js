const DoubleLinkedListNode = require('./DoubleLinkedListNode');

module.exports = class DoubleLinkedList {
  /**
   * @type {DoubleLinkedListNode}
   */
  #head = null

  /**
   * @type {DoubleLinkedListNode}
   */
  #tail = null

  /**
   * @type {number}
   */
  #size = 0

  clear() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  isEmpty = () => this.size === 0

  get size() {
    return this.#size;
  }

  addFirst(data) {
    const newNode = new DoubleLinkedListNode(data, null, this.#head);
    if (this.isEmpty()) this.#tail = newNode; else this.#head.prev = newNode;
    this.#head = newNode;
    this.#size++;
    return this;
  }

  add(data) {
    const newNode = new DoubleLinkedListNode(data, this.#tail, null);
    if (this.isEmpty()) this.#head = newNode; else this.#tail.next = newNode;
    this.#tail = newNode;
    this.#size++;
    return this;
  }

  addAt(data, pos) {
    if (pos < 0 || pos > this.size) throw new RangeError('Illegal Index');

    if (pos === 0) return this.addFirst(data);
    if (pos === this.size) return this.add(data);

    let trav = this.#head;

    for (let i = 1; i <= pos; i++) {
      trav = trav.next;
    }
    const newNode = new DoubleLinkedListNode(data, trav.prev, trav);
    trav.prev.next = newNode;
    trav.prev = newNode;

    return this;
  }

  removeFirst() {
    if (this.isEmpty()) return null;

    const { data } = this.#head;

    if (this.size === 1) {
      this.clear();
      return data;
    }
    this.#head = this.#head.next;
    this.#head.prev = null;
    this.#size--;
    return data;
  }

  removeLast() {
    if (this.isEmpty()) return null;

    const { data } = this.#tail;

    if (this.size === 1) {
      this.clear();
      return data;
    }
    this.#tail = this.#tail.prev;
    this.#tail.next = null;
    this.#size--;
    return data;
  }

  #remove(node) {
    if (!node) throw new Error('Invalid Parameter');

    switch (node) {
      case this.#head:
        return this.removeFirst();
      case this.#tail:
        return this.removeLast();
      default:
        // eslint-disable-next-line no-param-reassign
        node.prev.next = node.next;
        // eslint-disable-next-line no-param-reassign
        node.next.prev = node.prev;
        this.#size--;
        return node.data;
    }
  }

  removeAt(pos) {
    if (pos < 0 || pos >= this.size) throw new RangeError('Illegal Index');

    if (pos === 0) return this.removeFirst();
    if (pos === this.size - 1) return this.removeLast();

    let trav = this.#head;
    for (let i = 1; i <= pos; i++) {
      trav = trav.next;
    }
    return this.#remove(trav);
  }

  toString() {
    let trav = this.#head;
    let str = '[';

    while (trav) {
      str += JSON.stringify(trav.data);
      trav = trav.next;
      if (trav) str += ',';
    }
    str += ']';
    return str;
  }

  peekFirst() {
    if (this.isEmpty()) throw new Error('Empty list');
    return this.#head.data;
  }

  peekLast() {
    if (this.isEmpty()) throw new Error('Empty list');
    return this.#tail.data;
  }

  indexOf(data) {
    for (let i = 0, trav = this.#head; trav !== null; trav = trav.next, i++) {
      if (trav.data === data) {
        return i;
      }
    }
    return -1;
  }

  remove(data) {
    for (let trav = this.#head; trav !== null; trav = trav.next) {
      if (trav.data === data) {
        this.#remove(trav);
        return true;
      }
    }
    return false;
  }

  contains = (data) => this.indexOf(data) !== -1
};
