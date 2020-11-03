/**
给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。

让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

A.length >= 3
在 0 < i < A.length - 1 条件下，存在 i 使得：
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1]

示例 1：

输入：[2,1]
输出：false
示例 2：

输入：[3,5,5]
输出：false
示例 3：

输入：[0,3,2,1]
输出：true

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-mountain-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */


/**
 * @param {number[]} A
 * @return {boolean}
 * * 遍历 A，将遍历到的元素设为 peek，之后的元素不可以小于peek，万一小于 peek，则 peekIndex + 1 对应值比之后的值大
 * * 考虑两种情况：一种 down 未出现，一直上升；另一种 down 出现了，则后面的值要一直下降
 */
const validMountainArray = function (A) {
  if (A.length < 3) {
    return false
  }
  let isDownning = false, isMountain = true, peekIndex = 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] === A[i + 1]) {
      isMountain = false
      break
    }
    // 如果第一次遇见 A[i] > A[i+1] ，说明开始下降
    if (A[i] > A[i + 1] && isDownning === false) {
      if (i > 0 && i < A.length - 1) {
        isDownning = true
        peekIndex = i
      } else {
        return false
      }
    }
    // 如果是下降趋势，则 A[i] 必须大于 A[i+1]
    if (isDownning) {
      if (A[i] < A[i + 1]) {
        isMountain = false
        break
      }
    }
  }
  if(peekIndex === 0) {
    return false
  }
  return isMountain
};

/**
 * @param {number[]} A
 * @return {boolean}
 * * 双指针法
 * * 头尾分别设置指针，如果中间相遇就是顶峰，如果指针没有移动过则不合规
 * * 巧用 while 循环
 */
const validMountainArray1 = function (A) {
  const len = A.length
  let left = 0, right = len -1
  while(left < len - 1 && A[left] < A[left+1]){
    left++
  }
  while(right > 0 && A[right] < A[right-1]){
    right--
  }
  return left > 0 && right < len -1 && left === right
};

console.log(validMountainArray1([0,1,2,3,4,5,6,7,8,9,0]));
