/**
 * @param root TreeNode类 the root of binary tree
 * @return int整型二维数组
        1
      /   \
    2     3
    第一次find
    ![函数执行栈图解说明](https://cdn.jsdelivr.net/gh/Orime112/picbed/img/20201208143804.png)
    核心就在于每次进行find循环的时候，在左节点完全被放进 preOrder[] 之前，不允许继续递归
 */
function threeOrders( root ) {
    // write code here
    const preOrder = [];
    const inOrder = [];
    const postOrder = []
    const find = (node) => {
        if(!node)return
        preOrder.push(node.val)
        find(node.left)
        inOrder.push(node.val)
        find(node.right)
        postOrder.push(node.val)
    }
    find(root)
    return [preOrder, inOrder, postOrder]
}
// * 测试用例
let testTree = {
  val: 1,
  left: {
    val: 2,
  },
  right: {
    val: 3
  }
}
console.log(threeOrders(testTree))