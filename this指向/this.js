/* 

  Ao:
    1. 寻找变量声明
    2. 将实参赋值给形参
    3. 寻找函数声明、赋值
    4. 执行函数
*/

/* function test(b){
  this.d = b;
  var a = 1;
  function c(){
    console.log(a);
  }
}
test(123)
console.log(this.d); */
/* 
    寻找变量声明
    AO = {
      this:window, // this在预编译的时候，默认指向this
      argument:[],
      a:undefined,
      b:undefined,
      c:function(){}
    }

    形参和实参相对应
    AO = {
      this:window, // this在预编译的时候，默认指向this
      argument:[123],
      a:undefined,
      b:123,
      c:function(){}
    }

    结论：一般函数，this默认指向this
*/


// -----------------------------------------------------------------------------------------------------------------------------
// 构造函数

// function Teat(){
//   this.name = 123
// }
// var a = new Teat();

/* 
    AO = {
      this:window,
      argument:[]
    }

    GO = {
      Teat:function(){},
      a:{}
    }

    当new的时候，构造函数声明了this

    function Teat(){
      this.name = 123
      this = {
        __proto__:Teat.prototype
      }
    }

    这个时候，原本AO的list就被覆盖了，即：
    AO = {
      this:{
        __proto__:Teat.prototype,
        name:123
      }
    }

    这个时候就变成了原型链了
*/

// -----------------------------------------------------------------------------------------------------------------------------
// call / apply
/* 
function Person(name,age){
  this.name = name;
  this.age = age;
}

function Pro(name,age){
  Person.apply(this,[name,age]);
  this.work = 'proms'
}

var p = new Pro("张三",18);
console.log(p); */


// -----------------------------------------------------------------------------------------------------------------------------
// callee / caller

//callee 在哪个函数里就指向哪个函数
/* function test(a,b,c){
  console.log(arguments.callee);
}
test(1, 2, 3); */

/* function sum(n){
  if(n<=1){
    return 1;
  }
  return n + sum(n - 1);
}
console.log(sum(3)); */

/* var sum = (function(n){
  if(n <= 1){
    return 1;
  }
  return n + arguments.callee(n - 1); //这里找不到函数名，用arguments.callee找到当前函数
})(3);
console.log(sum); */

// caller返回当前函数的函数引用
function test1(){
  test2();
}
function test2(){
  console.log(test2.caller);
}
test1();