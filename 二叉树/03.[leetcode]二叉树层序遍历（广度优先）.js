/**给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]

链接：https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xefh1i/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 对每一层进行遍历，在遍历的过程中做两件事：1、将 val 压入当前结果；2、将 left 和 right 顺序压入下一个递归数组中
 */
const levelOrder = function (root) {
  const result = []
  function fun(rootList) {
    const nums = []
    const nextList = []
    for (let i = 0; i < rootList.length; i++) {
      const current = rootList[i]
      nums.push(current.val)
      current.left && nextList.push(current.left)
      current.right && nextList.push(current.right)
    }
    result.push(nums)
    nextList.length && fun(nextList)
  }
  root && fun([root])
  return result
};

/**
 * 利用队列结构，广度度优先遍历 BFS
 * @param {*} root
 BFS 模板
 while 队列不空
  cur = queue.pop()
  for 节点 in cur的所有相邻节点:
    if 该节点有效且未被访问过
      queue.push(该节点)
 */
const levelOrder1 = function (root) {
  if (!root) return []
  const result = []
  const queue = [root]
  while (queue.length) {
    let len = queue.length
    const nums = []
    while (len--) {
      const cur = queue.pop()
      nums.push(cur.val)
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
    result.push(nums)
  }
  return result
};

/**
 * 利用 深度优先遍历 DFS
 * @param {*} root
 遍历到的数据记录 dept 深度，根据深度组织最后结果
 */
const levelOrder2 = function (root) {
  if (!root) return []
  const result = []
  fun(root, 0, result)
  function fun(root, level, res) {
    if (!root) return
    if (!res[level]) res[level] = [] // * 如果结果集的当前深度无值，则当前深度初始值为 []
    res[level].push(root.val)
    root.left && fun(root.left, level+1, res)
    root.right && fun(root.right, level+1, res)
  }
  return result
};

const testTree = { val: 3, left: { val: 9 }, right: { val: 20, left: { val: 15 }, right: { val: 7 } } }
console.time('0')
console.log(levelOrder(testTree));
console.timeEnd('0')
console.time('1')
console.log(levelOrder1(testTree));
console.timeEnd('1')
console.time('2')
console.log(levelOrder2(testTree));
console.timeEnd('2')

/**
[ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
0: 5.373ms
[ [ 3 ], [ 20, 7 ], [ 15, 9 ] ]
1: 0.169ms
[ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
2: 0.126ms */