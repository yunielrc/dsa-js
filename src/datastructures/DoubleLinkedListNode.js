module.exports = class DoubleLinkedListNode {
  /**
   * @type {object}
   */
  data

  /**
   * @type {DoubleLinkedListNode}
   */
  prev

  /**
   * @type {DoubleLinkedListNode}
   */
  next

  /**
   *
   * @param {object} data
   * @param {DoubleLinkeListNode} prev
   * @param {DoubleLinkeListNode} next
   */
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
};
