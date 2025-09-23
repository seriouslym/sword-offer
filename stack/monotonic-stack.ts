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
console.log('dailyTemperatures test passed')


/**
 * 直⽅图最⼤矩形⾯积
 * lc84
 * @param heights
 */
const largestRectangleArea = (heights: number[]) => {
    
}
