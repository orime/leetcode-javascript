/**路径总和
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例: 
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xo566j/
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
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function(root, sum) {
  let tar = sum
  let res = false
  function dep(root, tar){
    if(!root) return false
    tar -= root.val
    if(!root.left && !root.right){
      if(tar === 0){
        res = true
        return
      }
    }
    dep(root.left, tar)
    dep(root.right, tar)
  }
  dep(root, tar)
  return res
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
console.log(hasPathSum(testTree, 27));
console.timeEnd('0')
console.time('1')
console.log(hasPathSum(testTree, 19));
console.timeEnd('1')
