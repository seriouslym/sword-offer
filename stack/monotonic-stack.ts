/**
 * 单调栈相关
 */

import assert from "node:assert";

/**
 * 每日温度
 * lc739
 * 输⼊⼀个数组，它的每个数字是某天的温度。请计算每天
 * 需要等⼏天才会出现更⾼的温度。例如，如果输⼊数组[35，31，33，36，34]，那么输出为[3，1，1，0，0]
 * @param temperatures
 *
 */
const dailyTemperatures = (temperatures: number[]) => {
    const stack: number[] = []
    const res = Array.from<number,number>({length: temperatures.length},() => 0)
    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
            stack.pop()
        }
        if (stack.length) {
            res[i] = stack[stack.length - 1] - i
        }
        stack.push(i)
    }
    return res
}
/**
 * 正向遍历
 * @param temperatures
 */
const dailyTemperatures1 = (temperatures: number[]) => {
    const stack: number[] = []
    const res = Array.from<number,number>({length: temperatures.length},() => 0)
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let pop = stack.pop() as number
            res[pop] = i - pop
        }
        stack.push(i)
    }
    return res
}

assert.deepEqual(dailyTemperatures([35,31,33,36,34]),[3,1,1,0,0],'wrong')
assert.deepEqual(dailyTemperatures([73,74,75,71,69,72,76,73]),[1,1,4,2,1,1,0,0],'wrong')
assert.deepEqual(dailyTemperatures([30,40,50,60]),[1,1,1,0],'wrong')
assert.deepEqual(dailyTemperatures([30,60,90]),[1,1,0],'wrong')
assert.deepEqual(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]),[8,1,5,4,3,2,1,1,0,0],'wrong')
assert.deepEqual(dailyTemperatures1([35,31,33,36,34]),[3,1,1,0,0],'wrong')
assert.deepEqual(dailyTemperatures1([73,74,75,71,69,72,76,73]),[1,1,4,2,1,1,0,0],'wrong')
assert.deepEqual(dailyTemperatures1([30,40,50,60]),[1,1,1,0],'wrong')
assert.deepEqual(dailyTemperatures1([30,60,90]),[1,1,0],'wrong')
assert.deepEqual(dailyTemperatures1([89,62,70,58,47,47,46,76,100,70]),[8,1,5,4,3,2,1,1,0,0],'wrong')


/**
 * 直⽅图最⼤矩形⾯积
 * lc84
 * 单调栈：枚举每一个柱子作为矩形的高 需要找到左右边界 边界的柱子是第一个小于该高度
 * 既找到左右两边第一个小于该高度的柱子
 * 分治：最大面积分为三部分
 * 1、最小高度 * heights.length 
 * 2、不包含最小高度
 *     2.1： 最小高度左边
 *     2.2： 最小高度右边
 * @param heights
 */
const largestRectangleArea = (heights: number[]) => {
    const left: number[] = [], right: number[] = []
    const l = Array<number>(heights.length).fill(-1)
    const r = Array<number>(heights.length).fill(heights.length)
    for (let i = 0; i < heights.length; i++) {
        while (left.length && heights[i] <= heights[left[left.length - 1]]) {
            left.pop()
        }
        if (left.length) {
            l[i] = left[left.length - 1]
        }
        left.push(i)
    }
    for (let i = heights.length - 1; i >= 0; i--) {
        while (right.length && heights[i] <= heights[right[right.length - 1]]) {
            right.pop()
        }
        if (right.length) {
            r[i] = right[right.length - 1]
        }
        right.push(i)
    }
    let res = 0
    for (let i = 0; i < heights.length; i++) {
        res = Math.max(res, (r[i] - l[i] - 1) * heights[i])
    }
    return res
}


/**
 * @param heights
 */
const largestRectangleArea1 = (heights: number[]) => {
    const left: number[] = [], right: number[] = []
    const l = Array<number>(heights.length).fill(-1)
    const r = Array<number>(heights.length).fill(heights.length)
    for (let i = 0; i < heights.length; i++) {
        while (left.length && heights[i] <= heights[left[left.length - 1]]) {
            // 参考每日温度正向遍历
            r[left.pop() as number] = i
        }
        if (left.length) {
            l[i] = left[left.length - 1]
        }
        left.push(i)
    }
    let res = 0
    for (let i = 0; i < heights.length; i++) {
        res = Math.max(res, (r[i] - l[i] - 1) * heights[i])
    }
    return res
}


assert.equal(largestRectangleArea([3, 2, 5, 4, 6, 1, 4, 2]), 12, 'fail')
assert.equal(largestRectangleArea1([3, 2, 5, 4, 6, 1, 4, 2]), 12, 'fail')
assert.equal(largestRectangleArea([2, 1, 5, 6, 2, 3]), 10, 'fail')
assert.equal(largestRectangleArea1([2, 1, 5, 6, 2, 3]), 10, 'fail')


/**
 * 矩形中最大矩形面积
 * lc85
 * 给定一个仅包含 0 和 1 、大小为 n x m 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
 * 可以将矩阵转换为n个m长度的直方图，然后统计直方图中最大矩形面积
 */
const maximalRectangle = (matrix: number[][]) => {

};
