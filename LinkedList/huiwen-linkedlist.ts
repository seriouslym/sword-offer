/**
 * 判断一个链表是否是回文链表
 * lc 234
 */
import {LinkedListNode, newLinkedListFromArray} from "./utils";
import reverseList from "./reverse-linkedlist";

const isPalindrome = (head: LinkedListNode<number> | null) => {
    if (head === null || head.next === null) return true
    let fast = head.next || null, slow: LinkedListNode<number> | null = head
    while (fast?.next && fast.next.next && slow) {
        fast = fast.next.next
        slow = slow.next
    }
    let second
    if (fast?.next) {
        second = slow?.next?.next || null
    } else {
        second = slow?.next || null
    }
    if (slow) {
        slow.next = null
    }
    return equal(head, reverseList(second))
}

const equal = (h1: LinkedListNode<number> | null, h2: LinkedListNode<number> | null) => {
    let c1 = h1, c2 = h2
    while (c1 && c2) {
        if (c1.value !== c2.value) return false
        c1 = c1.next
        c2 = c2.next
    }
    return !c1 && !c2;
}


const head1 = newLinkedListFromArray([1,2,2,1])
const head2 = newLinkedListFromArray([1,2,3,2,1])
const head3 = newLinkedListFromArray([1,2,3])
const head4 = newLinkedListFromArray([1,1])
const head5 = newLinkedListFromArray([1])
console.log(isPalindrome(head1))
console.log(isPalindrome(head2))
console.log(isPalindrome(head3))
console.log(isPalindrome(head4))
console.log(isPalindrome(head5))

