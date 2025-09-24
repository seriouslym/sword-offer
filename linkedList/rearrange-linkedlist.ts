import {LinkedListNode, newLinkedListFromArray, printLinkedList} from "./utils";
import reverseList from "./reverse-linkedlist";

/**
 * 重排链表
 * lc 143
 * 给定⼀个链表，链表中节点的顺序是L0→L1→L2→…→Ln-1→Ln，请问如何重排链表使节点的顺序变成L0→Ln→L1→Ln-1→L2→Ln-2→…？
 */
const reorderList = (head: LinkedListNode<number> | null) => {
    let fast = head, slow = head
    while(fast && fast.next && slow) {
        fast = fast.next.next
        slow = slow.next
    }
    let h1 = head, h2 = reverseList(slow?.next || null)
    let c1 = h1, c2 = h2
    if (slow) {
        slow.next = null
    }
    while (c1 && c2) {
        let n1 = c1.next, n2 = c2.next
        c1.next = c2
        c2.next = n1
        c1 = n1
        c2 = n2
    }
    return h1
}


const head = newLinkedListFromArray([1,2,3,4,5])
printLinkedList(head)
printLinkedList(reorderList(head))

