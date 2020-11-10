/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  // * 1. 设置结果集
  const result = []

  // * 2. 执行回溯
  recursion([], new Set())

  // * 3. 定义回溯函数
  function recursion (path, set) {
    // * 3.1.1 设置回溯终止条件
    if (path.length === nums.length) {
      console.log(path, nums, '进入')
      // ? 此时可以表明 path: [1, 2, 3] 三个元素已经完备
      // * 3.1.2 推入结果集
      result.push(path)
      // * 3.1.3 终止递归
      return
    }

    // * 3.2 在回溯函数中遍历数组
    for (let i = 0; i < nums.length; i++) {
      const item = nums[i]
      // * 3.3.1 必须是不存在于目前 set 中的坐标
      if(!set.has(i)) {
        // 将当前坐标对应项 push 进路径中，并且将该项的坐标 add 进 set 中
        path.push(item)
        set.add(i)

        // 进一步递归
        recursion(path, set)

        // 回溯
        path.pop()
        set.delete(i)
      }
    }
  }

  //* 4. 返回结果
  return result
}

const permute1 = function(nums) {
  const result = [] // * 定义结果集
  
  function recursion(path, set) {
    if(path.length === nums.length) {
      result.push([...path])
      return
    }
    for(let i = 0; i < nums.length; i++) {
      if(!set.has(i)) {
        path.push(nums[i])
        set.add(i)
        recursion(path, set)
        path.pop()
        set.delete(i)
      }
    }
  }
  recursion([], new Set())
  return result
}

console.log(permute1([1, 2, 3]))

