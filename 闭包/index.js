/* 
  1. a函数被定义时，系统生成[[scope]]属性，[[scope]]保存该函数的作用域，该作用域链的第0位存储当前环境下的全局执行期上下文GO，GO里存储全局下的所有对象，其中包含函数a和全局变量c
  GO = {
    c:undefined,
    a:function(){}
  }

  2. a函数被执行时(前一刻)，函数test2被定义。此时a函数产生函数执行期上下文AO。
  [
    0:{
      a:undefined, -> 1
      b:function(){}
    },
    1:{
      c:undefined,
      a:function(){}
    }
  ]
  3. 函数b被执行时，b函数产生函数执行期上下文AO
  [
    0:{
      b:2
    },
    1:{
      a:undefined, -> 1
      b:function(){}
    },
    2:{
      c:undefined,
      a:function(){}
    }
  ]

  系统里有引用计数，只要有指针指向引用，垃圾回收机制就不会回收堆上的内存

  当内部函数被返回到外部并保存时，一定会产生闭包。闭包会产生原来的作用域链不释放，过度的闭包，可能会导致内存泄露，或加载过慢。(本来应该被销毁的东西一直占用内存，有被泄露的可能)

  内存泄露本意是申请的内存空间没有被正确释放，导致后续程序里这块内存被永远占用（不可达），而且指向这块内存空间的指针不再存在时，这块内存也就永远不可达了，内存空间就这么一点点被蚕食，借用别人的比喻就是：比如有10张纸，本来一人一张，画完自己擦了还回去，别人可以继续画，现在有个坏蛋要了纸不擦不还，然后还跑了找不到人了，如此就只剩下9张纸给别人用了，这样的人多起来后，最后大家一张纸都没有了。

  内存溢出是指存储的数据超出了指定空间的大小，这时数据就会越界，举例来说，常见的溢出，是指在栈空间里，分配了超过数组长度的数据，导致多出来的数据覆盖了栈空间其他位置的数据

*/

/* function breadMgr(num){
  var breadNum = num || 10
  function supply(){
    breadNum += 10
    console.log(breadNum)
  }

  function sale(){
    breadNum --;
    console.log(breadNum)
  }

  return {
    supply,
    sale
  }
}

var breadMgr = breadMgr(50)
breadMgr.supply()
breadMgr.sale() */

function sunSched(){
  var sunSched = ''
  var operation = {
    setSched:function(thing){
      sunSched = thing
    },
    showSched:function(){
      console.log("这个是" + sunSched)
    }
  }
  return operation
}
var aa = sunSched()
aa.setSched("哈哈哈哈哈")
aa.showSched()


