/**
 * 双指针等相关问题
 */

import assert from "node:assert";

/**
 * 有序数组 找到两个数的和为target 返回下标数组[i1,i2]
 * @param nums
 * @param target
 */
const twoSum = (nums: number[], target: number) => {
    const res : number[][] = []
    let l = 0, r = nums.length - 1
    while (l < r) {
        const tmp = nums[l] + nums[r]
        if (tmp < target) {
            l++
        } else if (tmp > target) {
            r--
        } else {
            res.push([nums[l], nums[r]])
            let tmp = nums[l]
            while (l < r && tmp === nums[l]) {
                l++
            }
        }
    }
    return res
}


/**
 * 三数之和
 * 给你一个整数数组 nums , 判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k , 
 * 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
 * lc15
 * @param nums
 */
const threeSum = (nums: number[]) => {
    const twoSum = (arr: number[], index: number) => {
        const res: number[][] = []
        let left = index + 1, right = arr.length - 1
        while (left < right) {
            if (arr[left] + arr[right] + arr[index] === 0) {
                res.push([arr[index], arr[left], arr[right]])
                let tmp = arr[left]
                while (arr[left] === tmp && left < right) {
                    left++
                }
            } else if (arr[left] + arr[right] + arr[index] > 0){
                right--
            } else {
                left++
            }
        }
        return res
    }
    // js 排序默认字符序排列 需传入cmp函数
    nums.sort((a, b) => a - b)
    let res: number[][] = []
    let i = 0
    while (i < nums.length) {
        const tmp = twoSum(nums, i)
        if (tmp.length) {
            res = [...res, ...tmp]
        }
        let num = nums[i]
        while (nums[i] === num && i < nums.length) {
            i++
        }
    }
    return res
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10]));


/**
 * 和大于等于k的最短子数组
 * 输⼊⼀个正整数组成的数组和⼀个正整数k，请问数组中
 * 和⼤于或等于k的连续⼦数组的最短⻓度是多少？如果不存在所有数
 * 字之和⼤于或等于k的⼦数组，则返回0。例如，输⼊数组[5，1，4，
 * 3]，k的值为7，和⼤于或等于7的最短连续⼦数组是[4，3]，因此输出它的⻓度2
 * 
 * lc862：不保证是正整数
 */

const shortestSubarray = (nums: number[], k: number) => {
    let l = 0, r = 0, res = Number.MAX_SAFE_INTEGER, sum = 0
    while (r < nums.length) {
        sum += nums[r]
        while (l <= r && sum >= k) {
            sum -= nums[l]
            res = Math.min(res, r - l + 1)
            l++
        }
        r++
    }
    return res === Number.MAX_SAFE_INTEGER? -1: res
};

//
console.log(shortestSubarray([5, 1, 4, 3], 7));
console.log(shortestSubarray([1], 1));
console.log(shortestSubarray([1, 2], 4));
console.log(shortestSubarray([-1, 2, 2], 3));


/**
 * 滑动窗口
 * 收缩更新：用于“找最优解”，窗口满足条件后立即尝试优化。
 * 扩张更新：用于“统计总数”，利用窗口性质直接累加新增的子数组
 */

/**
 * 乘积小于k的子数组
 * 输⼊⼀个由正整数组成的数组和⼀个正整数k，请问数组
 * 中有多少个数字乘积⼩于k的连续⼦数组？例如，输⼊数组[10，5，2，6]，k的值为100，有8个⼦数组的所有数字的乘积⼩于100，它们
 * 分别是[10]、[5]、[2]、[6]、[10，5]、[5，2]、[2，6]和[5，2，6]。
 */

const numSubarrayProductLessThanK = (nums: number[], k: number) => {
    let product = 1, l = 0, r = 0, res = 0
    while (r < nums.length) {
        product = product * nums[r]
        while (l <= r && product >= k) {
            product /= nums[l]
            l++
        }
        res += r >= l ? (r - l + 1): 0
        r++
    }
    return res
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100))

