/* 
  特点：自动执行，执行完成后立即释放内存
  一般用于初始化函数

  英文名IEEA

  有两种写法：
  (function(){

  })()
   //前面的括号里面是一个函数声明，加上括号就变成函数表示式了，后面的括号其实就是函数的执行符号
   //一个语句加上括号就是表达式了。不管是什么，被括号包裹了都会变成表达式    
   //一定是执行符号才能被执行符号执行 

   函数表达式：
              var a = fuction(){}
              (function(){})

  w3c的建议：
  (function(){

  }())

  立即执行函数没必要写函数名，因为一执行完毕就销毁了。

  立即执行函数也可以带参数：
  (function(a,b){
    console.log(a + b)
  })(9,2) 

  函数声明变成表达式的方法：

  1.给函数外部加()
  2.在函数前面添加  +  -  ！ ||  &&


  立即执行函数也是有返回值的，需要用一个变量来接收

  
*/

/* (function(a,b){
  console.log(a + b)
})(9,2)  */

/* var num = (function(a,b){
  return a + b
})(8,2) 
console.log(num) */

// var a = function(){
//   // console.log(2)
//   return 3
// }()
// console.log(a)

// 经典面试题

function  test(){
  var a = [];
  for(var i=0;i<10;i++){
    a[i] = function(){
      console.log(i + "   ")
    }
  }
  return a
}

var myArr = test()
for(var j=0;j<10;j++){
  myArr[j]();
}

/* 
  结果打印10个10  

  原因：
  在test函数里，当执行到for循环时，每次循环都会把函数赋值给a
  数组，但是这个函数没有执行。

  // test的for循环可以改写，所以此时的test函数可以写成：
  function  test(){
    var a = [];
    var i = 0;
    for(;i<10;){
      a[i] = function(){
        console.log(i + "   ")
      };
      i++;
    }
    return a
  }
  当循环条件不满足时，此时i已经是10

  这个函数发生了闭包，将a返回出去。a数组里存放的是是个函数，每个函数都是
  function(){
    console.log(i + "")
  }
  而此时i都是10.因此在执行这个函数的时候，得到的就是10个10

*/

// 要想达到最初的效果(问题的根源是函数不执行，解决办法从函数执行上去想即可)，有以下几种办法：

// 1.
/* function  test(){
  var a = [];
  for(var i=0;i<10;i++){
    a[i] = (function(){
      console.log(i + "   ")
      return i
    })()
  }
  return a
}
var myArr = test()
console.log(myArr) */

// 2.这种做法是立即执行函数传参(最常用)
/* function  test(){
  var a = [];
  for(var i=0;i<10;i++){
    (function(j){ //j是形参，i是实参
      //将实参传入进去之后，会将a[j] 和console.log(j + "   ")里的j都替换掉
      // 这里实际上循环的就是立即执行函数而不是函数表达式
      // 这是实际上是因为立即执行函数的AO被arr[i]保存了，所以j也被保存了
      a[j] = function(){
        console.log(j + "   ")
      }
    })(i)
  }
  return a
}

var myArr = test()
for(var j=0;j<10;j++){
  myArr[j]();
} */