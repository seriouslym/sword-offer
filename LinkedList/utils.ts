export class LinkedListNode<T> {
  value: T
  next: LinkedListNode<T> | null
  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

export function append<T>(head: LinkedListNode<T> | null, val: T) {
    const dummyNode = new LinkedListNode<T>(null as any)
    dummyNode.next = head
    let current = dummyNode
    while (current.next !== null) {
        current = current.next
    }
    current.next = new LinkedListNode(val)
    return dummyNode.next
}

export function newLinkedListFromArray<T>(arr: T[]): LinkedListNode<T> | null {
    let head: LinkedListNode<T> | null = null
    for (let i = 0; i < arr.length; i++) {
      head = append(head, arr[i])
    }
    return head
}


export function printLinkedList<T>(head: LinkedListNode<T> | null) {
    const vals: T[] = []
    let current = head
    while (current !== null) {
        vals.push(current.value)
        current = current.next
    }
    console.log(vals.join(' -> '))
}
