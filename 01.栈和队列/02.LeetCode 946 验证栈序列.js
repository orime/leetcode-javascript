/**
 * 有两个序列，pushed和popped，当pushed序列经过push/pop操作能够得到popped序列时候返回true，否则返回false
 * 
 * 
 * 示例 1：

输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
示例 2：

输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
输出：false
解释：1 不能在 2 之前弹出。

 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 * 思路：用一个空栈模拟 push/pop 的过程，最后空栈的长度为0，则模拟成功，否则模拟失败
 */
const validateStackSequences = function (pushed, popped) {
  const stack = [] // 定义空栈
  let j = 0 // poped序列索引，每次对其进行逐项比较
  for (let i = 0; i < pushed.length; i++) {
    // 查看当前 stack 序列尾部元素是否为 popped 的第 j 项
    if (stack[stack.length - 1] === popped[i]) {
      // 如果是则弹出
      stack.pop()
      continue
    }
    for (; j < pushed.length; j++) {
      // 无需弹出
      stack.push(pushed[j])
      if (stack[stack.length - 1] === popped[i]) {
        // 遇到弹出了 popped 的 i = 0, pushed 的 j = 3
        stack.pop()
        j++ // 别忘了我们需要管理 popped 序列的索引， break 不能实现 j+1，需要手动加上
        break
      }
    }
  }
  return !stack.length
}

/**
 * 参考自官方题解
 * 一个循环中将 pushed 数组中的值 push 到 stack 中
 * 同时判断 stack 的 栈顶元素是否等于 popped 的对应位置元素，如果等于则pop，并且代表 popped 索引的 j 值 +1
 */
const validateStackSequences1 = (pushed, popped) => {
  const len = pushed.length
  const stack = []
  let j = 0
  for(let i = 0; i < len; i++){
    stack.push(pushed[i])
    while(stack.length && j < len && stack[stack.length - 1] === popped[j]){
      stack.pop()
      j++
    }
  }
  return j === len
}


// pushed = [1,2,3,4,5], popped = [4,5,3,2,1]，从 popped 序列入手
// pushed = [1,2,5,4,3], popped = [4,5,3,2,1]，如果是在最初空栈上进行 push/pop 即可
// 设定空栈为 stack，遍历 pushed，如果 i 索引对应值

const pushed = [1, 2, 3, 4, 5],
  popped = [4, 5, 3, 2, 1]
console.log(validateStackSequences1(pushed, popped))
