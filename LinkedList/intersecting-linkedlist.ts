import {LinkedListNode, newLinkedListFromArray} from "./utils";

/**
 * 两个链表的第1个重合节点
 * lc 160
 * 方法1：分别统计两个列表的长度，快指针比慢指针多走两个列表长度之差的距离，然后同时走相遇时就是第一个重合节点
 * 方法2：人为构造环，找到环形链表中的入口节点
 */
const getIntersectionNode = (headA: LinkedListNode<number> | null, headB: LinkedListNode<number> | null) => {
    const lenA = getLinkedListLength(headA), lenB = getLinkedListLength(headB)
    let curA = headA, curB = headB
    if (lenA > lenB) {
        let cnt = lenA - lenB
        while (cnt && curA !== null) {
            curA = curA.next
            cnt--
        }
    } else {
        let cnt = lenB - lenA
        while (cnt && curB !== null) {
            curB = curB.next
            cnt--
        }
    }
    while (curA && curB) {
        curA = curA.next
        curB = curB.next
        if (curA === curB) {
            return curA
        }
    }
    return null
}

const getLinkedListLength = (head: LinkedListNode<number> | null) => {
    let length = 0
    let cur = head
    while (cur !== null) {
        cur = cur.next
        length++
    }
    return length
}


/**
 * 1->2->3->4->5
 *    6->7->4->5
 */
const head = new LinkedListNode(1)
const node2 = new LinkedListNode(2)
const node3 = new LinkedListNode(3)
const node4 = new LinkedListNode(4)
const node5 = new LinkedListNode(5)
const node6 = new LinkedListNode(6)
const node7 = new LinkedListNode(6)

head.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node6.next = node7
node7.next = node4


console.log(getIntersectionNode(head, node6));
console.log(getIntersectionNode(head, null));

