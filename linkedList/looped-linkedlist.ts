/**
 * 排序的循环列表
 * 在⼀个循环链表中节点的值递增排序，请设计⼀个算法在该循环链表中插⼊节点，并保证插⼊节点之后的循环链表仍然是排序的。
 */
import {LinkedListNode} from "./utils";

const insert = (head: LinkedListNode<number> | null, val: number) => {
    const node = new LinkedListNode(val)
    if (head === null) {
        node.next = node
        return node
    }
    if (head.next === head) {
        head.next = node
        node.next = head
        return head
    }
    let cur = head, flag = false
    while (cur) {
        if (cur.value < val && cur.next && cur.next.value >= val || cur.next === head) {
            const next = cur.next
            cur.next = node
            node.next = next
            break
        }
        cur = cur.next as LinkedListNode<number>
    }
    return head
}


const mockData = () => {
    const node1 = new LinkedListNode(1)
    const node2 = new LinkedListNode(2)
    const node3 = new LinkedListNode(3)
    const node4 = new LinkedListNode(4)
    const node5 = new LinkedListNode(55)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    node5.next = node1
    return node1
}

const printCircle = (head: LinkedListNode<number>) => {
    const res = [] as number[]
    let cur = head
    while (cur && cur.next !== head) {
        res.push(cur.value)
        cur = cur.next as LinkedListNode<number>
    }
    res.push(cur.value)
    console.log(res.join('->'))
}

const head = insert(mockData(), 110)

printCircle(head)

