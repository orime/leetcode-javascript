/**根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xo98qt/
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function(inorder, postorder) {
  const val = postorder.pop()
  const index = inorder.indexOf(val)
  if(!val) return null
  return {val,
    left: buildTree(inorder.slice(0, index), postorder.slice(0, index)),
    right: buildTree(inorder.slice(index+1), postorder.slice(index))
  }
};


const inorder = [9,3,15,20,7]
const postorder = [9,15,7,20,3]

console.time("0")
console.log(buildTree(inorder, postorder))
console.timeEnd("0")
