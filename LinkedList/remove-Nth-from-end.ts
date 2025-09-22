/**
 * 删除列表倒数第n个节点
 * lc19
 */
import {LinkedListNode, newLinkedListFromArray, printLinkedList} from "./utils";

const removeNthFromEnd = (head: LinkedListNode<number> | null, n: number) => {
    const dummyNode = new LinkedListNode<number>(0)
    dummyNode.next = head
    let fast: LinkedListNode<number> | null = dummyNode, slow: LinkedListNode<number> | null = dummyNode
    for (let i = 0; i < n + 1; i++) {
        if (fast === null) {
            return null
        }
        fast = fast.next
    }
    while (fast !== null && slow !== null) {
        fast = fast.next
        slow = slow.next
    }
    if (slow && slow.next) {
        slow.next = slow.next.next
    }
    return dummyNode.next
}


const head = newLinkedListFromArray([1,2,3,4,5])
printLinkedList(head)
printLinkedList(removeNthFromEnd(head, 1))
