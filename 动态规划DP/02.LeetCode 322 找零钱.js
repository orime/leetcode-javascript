/**给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

你可以认为每种硬币的数量是无限的。

示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
示例 2：

输入：coins = [2], amount = 3
输出：-1
示例 3：

输入：coins = [1], amount = 0
输出：0
示例 4：

输入：coins = [1], amount = 1
输出：1
示例 5：

输入：coins = [1], amount = 2
输出：2


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/coin-change
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * * 最终和 = 次和 + 次次和，本质是动态规划自底向上凑到最终和
 求面值为 11 的时候，只要拿出 1， 2， 5 分别比较即可，无需关心 10， 9， 6 的情况
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
  let dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}


const coinChange1 = (coins, amount) => {
  const record = {}
  const dp = function(n) {
    if(n === 0) return 0
    if(n < 0) return -1
    if(record[n]) return record[n]
    let res = Infinity
    for(let coin of coins){
      let subProblem = dp(n-coin) // * 如果计算总数为11， 则计算 总数为10 并赋值给 subProblem
      if(subProblem === -1) continue // ! 子问题无解，跳过
      res = Math.min(res, 1+subProblem) // ? 为什么要 +1？因为当 n === coin 的时候，subProblem 等于 0 了，这种情况下需要 1 枚硬币
    }
    record[n] = res === Infinity ? -1 : res
    return res
  }
  return dp(amount)
}


console.log(coinChange([1, 2, 5], 11));
console.log(coinChange1([1, 2, 5], 11));
