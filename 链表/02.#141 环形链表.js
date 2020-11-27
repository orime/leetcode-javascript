/**
 * 给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 true 。 否则，返回 false 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/linked-list-cycle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * * 思路一：借助 set 存储链表每一节点，遍历链表进行判断
 * @param {*} head 
 */
const hasCycle = (head) => {
  const pointers = new Set()
  let cur = head
  while(cur) {
    if(!pointers.has(cur)) {
      pointers.add(cur)
      cur = cur.next
    } else {
      return true
    }
  }
  return false
}

/**
 * * 快慢指针法
 */
const hasCycle1 = (head) => {

  // 至少 2 个节点才能构成一个环
  if (!head || !head.next) {
    return false;
  }

  // 设置快慢指针
  let slow = head;
  let fast = head.next;

  // 如果快指针一直没有追上慢指针
  while (slow !== fast) {
    // 如果没有环，则快指针会抵达终点
    if (!fast || !fast.next) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  // 如果有环，那么快指针会追上慢指针
  return true;
};

/**
 * ? 惊为天人的写法
 * @param {} head 
 */
const hasCycle3 = function(head) {
  try {
      JSON.stringify(head)
      return false
  } catch {
      return true
  }
};

/**
 * * 污染链表法
 */
const hasCycle4 = (head) => {
  // 1. 如果有链表
  while (head) {
    // 2. 每经过一个节点，将它渲染成 jsliang
    if (head.val === 'jsliang') {
      // 3. 如果下次找到了自己，证明有环
      return true;
    } else {
      head.val = 'jsliang';
    }
    // 4. 一直往链表尾部走
    head = head.next;
  }

  // 5. 如果没有重复，那么返回 false
  return false;
};
