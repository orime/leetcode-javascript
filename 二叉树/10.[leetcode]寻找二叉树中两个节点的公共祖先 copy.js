/**给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]

示例 1:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
示例 2:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
 

说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉树中。


作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xopaih/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * 
 * 
 * 
 * 
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * * 分别打印出根结点到p和q之间的路径。最后一个相同的点就是最近公共祖先。
 */
const lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root
  let pPath = [], cur = []
  findPath(root, [], p)
  pPath = [...cur]
  cur = []
  let qPath = []
  findPath(root, [], q)
  qPath = [...cur]
  function findCommonRoot(pArr, qArr) {
    const res = []
    for (let i = 0; i < pArr.length; i++) {
      if (pArr[i] === qArr[i]) {
        res.push(pArr[i])
      } else {
        break
      }
    }
    return res.pop()
  }
  return findCommonRoot(pPath, qPath)
  // let path = []
  // 传入 root path val 寻找路径
  function findPath(root, path, val) {
    if (cur.length) {
      return
    }
    path.push(root) // * 如果没找到对应节点，路径就一直增加
    if (root === val) {
      cur = [...path]
      return
    }
    root.left && findPath(root.left, [...path], val)
    root.right && findPath(root.right, [...path], val)
    path.pop(root.val)
  }
};

/**
 * 
 * @param {TreeNode} root 
 * @param {*} p 
 * @param {*} q 
 */
const lowestCommonAncestor1 = function(root, p, q){
  if(!root) return root // * 根节点为空直接返回根节点
  if(root === p || root === q) return root // * 由于自身可以是公共节点，如果找到了自身就返回自身
  let left = lowestCommonAncestor1(root.left, p, q) // * 左侧寻找 p 或 q
  let right = lowestCommonAncestor1(root.right, p, q)
  if(!left) return right // * 如果左侧没有找到，就一定在右侧
  else if (!right) return left
  return root
}

const tree =
{
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6
    },
    right: {
      val: 2,
      left: {
        val: 7
      },
      right: {
        val: 4
      }
    }
  },
  right: {
    val: 1,
    left: {
      val: 0
    },
    right: {
      val: 8
    }
  }
}
console.log(lowestCommonAncestor1(tree, tree.left.right.left, tree.left));