/**
 * 实现反转链表
 * Input: 1->2->3->4->5->null
 * Output: 5->4->3->2->1->null
 */

const reverseList = (self, head) => {
  // * 定义两个指针，一个指向当前节点，另一个指向上一级节点
  let [cur, pre] = [head, null]
  while(cur){
    // let next = cur.next
    // pre = cur
    // cur.next = pre
    // cur = next
    // * 思路二，同时赋值
    [cur.next, pre, cur] = [pre, cur, cur.next]
  }
  
}