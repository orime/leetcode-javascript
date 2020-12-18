/**
354224848179262000000
1: 6.229ms
354224848179262000000
2: 0.22ms
354224848179262000000
3: 0.099ms */
/**
斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

0 1 1 2 3

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
给定 N，计算 F(N)。

示例 1：

输入：2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
示例 2：

输入：3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
示例 3：

输入：4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fibonacci-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * * 常规解法，递归实现
 * @param {number} N
 * @return {number}
 时间复杂度O(2^n)，爆炸
 */
const fib = function(N) {
  if(N === 0 ) {
    return 0
  }
  if(N === 1){
    return 1
  }
  return fib(N-1)+fib(N-2)
};

/**
 * * 递归 + 剪枝(备忘录)
 * @param {number} N 
 * @param {number} last 
 */
const record = {}
const fib1 = function(N) {
  if(N <= 1){
    return N
  }
  if(record[N]){
    return record[N]
  }
  const res = fib1(N-1) + fib1(N-2)
  record[N] = res
  return res
}

/**
 * * 动态规划，dp 为一个数组，存储 [ val(N-1), val[N] ]，经过一定数量交换，取出 dp[1] 即可
 * @param {number} N 
 * @param {number} dp 
 */
const fib2 = function(N){
  let dp = [0, 1]
  for(let i = 1; i < N; i++){
    dp = [dp[1], dp[0] + dp[1]]
  }
  return dp[N < 1 ? 0 : 1]
}

/**
 * * 动态规划 + 降维
 * @param {*} N 
 * @param {*} p 
 * @param {*} dp 
 */
const fib3 = function(N) {
  let p = 0, dp = 1
  for( let i = 1; i < N; i++ ) {
    dp = p + (p = dp)
  }
  return N <= 1 ? N : dp
}

/**
 * * 适用于浏览器执行尾递归优化的解法
 * @param {*} N 
 * @param {*} p 
 * @param {*} dp 
 */
const fib4 = function(N, p = 0, dp = 1){
  if(N === 0){
    return 0
  }
  if(N === 1){
    return dp
  }
  dp = p + (p = dp)
  return fib4(N -1, p, dp)
}

console.time('1')
console.log(fib1(100));
console.timeEnd('1')
console.time('2')
console.log(fib2(100));
console.timeEnd('2')
console.time('3')
console.log(fib3(100));
console.timeEnd('3')
console.time('4')
console.log(fib4(100));
console.timeEnd('4')

/**
354224848179262000000
1: 4.207ms
354224848179262000000
2: 0.124ms
354224848179262000000
3: 0.075ms
354224848179262000000
4: 0.113ms
*/

