/* 
  * 递归的两个要素：规律、出口
*/

// 做一个阶乘函数

function fact(n){
  if(n === 1) return 1
  return n * fact(n - 1)
}
console.log(fact(6))

/* 

  规律：  
    5! = 5 * 4 * 3 * 2 * 1  = 5 * (4 * 3 * 2 * 1) = 5 * 4!
    4! = 4 * 3 * 2 * 1  = 4 * (3 * 2 * 1) = 4 * 3!
    3! = 3 * 2!
    2! = 2 * 1!
    return n * fact(n - 1)
  
  出口: 
    1! = 1

    fact(5) = 5 * fact(4) 
    fact(4) = 4 * fact(3) 
    fact(3) = 3 * fact(2) 
    fact(2) = 2 * fact(1) 
    fact(1) = 1 

    第一遍循环下来 5的时候调用4的阶乘  4调用三的阶乘 以此类推  都没有返回值

    直到找到出口1的阶乘为1时，再一次向上返回返回值

    fact(1) = 1 
    fact(2) = 2 * fact(1) = 2
    fact(3) = 3 * fact(2) = 6
    fact(4) = 4 * fact(3) = 24
    fact(5) = 5 * fact(4) = 120
*/