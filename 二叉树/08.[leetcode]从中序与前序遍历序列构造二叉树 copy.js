/**从前序与中序遍历序列构造二叉树
根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xoei3r/
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
 * @param {number[]} preorder
 * @return {TreeNode}
 * * 中序遍历：左-根-右
 * * 前序遍历：根-左-右
 * * 前序遍历 shift() 为根节点，在中序遍历中分左右两棵子树
 */
const buildTree = function(preorder, inorder) {
  const val = preorder.shift()
  const index = inorder.indexOf(val)
  return val == undefined ? null : {val,
    left: buildTree(preorder.slice(0, index), inorder.slice(0, index)),
    right: buildTree(preorder.slice(index), inorder.slice(index+1))
  }
};


const preorder = [3,9,20,15,7]
const inorder = [9,3,15,20,7]

console.time("0")
console.log(buildTree(preorder, inorder))
console.timeEnd("0")
