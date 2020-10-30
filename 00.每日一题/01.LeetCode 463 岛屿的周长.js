/**
https://leetcode-cn.com/problems/island-perimeter/
 */

/**
* @param {number[][]} grid
* @return {number}
逐行扫描，对于每一个格子，如果是第一行则上+1，如果是第一列做左+1
如果是最后一行则下+1， 如果是最后一列则右+1
如果不是以上情况，则如果上一行对应index位置值为0，则上+1，如果左对应index位置值为0，则左+1，以此类推
*/
var islandPerimeter = function (grid) {
  const len = grid.length
  let result = 0;
  for (let i = 0; i < len; i++) {
    const row = grid[i]
    const rowLen = row.length
    for (let j = 0; j < rowLen; j++) {
      const column = row[j]
      if (column === 1) {
        // 上
        if (i === 0 || (grid[i - 1][j] === 0)) { // 第一行或者前一行该位置的值为0
          result++
        }
        // 左
        if (j === 0 || row[j - 1] === 0) {
          result++
        }
        // 右
        if (j === rowLen - 1 || row[j + 1] === 0) {
          result++
        }
        // 下
        if (i === len - 1 || grid[i + 1][j] === 0) {
          result++
        }
      }
    }
  }
  return result
}

/**
 * 采用减法，默认每个大陆都贡献了4个单位的周长
 * 从上到下，从左到右依次扫描，如果遇到左边是1，则减去重合边的周长贡献值，遇到上边同理
 * @param {*} grid 
 */
const islandPerimeter1 = function(grid){
  let sum = 0;
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
      if(grid[i][j] === 1){
        sum += 4
        if(i>=1 && grid[i-1][j] === 1){ // ! 每当碰到对应位置上面或者左面有1的就把自己边和对方边都减了，所以减2
          sum -= 2
        }
        if(j>=1 && grid[i][j-1] ===1 ) { // ! 每当碰到对应位置上面或者左面有1的就把自己边和对方边都减了，所以减2
          sum -=2
        } 
      }
    }
  }
  return sum
}

const input = [
[0, 1, 0, 0],
[1, 1, 1, 0],
[0, 1, 0, 0],
[1, 1, 1, 0]
]
const output = islandPerimeter(input)
const output1 = islandPerimeter1(input)
console.log(output, output1)
