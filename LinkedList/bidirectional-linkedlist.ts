/**
 * 展平多层级双向链表
 * lc430
 */

class BidirectionalLinkedListNode<T> {
    value: T;
    next: BidirectionalLinkedListNode<T> | null;
    pre: BidirectionalLinkedListNode<T> | null;
    child: BidirectionalLinkedListNode<T> | null;
    constructor(val: T) {
        this.value = val
        this.next = null
        this.pre = null
        this.child = null
    }
}
const flatten = (head: BidirectionalLinkedListNode<number> | null) => {
    let cur = head
    while (cur !== null) {
        if (cur.child) {
            const nextNode = cur.next
            cur.next = flatten(cur.child)
            cur.child.pre = cur
            // 找到子链表的尾节点
            let curChild = cur.child
            while (curChild.next) {
                curChild = curChild.next
            }
            curChild.next = nextNode
            if (nextNode) {
                nextNode.pre = curChild
            }
            cur = nextNode
        } else {
            cur = cur.next
        }
    }
    return head
}

const printBiLinkedList = (head: BidirectionalLinkedListNode<number> | null) => {
    const l: number[] = [], rl: number[] = []
    let cur = head
    while (cur && cur.next) {
        l.push(cur.value)
        cur = cur.next
    }
    if (cur) {
        l.push(cur.value)
    }
    while (cur && cur.pre) {
        rl.push(cur.value)
        cur = cur.pre
    }
    if (cur) {
        rl.push(cur.value)
    }
    console.log(l.join('->'))
    console.log(rl.reverse().join('<-'))
}



const mockData = () => {
    // 第一个双向链表
    const node1 = new BidirectionalLinkedListNode(1)
    const node2 = new BidirectionalLinkedListNode(2)
    const node3 = new BidirectionalLinkedListNode(3)
    const node4 = new BidirectionalLinkedListNode(4)
    const node5 = new BidirectionalLinkedListNode(5)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    node5.pre = node4
    node4.pre = node3
    node3.pre = node2
    node2.pre = node1
    // 第二个双向链表
    const node21 = new BidirectionalLinkedListNode(6)
    const node22 = new BidirectionalLinkedListNode(7)
    const node23 = new BidirectionalLinkedListNode(8)
    node21.next = node22
    node22.next = node23
    node23.pre = node22
    node22.pre = node21
    // 合成带子链表
    node3.child = node21
    return node1
}


printBiLinkedList(flatten(mockData()))
