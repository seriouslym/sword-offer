### 滑动窗口模板
```typescript
while (r < length) {
    // 1、扩充右边界 更新窗口状态
    // 2、检查是否需要收缩左边界
    while (conditon) {
        // 收缩左边界 更新窗口状态
        l++
    }
    r++
}
```
答案的更新可能在收缩过程中，也有可能在扩充过程中。通常情况下，求最短等问题在收缩时候更新，求总数、最长等问题在扩充时更新  
扩充： 
+ 乘积小于k的子数组 [numSubarrayProductLessThanK](array/double-point.ts)
+ 不含重复字符的最长字串[lengthOfLongestSubstring](string/double-point.ts)

收缩：
+ 和大于等于k的最短子数组[shortestSubarray](array/double-point.ts)
