/**
 * 给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

示例 1：

输入：root = [3,9,20,null,null,15,7]
输出：2
示例 2：

输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
 
提示：

树中节点数的范围在 [0, 105] 内
-1000 <= Node.val <= 1000
 */

// * 定义二叉树结点
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }
/**
 * * DFS 深度优先遍历，确定边界条件之后，状态转移为 f(n) = Math.min(n.left, n.right) + 1
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  // * 考虑边界情况，当 root 为空时候，返回0
  if(root === null) {
    return 0
  }
  // * 当 root 为叶子结点时候，最短路径结点数量为 1
  if(root.left === null && root.right === null) {
    return 1
  }
  let ans = Number.MAX_SAFE_INTEGER
  if(root.left !== null) {
    ans = Math.min(minDepth(root.left), ans)
  }
  if(root.right !== null) {
    ans = Math.min(minDepth(root.right), ans)
  }
  return ans + 1
}

let root = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: { val: 20, left: {val: 15, left: null, right: null}, right: {val: 7, left: null, right: null} },
}

console.log(minDepth(root))
