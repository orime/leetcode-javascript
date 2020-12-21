/**给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。

 

进阶：

你只能使用常量级额外空间。
使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
 

示例：

![图A](https://gitee.com/orime/picturebed/raw/master/20201219112231.png)

输入：root = [1,2,3,4,5,6,7]
输出：[1,#,2,3,#,4,5,6,7,#]
解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xoo0ts/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。*/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function (root) {
  if(!root) return root
  let queue = [root]
  const res = []
  while (queue.length) {
    const size = queue.length
    const nums = []
    for (let i = 0; i < size; i++) {
      const node = queue[i]
      if (queue[i + 1] == undefined) {
        // * 当前节点的下一个节点为空
        node.next = null
        res.push('#')
      } else {
        node.next = queue[i + 1]
        res.push(node.val)
      }
      if (node.left && node.right) nums.push(node.left, node.right)
    }
    queue = nums
  }
  return root
}

const testTree = {
  val: 3,
  left: {
    val: 9,
    left: { val: 7 },
    right: { val: 15 }
  },
  right: {
    val: 9,
    left: { val: 15 },
    right: { val: 7 }
  }
}

console.time("0")
console.log(connect(testTree))
console.timeEnd("0")
