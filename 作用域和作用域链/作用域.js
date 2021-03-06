/* 对象具有作用域，函数也有作用域，函数的作用域之间是不想关的 */

// 对象
/* 
  对象有一些属性是我们无法访问的，即：js引擎内部固有的隐士属性。也叫做私有属性。

  域[[scope]]
    1. 函数创建时，生成的一个js内部的隐式属性
    2. 函数存储作用域链的容器，作用域链
          作用域链
            作用：用来保存AO函数执行期上下文,GO全局执行期上下文 
            执行期：函数执行完毕后，AO需要销毁，从新执行再新生成一个AO ， AO是一个即时的存储容器
            本质：就是将AO、GO形成链式，从上到下排列出来
    3. 
*/
/* let obj = {
  name:"王涛",
  adress:"南宁",
  work:function(){
    console.log("吃饭睡觉打豆豆")
  }
}
console.log(obj.name);

// 函数
function test(a,b){
  
}
console.log(test) */

/* 
  函数也是一种对象，是一种引用类型

  属性： name,length,prototype

*/

function a(){
  function b(){
    var b = 2;
  }
  var a = 1;
  b()
}
var xx = function(){
  console.log(123)
}
var c = 3;
a();

/* 
  GO就是GO，它不属于任何函数
*/
/* 
  当a函数被定义时，系统生成[[scope]]属性。[[scope]]保存该函数的作用域链，
  该作用域链的第0位存储当前环境下的全局执行期上下文GO(拿到的是GO的引用地址)，
  GO里存储全局下的所有对象(包括到document、this、window等)，其中包含函数a和全局变量c
*/

/* 
  当函数被执行时(前一刻)，作用域链的顶端(第0位)存储a函数生成的函数执行期上下文AO，同时第1位存储函数的GO。
  查找变量是到a函数存储的作用域链中从上到下查找(从第0位开始乡下寻找)。AO存储的对象有this、arguments等
*/

/* 
  外层函数被执行的时候，内层函数被定义
  当A函数执行的时候，会导致B函数会被定义。B含少数被定义时， 是在a函数的环境下，
  所以b函数这时的作用域链就是a函数被执行期的作用域链(和a函数的作用域链是完全一样的)

  // b函数的GO永远是拿GO的引用

  GO是一个对象，保存在堆中。无论是B函数也好，A函数也好，拿到的都是GO指向堆的地址

*/

/* 
  B函数被执行时(前一刻)。生成函数B的[[scope]]，存储函数B的作用域链，顶端第0位存储B函数的AO，a函数的AO和全局的GO依次向下排列

*/

/* 
    1. 全局执行的前一刻的时候，会生成GO，GO里存储的是全局下的所有对象(包括到document、this、window等)(此时不完整,只要名字，函数也只是显示外层的，里面没东西，注意函数表达式还没有定义)
        GO = {
          c: undefined,
          xx:undefined,// 函数表达式还没有定义
          a: function a(){....} //这个时候，a函数里面的东西先不看
        }

    2. 全局执行，会给GO里的变量赋值和定义函数(全局执行的时候，函数就会被定义  )
        GO = {
          c: 3,
          xx:function(){},// 函数表达式正式赋值
          a: function a(){} // 函数被定义   
        }
    3. 函数被定义的时候，生成[[scope]]属性，该属性保存的是该函数的作用域链。  作用域链相当于一个数组，此时第0位是保存全局执行上下文GO
    (GO是一个对象，保存在堆中。这里拿到的GO的引用地址。所有的作用域拿到的都是GO的引用地址(浅拷贝))
        函数为什么在被定义的时候，就要存在GO? 因为每一个函数都必须要有GO。只有被定义的时候，生成[[scope]]，这个时候就要把GO存进去。这样才能保证当前函数和里层函数都有GO

    4. 函数被执行的时候(执行的前一刻)，作用域链的顶端(第0位)存储a函数生成的函数执行期上下文AO，同时第1位存储函数的GO。
        查找变量是到a函数存储的作用域链中从上到下查找(从第0位开始乡下寻找)。AO存储的对象有this、arguments等
    
        4.1 外部函数被执行的时候，内部函数会被定义。此时内部函数生成[[scope]]属性，内部函数被定义时，时在外部环境下，所以此时内部函数的作用域链就是外部函数执行期的作用域链
    
*/

/* 
    问题：
    1. a函数里的AO和B函数里的a的AO是一样的吗？
        一样的，因为这两个地方使用的都是a函数的AO对象的引用地址
    2. 为什么外面的函数无法访问到函数内部的变量？
        因为外部函数没有内部函数的AO环境。内部函数执行的时候，引用了外部环境的函数执行上下文AO，所以有外部环境的AO，所以内部环境可以访问外部环境的变量。

*/


/* 

    GO = {
      c:undefined,
      a:function(){},

    }

    AO = {

    }

*/

/* function a(){
  function b(){
    function c(){

    }
    c()
  }
  b()
}
a() */

/* 
  a定义: a.[[scope]] -> 0:GO
  a执行: a.[[scope]] -> 0:a.AO  1:GO

  b定义：b.[[scope]] -> 0:a.AO  1:GO
  b执行：b.[[scope]] -> 0:b.AO  1:a.AO  2:GO

  c定义：c.[[scope]] -> 0:b.AO  1:a.AO  2:GO
  c执行：c.[[scope]] -> 0:c.AO  1:b.AO  2:a.AO  3:GO

  c结束：c.[[scope]] -> 0:b.AO  1:a.AO  2:GO 
  b结束: b.[[scope]] -> 0:a.AO  1:GO   -> c.[[scope]]销毁
  a结束：a.[[scope]] -> 0:GO -> b.[[scope]]销毁
*/

/* 
   GO = {
     a:functoin(){}
   }

   a = [
     aAO:{
       b:function(){}
     },
     GO:{
       a:functoin(){}
     }
   ]

    b = [
      bAO:{
        c:function(){}
      }
      aAO:{
        b:function(){}
      },
      GO:{
        a:functoin(){}
      }
   ]

    b = [
      cAO:{},
      bAO:{
        c:function(){}
      }
      aAO:{
        b:function(){}
      },
      GO:{
        a:functoin(){}
      }
   ]


*/

