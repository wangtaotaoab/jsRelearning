// 暗示全局变量  imply global  variable 

/* 

  js存在全局域window，是一个对象。所有全局的东西都是window对象的属性。

    如： var a = 3
        b = 2
        console.log(b === window)

*/

/* function test(a){
  console.log(a);
  var a = 1;
  console.log(a);
  function a(){}
  console.log(a);
  console.log(b);
  var b = function(){}
  console.log(b);
  console.log(c);
  function c(){}
  console.log(c);

  console.log("--------------------------")
  console.log(a)
  console.log(b)
  console.log(c)
}
test(2) */

/* 
  AO  activation object  活跃对象(函数上下文)

  步骤： 
    1. 创建一个AO对象
      AO = {}
    2. 寻找函数的形参和变量声明，放入AO对象
      AO = {
        a:undefined,
        b:undefined
      }
    3. 将实参的值赋值给形参
      AO = {
        a:2,
        b:undefined
      }
    4.寻找函数体的函数声明，赋值函数体
      AO = {
        a:function a(){},
        b:undefined,
        c:function c(){}
      }
    5.执行函数
      AO = {
        a:1, //在a里重新赋值
        b:function(){},
        c:function c(){}
      }
*/

/* 
    1. 寻找形参和变量声明(变量声明的提升)
    2. 实参值赋值给形参
    3. 寻找函数声明、赋值
    4. 执行函数
    
*/


function aa(a,b){
  console.log(a) //1
  c = 0;
  var c;
  a = 4;
  b = 6;
  console.log(b); //6 
  function b(){}
  function d(){}
  console.log(b) //6
}

aa(1,1)

// 1
// 6
// 6


/* 

  AO = {
    c:undefined, -> 0
    a:undefined, -> 1 -> 4
    b:undefined, -> 1 -> 6
    d:function(){}, 
  }

*/


// 全局上下文  GO global object

/* 

  步骤：
    1. 寻找变量声明
    2. 寻找函数声明
    3. 执行

*/

// var a = 1
// function a(){
//   console.log(2)
// }
// console.log(a)

/* 

  在浏览器中，GO就是window
  GO = {   
    寻找变量声明      寻找函数声明       执行
    a:undefined  ->  function(){}  ->  1
  }

*/

// console.log(a,b)

// function a(){}
// var b = function(){}
// [Function: a] undefined


// function a(){
//   var a = b = 1
// }
// a()
// console.log(a)
// console.log(b)

/* 
  AO = {
    a:undefined, -> 1
  }

  GO = {
    b:undefined, -> 1
  }

*/

// var b = 3
// console.log(a) //function(){}
// function a(a){
//   console.log(a); //function(){}
//   var a = 2
//   console.log(a); // 2
//   function a(){
//     var b = 5
//     console.log(b) //不执行
//   }
// }
// a(1)

/* 
  先找变量声明，函数声明，执行
  GO = {
    b:undefined -> 3
    a:function(){}
  }

  变量声明，形参赋值，函数声明，函数赋值，执行
  AO = {
    a: undefined, -> 1 ->function(){} -> 2
    
    AO:{
      b:undefined,->5
    }
  }


*/


// function gg(){
//   console.log(b); //undefined
//   if(a){
//     var b = 2;
//   }
//   c = 3;
//   console.log(c)
// }

// var a;
// gg()
// a = 1;
// console.log(a);

/* 
  GO = {
    a: undefined, -> 1 
    gg:function(){},
    c:undefined -> 3
  }

  AO = {
    b:undefined,// b虽然是在if里，但是要写
    -> 2
  }
*/


function test(){
  return a;
  a = 1;
  function a(){}
  var a = 2
}
console.log(test())

/* 
  1. 形参和变量声明
  2. 实参赋值给形参
  3. 寻找函数声明、函数赋值
  4. 执行函数
  AO = {
      a:undefined, -> function(){} 有return了，不会往下走，终止了，即a为函数
  }
*/

/* 

  GO = {
    a:undefined, -> 1
    test:function(){}
  }

  AO = {
    a:undefined, -> 4
    b:undefined, -> undefined
    c:undefined, -> undefined
    f:undefined, -> 5
    e:undefined, -> 1 -> function(){} -> 2      
  }
*/