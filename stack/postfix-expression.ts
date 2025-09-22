
type opType = '+' | '-' | '*' | '/'
const comparePriority = (op1: opType, op2: opType) => {
    const map = {
        '+': 0,
        '-': 0,
        '*': 1,
        '/': 1
    }
    return map[op1] > map[op2]
}
const getPostfixExp = (exp: string) => {
    const op = ['+', '-', '*', '/'] as string[]
    const nums = Array.from({length: 10}, (v, k) => k + '')
    const stack = [] as opType[]
    const res = [] as string[]
    for (let i = 0; i < exp.length; ) {
        if (nums.includes(exp[i])) {
            let j = i
            while (nums.includes(exp[j])) {
                j++
            }
            res.push(exp.slice(i, j))
            i = j
            continue
        }
        if (op.includes(exp[i])) {
            // 栈顶元素优先级大于当前op出栈 （优先被计算）
            while (stack.length && comparePriority(stack[stack.length - 1], exp[i] as opType)) {
                res.push(stack.pop() as opType)
            }
            stack.push(exp[i] as opType)
        }
        i++
    }

    while (stack.length) {
        res.push(stack.pop() as string)
    }
    return res
}


console.log(getPostfixExp('1*211+  22111'));