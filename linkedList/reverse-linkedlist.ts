/**
 * 反转链表
 * lc206
 */
import {LinkedListNode, newLinkedListFromArray, printLinkedList} from "./utils";

const reverseList = (head: LinkedListNode<number> | null) => {
    let pre: LinkedListNode<number> | null = null, cur = head
    while (cur !== null) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}

const head = newLinkedListFromArray([1, 2, 3, 4, 5])
printLinkedList(head)
printLinkedList(reverseList(head))

export default reverseList
