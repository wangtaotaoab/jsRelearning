/* 
  原始值没有自己的方法和属性
    一个数字，经过new Number之后，就会变成一个对象。可以添加属性和方法
    经过运算之后又返回了原始值

    内置的构造函数总共有三种：new Number、 new String 、 new Boolean
*/
/* var a = 1;
console.log(1)
var b = new Number(a)
b.length = 2
console.log(b)
var d = b + 1;
console.log(d) */

// var a = 3
// a.len = 5
// console.log(a.len)

/* 
  1. 发现原始值添加属性，将原始值转化成对象  new Number(a).len = 3
  2. 转化成功之后，发现变量接受
  3. 删除这个对象  delete a.len
  4. 打印 a.len   为 undefined
*/

/* 
    对于字符串
    是将它先转化成对象，再打印长度
    var str = 'asdfafas'
    console.log(new String(str).length)
*/
// var str = 'asdfafas'
// console.log(new String(str).length)

/* 
    截断数组
*/
// var arr = [1,2,3,4,5,6,7]
// console.log(arr)
// arr.length = 5
// console.log(arr)


/* 
    阶段字符串
    1. 发现原始值对属性进行修改，将原始值转化成对象  new String(str).length = 1
    2. 转化成功之后，发现变量接受
    3. 删除这个对象  delete str.length
    4. 打印 str   为原来的值
*/
// var str = "asdfasdf"
// str.length = 1
// console.log(str)


/* function foo1(x){
  console.log(arguments);
  return x;
}
foo1(1,2,3,4,5,6);

function foo2(x){
  console.log(arguments);
  return x;
}(1,2,3,4,5,6)

  // 函数后面不能跟表达式，如果跟了，()里面没有值，就会报语法错误。里面有值，不会报语法错误，但是也不会执行



(function foo3(x){
  console.log(arguments)
  return x
})(1,2,3,4,5,6) */

function b(x,y,z){
  a = 10;
  console.log(arguments[2])
}
b(1,2,3)

/* 
ASCII码的表都是一个字节  表1：0-127  表2： 128-255

UNICODE码 涵盖ASCII码  在256位之后，都是两个字节 
*/

var str = 'a';
console.log(str.charCodeAt(0));