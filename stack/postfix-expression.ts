const op = ['+', '-', '*', '/'] as const
type opType = typeof op[number]
const comparePriority = (op1: opType, op2: opType) => {
    const map = {
        '+': 0,
        '-': 0,
        '*': 1,
        '/': 1
    }
    return map[op1] >= map[op2]
}
const getPostfixExp = (exp: string) => {
    const nums = Array.from({length: 10}, (v, k) => k + '')
    const stack = [] as (opType|string)[]
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
        if (op.includes(exp[i] as opType)) {
            // 栈顶元素优先级大于当前op出栈 （优先被计算）
            while (stack.length && comparePriority(stack[stack.length - 1] as opType, exp[i] as opType)) {
                res.push(stack.pop() as opType)
            }
            stack.push(exp[i] as opType)
        } else if (exp[i] === '(') {
            stack.push(exp[i])
        } else if (exp[i] === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                res.push(stack.pop() as string)
            }
            stack.pop()
        }
        i++
    }
    while (stack.length) {
        res.push(stack.pop() as string)
    }
    return res
}


const computePostfixExp = (tokens: string[]) => {
    const numStack: number[] = []
    for (let token of tokens) {
        if (op.includes(token as opType)) {
            let r = numStack.pop(), l = numStack.pop()
            if (r === undefined || l === undefined) {
                throw new Error('异常情况')
            }
            let tmp: number = 0
            switch (token) {
                case '+':
                    tmp = l + r
                    break  
                case '-':
                    tmp = l - r
                    break
                case '*':
                    tmp = l * r
                    break
                case '/':
                    tmp = l / r
                    break
                default:
                    break
            }
            numStack.push(tmp)
        } else {
            numStack.push(+token)
        }
    }
    return numStack.pop()
}

const tokens = getPostfixExp('2*(2+2)/2')
console.log(computePostfixExp(tokens))
