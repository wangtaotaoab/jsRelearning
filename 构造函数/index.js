// 自定义构造函数
/* 
   自定义构造函数和一般函数的区别：
      1.大驼峰
      2.

*/

// function Teacher(){
//   /* 
//     这里的this在没有实例化对象之前，根本不存在。实例化对象之后，this指向实例化对象。

//     原因是：函数在定义的时候，会产生GO。但是不会看函数内部的东西。所以this没有生成。
//   */
//   this.name = "王涛";
//   this.age = 89;
//   this.eat = function(){
//     console.log("我要吃饭")
//   }
//   this.cut = function(){
//     this.age --
//   }
// }


/* 
  实例化之后，this才生成
*/
/* var teacher1 = new Teacher() 
teacher1.cut()
teacher1.cut()
console.log(teacher1)
var teacher2 = new Teacher() 
teacher2.cut()
console.log(teacher2) */

/* function Teacher(name,age){
  this.name = name;
  this.age = age;
  this.eat = function(){
    console.log("我要吃饭")
  }
  this.cut = function(){
    this.age --
  }
}
var a1 = new Teacher("张三",56)
var a2 = new Teacher("李四",26) */

/* 
    推荐这种写法，因为Vue里面，实例化Vue的时候也是通过对象的方法。
    因为通过这种方法，
      1.对于维护人员和二次开发来说，容易维护和开发
      2.直接通过函数传参的方式，如果参数很多，那么就可能对出现缺漏现象。

*/
/* function Teacher(opt){
  this.name = opt.name;
  this.age = opt.age;
  this.eat = function(){
    console.log("我要吃饭")
  }
  this.cut = function(){
    this.age --
  }
}
var a1 = new Teacher({
  name:"张三",
  age:12
})
var a2 = new Teacher({
  name:"李四",
  age:12
}) */


// 作业

// 写一个构造函数，完成数字相加和想乘的功能
function Compute(){
  const args = arguments;
  this.plus = function(){
    var res = 0;
    for(var i=0;i<args.length;i++){
      var item = args[i];
      res += item
    }
  }
  this.times = function(){

  }
}
var compute = new Compute(2,4,6)