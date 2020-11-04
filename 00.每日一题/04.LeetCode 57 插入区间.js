/**给出一个无重叠的 ，按照区间起始端点排序的区间列表。

在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

 

示例 1：

输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
输出：[[1,5],[6,9]]
示例 2：

输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出：[[1,2],[3,10],[12,16]]
解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/insert-interval
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * * 依次遍历每个区间，观察新插入区间是否有重合
 */
const insert = function (intervals, newInterval) {

  if (!intervals.length) {
    return [newInterval]
  }

  const result = [...intervals]
  let needChange, span = 1;
  const newStart = newInterval[0]
  const newEnd = newInterval[1]

  for (let i = 0; i < intervals.length; i++) {
    const item = intervals[i]
    const itemStart = item[0]
    const itemEnd = item[1]

    if (needChange) {
      if (newEnd < itemStart) {
        // 悬浮区块
        result.splice(needChange.index, span, [needChange.item[0], newEnd])
        break
      } else if (newEnd <= itemEnd) {
        // 一级合并区块
        result.splice(needChange.index, span + 1, [needChange.item[0], itemEnd])
        break
      } else {
        // 超越区间区块
        // 观察是否是最后一项
        if (i === intervals.length - 1) {
          result.splice(needChange.index, span + 1, [needChange.item[0], newEnd])
          break
        }
        span++
      }
    }

    if (itemStart <= newStart && newStart <= itemEnd) {
      // 新插入区间在当前区间内，当前区间需要作出改变
      needChange = { item, index: i }
      if (itemStart <= newEnd && newEnd <= itemEnd) {
        // 新区间被包裹，无需操作
        break
      }
    }

    // 如果开始项比末项大比下一项开始小
    if (newStart > itemEnd && i !== intervals.length - 1 && newStart < intervals[i + 1][0]) {
      needChange = { item: newInterval, index: i + 1 }
      result.splice(i+1, 0, newInterval)
    }

    // 第一项开始区间比原来的小
    if (i === 0 && newStart < itemStart) {
      if (newEnd < itemStart) {
        result.unshift(newInterval)
        intervals.unshift(newInterval)
        break
      }
      intervals.unshift(newInterval)
      result.unshift(newInterval)
      needChange = { item: newInterval, index: 0 }
      if (itemStart <= newEnd && newEnd <= itemEnd) {
        // 被包裹到第一项的区间
        result.splice(i, 1, [newStart, itemEnd])
      }
    }

    // 最后一项极限判断
    if (i === intervals.length - 1) {
      if (!needChange) {
        // 还没找到目标数组，则开辟新的队列
        result.push(newInterval)
        break
      } else {
        // 最后一项
        result.splice(needChange.index, span, [needChange.item[0], newEnd])
        break
      }
    }
  }

  return result
};

// 测试用
let intervals = [[0,3],[4,6],[8,10]]
let newIntervals = [7,13]
console.log(insert(intervals, newIntervals));

