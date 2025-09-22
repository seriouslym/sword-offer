import {LinkedListNode} from "./utils";

/**
 * 环形列表
 * lc141
 */
const hasCircle = (head: LinkedListNode<number> | null) => {
    let fast = head, slow = head
    while (fast !== null && fast.next !== null && slow !== null) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            return true
        }
    }
    return false
}


/**
 * 找到成环链表的入口节点
 * lc142 
 */
const detectCycle = (head: LinkedListNode<number> | null) => {
    let fast = head, slow = head
    while (fast !== null && fast.next !== null && slow !== null) {
        fast = fast.next.next
        slow = slow.next
        // 能够停留在环入口处的指针走过的路程一定满足 a + n * m 其中a是除环之外的长度，m是环长
        // 相遇时 快指针走了2k路程，慢指针走了k路程，多的k就是n倍的环长
        // 此时慢指针已经满足了n * m的条件，因此只需要在多走a步就可以走到入口处
        // 在重置一个指针从head和slow同时开始走，走a步一定会相遇在入口处
        if (fast === slow) {
            let tmp = head
            while (tmp !== null && slow !== null && tmp !== slow) {
                tmp = tmp.next
                slow = slow.next
            }
            return slow
        }
    }
    return head
}



const mockData = () => {
    /**
     * 1->2->3->4->5
     *       |     ^
     *       |_____|
     */
    const node1 = new LinkedListNode(1)
    const node2 = new LinkedListNode(2)
    const node3 = new LinkedListNode(3)
    const node4 = new LinkedListNode(4)
    const node5 = new LinkedListNode(5)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    node5.next = node3
    return node1
}


console.log(hasCircle(mockData()))
console.log(detectCycle(mockData())?.value)
