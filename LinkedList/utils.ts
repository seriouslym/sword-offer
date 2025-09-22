export class LinkedListNode<T> {
  value: T
  next: LinkedListNode<T> | null
  constructor(value: T) {
    this.value = value
    this.next = null
  }
}


/**
 * 添加哨兵节点 使得添加或删除节点不用单独处理删除的是头节点或添加时头节点为空等情况
 * @param head
 * @param val
 */
export function append<T>(head: LinkedListNode<T> | null, val: T) {
    const dummyNode = new LinkedListNode<T>(null as T)
    dummyNode.next = head
    let current = dummyNode
    while (current.next !== null) {
        current = current.next
    }
    current.next = new LinkedListNode(val)
    return dummyNode.next
}

export function del<T>(head: LinkedListNode<T> | null, val: T) {
    const dummyNode = new LinkedListNode<T>(null as T)
    dummyNode.next = head
    let cur = dummyNode
    while (cur.next !== null ) {
        if (cur.next.value === val) {
            cur.next = cur.next?.next || null
            break
        }
        cur = cur.next
    }
    return head
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
