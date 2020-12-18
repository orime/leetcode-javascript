/**对称二叉树
给定一个二叉树，检查它是否是镜像对称的。

 

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3


作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xoxzgv/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 只能说太强了，外星人解法
 */
var isSymmetric = function (root) {
  if (!root) return true
  // * 返回对应位置的值
  function recur(left, right) {
    if((!left || !right)){
      return left === right
    }
    if (!left && !right) return true
    if (left.val !== right.val) return false
    return recur(left.right, right.left) && recur(left.left, right.right)
  }
  return recur(root.left, root.right)
};

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
console.time('0')
console.log(isSymmetric(testTree));
console.timeEnd('0')
console.time('1')
console.log(isSymmetric(testTree));
console.timeEnd('1')
