/**n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

上图为 8 皇后问题的一种解法。

给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

示例：

输入：4
输出：[
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
解释: 4 皇后问题存在两个不同的解法。

提示：

皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/n-queens
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * * 回溯算法求解
1、遍历枚举出所有可能的选择。
2、按顺序尝试这些选择：作出一种选择，并往下递归。
3、如果这个选择产生不出正确的解，要撤销这个选择（将当前置为 "Q" 的格子恢复为 "."），回到之前的选择，并作出下一个可用的选择。
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n) {
  const board = new Array(n) // * 创建一个 n x n 大小的空数组 
  for (let i = 0; i < n; i++) {     // * 棋盘的初始化，n 行每行 n 个 '.'
    board[i] = new Array(n).fill('.');
  }
  const res = [] // * 记录结果
  /**
   * * 验证当前位置是否有效 传入前一行
   * @param {number} row 上一行
   * @param {number} col 当前列
   */
  const isValid = (row, col) => {
    for (let i = 0; i < row; i++) { // 之前的行
      for (let j = 0; j < n; j++) { // 所有的列
        if (board[i][j] == 'Q' &&   // 发现了皇后，并且和自己同列/对角线
          (j == col || i + j === row + col || i - j === row - col)) {
          return false;             // 不是合法的选择
        }
      }
    }
    return true;
  };

  /**
   * 传入行数进行放置
   * @param {number} row // * 第几行
   */
  const helper = (row) => {   // 放置当前行的皇后
    if (row == n) {           // 递归的出口，最后一行
      const stringsBoard = board.slice(); // 拷贝一份 board，浅拷贝，也可以使用 [...board]
      for (let i = 0; i < n; i++) {
        stringsBoard[i] = stringsBoard[i].join(''); // 将每一行拼成字符串
      }
      res.push(stringsBoard); // 完整解 推入res数组
      return;
    }
    for (let col = 0; col < n; col++) { // 枚举出所有选择
      if (isValid(row, col)) {          // 剪掉无效的选择
        board[row][col] = "Q";          // 作出选择，放置皇后
        helper(row + 1);                // 继续选择，往下递归
        board[row][col] = '.';          // 撤销当前选择
      }
    }
  };

  helper(0);  // * 从第 0 行开始放置
  return res;

};

console.log(solveNQueens(4));
