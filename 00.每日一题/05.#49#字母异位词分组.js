/**
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
说明：

所有输入均为小写字母。
不考虑答案输出的顺序。 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 * {0, {rule: Set('a', 't', 'e'), value: ['ate']}, 1: {rule: Set('n', 'a', 't'), value: ['nat']}, 2: {}}
 */
const groupAnagrams = function (strs) {
  const result = new Map() // * map 中存放规则序列 {''}
  let k = 0
  orderStr = strs[0].split('').sort().join('')
  result.set(k++, { rule: orderStr, value: [strs[0]] })
  console.log(result); // ? { 0 => { rule: 'eat', value: [ 'eat' ] } }
  for (let i = 1; i < strs.length; i++) {
    let target = strs[i]
    // * 判断当前的 result 的 Map 中的规则是否命中
    // * 命中：加入当前规则对应 的 value 中
    // * 没有命中：开辟新的 v
    let find = false
    let sortTarget = target.split('').sort().join('')
    for (let [k, v] of result) {
      let s = v.rule
      // * 比较两个 set 是否一样，转数组，排序，转字符串，看是否一样
      if (sortTarget === s) {
        console.log(s, sortTarget, v);
        v.value.push(target)
        find = true
        break
      }
    }
    if (!find) {
      result.set(k++, { rule: sortTarget, value: [target] })
    }
  }
  console.log([...result]);
  return [...result].map(item => item[1].value)
}

let test = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(test));