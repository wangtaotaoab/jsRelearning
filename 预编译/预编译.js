/* 
  1.检查通篇是否存在语法错误，如果有误，全部不执行
  2.预编译
  3.解释一行执行一行
*/


// 函数声明整体提升，变量只有声明提升，赋值是不提升的

console.log(a);
function a(a){
  var a = 2;
  var a = function(){
    console.log(33)
  };
}
var a = 1