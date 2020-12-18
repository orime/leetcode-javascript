/**二叉树的最大深度
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。



作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xoh1zg/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * * 自顶向下解法（后序遍历：DFS）
 1.当前层级为1
 2.左子树最大深度和右子树最大深度中的最大值，加上自身深度为最大深度
 */
const maxDepth = function(root) {
  if(!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

/**
 * @param {TreeNode} root
 * @return {number}
 * * 自底向上解法
 BFS 层序遍历 求解最大深度
 */
const maxDepth1 = function(root) {
  if(!root) return 0
  let [queue, res] = [[root], 0]
  while(queue.length) {
    let tmp = []
    for(let node of queue) {
      node.left && tmp.push(node.left)
      node.right && tmp.push(node.right)
    }
    queue = tmp
    res++
  }
  return res
};

const testTree = { val: 3, left: { val: 9 }, right: { val: 20, left: { val: 15 }, right: { val: 7 } } }
console.time('0')
console.log(maxDepth(testTree));
console.timeEnd('0')
console.time('1')
console.log(maxDepth1(testTree));
console.timeEnd('1')
