/**
 * 利用栈模拟过程
 */


/**
 * 小行星碰撞
 * lc735
 * 题⽬：输⼊⼀个表⽰⼩⾏星的数组，数组中每个数字的绝对值表
 * ⽰⼩⾏星的⼤⼩，数字的正负号表⽰⼩⾏星运动的⽅向，正号表⽰向
 * 右⻜⾏，负号表⽰向左⻜⾏。如果两颗⼩⾏星相撞，那么体积较⼩的
 * ⼩⾏星将会爆炸最终消失，体积较⼤的⼩⾏星不受影响。如果相撞的
 * 两颗⼩⾏星⼤⼩相同，那么它们都会爆炸消失。⻜⾏⽅向相同的⼩⾏
 * 星永远不会相撞。求最终剩下的⼩⾏星。例如，有6颗⼩⾏星[4，
 * 5，-6，4，8，-5]，它们相撞
 * 之后最终剩下3颗⼩⾏星[-6，4，8]。
 */
const asteroidCollision = (asteroids: number[]) => {
    const stack: number[] = []
    for (let asteroid of asteroids) {
        while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0 && stack[stack.length - 1] < -asteroid) {
            stack.pop()
        }
        if (!stack.length || stack[stack.length - 1] < 0 || (stack[stack.length - 1] > 0 && asteroid > 0)) {
            stack.push(asteroid)
        } else if (stack[stack.length - 1] === -asteroid){
            stack.pop()
        }
    }
    return stack
}

console.log(asteroidCollision([-2,-1,1,2]));
console.log(asteroidCollision([5,10,-5]));
console.log(asteroidCollision([8, -8]));
console.log(asteroidCollision([10, 2, -5]));
console.log(asteroidCollision([-2,-2,1,-2]));
console.log(asteroidCollision([-2,-1,1,-2]));
console.log(asteroidCollision([-2,2,1,-2]));
