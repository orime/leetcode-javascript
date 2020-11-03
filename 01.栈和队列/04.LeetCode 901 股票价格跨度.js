/**编写一个 StockSpanner 类，它收集某些股票的每日报价，并返回该股票当日价格的跨度。

今天股票价格的跨度被定义为股票价格小于或等于今天价格的最大连续日数（从今天开始往回数，包括今天）。

例如，如果未来7天股票的价格是 [100, 80, 60, 70, 60, 75, 85]，那么股票跨度将是 [1, 1, 1, 2, 1, 4, 6]。

示例：

输入：["StockSpanner","next","next","next","next","next","next","next"], [[],[100],[80],[60],[70],[60],[75],[85]]
输出：[null,1,1,1,2,1,4,6]
解释：
首先，初始化 S = StockSpanner()，然后：
S.next(100) 被调用并返回 1，
S.next(80) 被调用并返回 1，
S.next(60) 被调用并返回 1，
S.next(70) 被调用并返回 2，
S.next(60) 被调用并返回 1，
S.next(75) 被调用并返回 4，
S.next(85) 被调用并返回 6。

注意 (例如) S.next(75) 返回 4，因为截至今天的最后 4 个价格
(包括今天的价格 75) 小于或等于今天的价格。
 

提示：

调用 StockSpanner.next(int price) 时，将有 1 <= price <= 10^5。
每个测试用例最多可以调用  10000 次 StockSpanner.next。
在所有测试用例中，最多调用 150000 次 StockSpanner.next。
此问题的总时间限制减少了 50%。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/online-stock-span
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * * 在 StockSpanner 原型上实现 next 方法，类中记录每一天的股票价格
 * * [100, 80, 60]
 */
const StockSpanner = function () {
  this.priceList = []
};

/** 
 * @param {number} price
 * @return {number}
 * * 从栈底开始遍历，求出最大连续值
 * * 吃了没有好好审题的亏，其实要从今天的价格往回推，连续小于今天价格的天数即可，误以为是连续小于今天的天数（可以与今天中断）
 */
StockSpanner.prototype.next = function (price) {
  this.priceList.push(price)
  const stack = [...this.priceList]
  let maxContinuous = 0
  for (let i = stack.length - 1; i >= 0; i--) {
    if (stack[i] <= price) { // 如果前一天值比今天的价格低，最大连续+1
      maxContinuous++
    } else { // 万一有一天的值比今天的价格高，则中断统计
      break
    }
  }
  return maxContinuous
};

/**
 * * 更聪明的解法，新建一个 “单调栈”，记录当前价格和之前连续比它小的长度
 * * 每次传递 current 进来，比较上一次的 price 是否比 current.price 小，如果小，则将上一次 price 的 count 累加给 max，并且比较的游标跳到 -count 继续比较
 */
const StockSpanner1 = function () {
  this.data = []
  function getCount(current) {
    if (this.data.length - 1 >= 0) {
      let max = 1;
      let index = this.data.length - 1;
      while (true) {
        if (index >= 0 && current >= this.data[index].price) {
          max += this.data[index].count;
          index -= this.data[index].count;
        } else {
          break;
        }
      }
      return max;
    }
    return 1;
  }
  this.getCount = getCount
};

/** 
 * @param {number} price
 * @return {number}
 * * 从栈底开始遍历，求出最大连续值
 * * 吃了没有好好审题的亏，其实要从今天的价格往回推，连续小于今天价格的天数即可，误以为是连续小于今天的天数（可以与今天中断）
 */
StockSpanner1.prototype.next = function (price) {
  const newPrice = {
    price,
    count: this.getCount(price)
  };
  this.data.push(newPrice);
  return newPrice.count;
};

const obj = new StockSpanner()
const input = [[29], [91], [62], [76], [51]]
for (let v of input) {
  console.log(obj.next(v[0]));
}