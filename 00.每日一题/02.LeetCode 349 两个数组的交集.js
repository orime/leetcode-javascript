/**
 * 给定两个数组，编写一个函数来计算它们的交集。

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-arrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number[]}
* * 定义一个空栈，最长长度数组入栈，如果第二长数组有值则出栈
*/
const intersection = function (nums1, nums2) {
  const stack = []
  const result = []
  let j = 0
  let maxNums, minNums, len
  if (nums1.length > nums2.length) {
    maxNums = nums1
    minNums = nums2
    len = nums1.length
  } else {
    maxNums = nums2
    minNums = nums1
    len = nums2.length
  }
  for (let i = 0; i < len; i++) {
    stack.push(maxNums[i])
    while (j <= minNums.length && minNums.includes(stack[stack.length - 1]) && stack.length) {
      result.push(stack.pop())
      j++
    }
  }
  return [... new Set(result)]
};

/** Set思路
 * * 先求出 nums1 和 nums2 长度最长的数组分别值为 maxNums 和 minNums，将 maxNums 设置为 Set 类型，检测是否包含 minNums 中元素，add 到最终结果里
 */
const intersection1 = (nums1, nums2) => {

  const result = new Set()
  let maxNums, minNums
  if (nums1.length > nums2.length) {
    maxNums = nums1
    minNums = nums2
  } else {
    maxNums = nums2
    minNums = nums1
  }
  const set = new Set(maxNums)

  for(let i = 0; i < minNums.length; i++){
    if(set.has(minNums[i])){
      result.add(minNums[i])
    }
  }
  return [...result]
}

let nums1 = [2, 1], nums2 = [1, 1]
console.log(intersection1(nums1, nums2));
