/* var a = (1,2)
console.log(a) // 2 有括号，中间加逗号隔开，打印的是最后一个


var fn = (
    function test1(){
        return 1
    },
    function test2(){
        return "2"
    }
)();

console.log(typeof(fn)) //string */
/* 
    原因：
    fn是一个函数表达式，用两个括号括起来，是一个立即执行函数，前一个括号是函数表达式，
    里面的test1和test2用括号隔开。通过逗号运算符，所以只会执行最后的那个，所以打印的是“2”，即字符串
*/


var a = 10

if(function b(){}){
    a += typeof(b)
}
console.log(a)

(function b(){}) //这个函数时在括号里，变成了函数表达式，函数名被忽略了 所以b是undefined