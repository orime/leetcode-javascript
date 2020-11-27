/**
 * 实现反转链表
 * Input: 1->2->3->4->5->null
 * Output: 5->4->3->2->1->null
 * ? 思路一
 * * 1、初始化一个 pre 指针为 null，一个 cur 指针为 head
 * * 2、用 while 遍历链表，在每一次循环中
 *    先保存 cur.next
 *    将 cur.next 倒转指向 pre
 *    pre 和 cur 都向前进一步 （pre = cur； cur = next）
 */

const reverseList1 = (head) => {
  // * 定义两个指针，一个指向当前节点，另一个指向上一级节点
  let [cur, pre] = [head, null] // * head 为{val: 1, next: {val: 2, ...}}
  while(cur){
    let next = cur.next // next === {val: 2, next: {...}}
    cur.next = pre // head.next = pre head.next = {val: 1, next: {...}}
    pre = cur // pre 从null 变成 {val: 1, next: {...}}
    cur = next // cur = {val: 2, next: {...}}
    // * 思路二，同时赋值
    // [cur.next, pre, cur] = [pre, cur, cur.next]
  }
  return pre
}


/**
 * ? 思路二：递归
 * 我们可以把链表分成两个部分：

第一个节点
余下的部分
假设余下的部分是已经反转好的链表，那我们就只需要把这部分的最后一个节点指向原本的第一个节点，然后返回余下部分的 head。

而余下的部分也可以进一步分成两个部分：

第一个节点
余下的部分

 * * 反转后尾部连接
 * @param {*} head 
 */
const reverseList2 = function(head) {
  if (!head || !head.next) return head;
  let next = head.next; // next节点，反转后是最后一个节点
  let reverseHead = reverseList2(next); // ? 最后一次循环 reverseHead 为 { val: 5, next: null }
  head.next = null; // 裁减 head // ? head 为 {val: 4, next: {val: 5, next: null}}
  next.next = head; // 尾接 // ? 变成 {val: 5, next: {val: 4, next: null}}
  return reverseHead; // ? 上一次执行传入的 head 为 {val: 4, next: {val: 5, next: null}} 现在返回的是 {val: 5, next: {val: 4, next: null}}
  // 会接着让 {val: 3, next: {val: 4, next: {...}}} 变为 {val: 3, next: 4}，让 {val: 4, next: null}变成 {val: 4, next: {val: 3, next: null}}，依次循环
};

const testLinked = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null}}}}}
console.log(reverseList2(testLinked)) // { val: 5, next: { val: 4, next: { val: 3, next: [Object] } } }