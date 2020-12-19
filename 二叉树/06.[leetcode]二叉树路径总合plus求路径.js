/**输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

 

示例:
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
]
 



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

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
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let [path, tar, res] = [[], sum, []]
  if (!root) return []
  function dep(root, path, tar) {
    if (!root) return
    tar -= root.val
    path.push(root.val)
    if (!root.left && !root.right && tar === 0) {
      res.push(path)
      return
    }
    dep(root.left, [...path], tar)
    dep(root.right, [...path], tar)
  }
  dep(root, path, tar)
  return res
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 * * 稍微改改就成回溯了
 */
var pathSum1 = function (root, sum) {
  let [path, tar, res] = [[], sum, []]
  function dep(root, tar) {
    if (!root) return
    tar -= root.val
    path.push(root.val)
    if (!root.left && !root.right && tar === 0) {
      res.push([...path])
      path.pop()
      return // ! 这里不能直接return，否则栈中的值无法弹出
    }
    dep(root.left, tar)
    dep(root.right, tar)
    path.pop()
  }
  dep(root, tar)
  return res
}

const testTree = {
  val: 3,
  left: {
    val: 9,
    left: { val: 1 },
    right: { val: 15 },
  },
  right: {
    val: 9,
    left: { val: 15 },
    right: { val: 7 },
  },
}

const testTree1 = {
  val: 1,
  right: {
    val: 2,
  },
}

console.time("0")
console.log(pathSum(testTree, 1))
console.timeEnd("0")
console.time("1")
console.log(pathSum(testTree, 19))
console.timeEnd("1")
