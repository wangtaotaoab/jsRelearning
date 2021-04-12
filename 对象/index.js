/* const obj = {
  name:"李四",
  age:56,
  sex:'男',
  height:165,
  weight:130,
  eat:function(){
    // obj.weight ++
    // this在对象里，this代表他本身
    this.weight ++
    console.log(obj.weight)
  },
  drink:function(){
    // obj.weight --
    this.weight --
    console.log(obj.weight)
  }
}
// 查
obj.eat()
// console.log(obj)

// 增
obj.haha = '123'
obj.hehe = function(){
  console.log("我要呵呵")
}
// console.log(obj)
obj.hehe()

// 改
obj.height = 166

obj.height = function (){
  console.log("实在是不知道要写什么了")
}
obj.height()

// 删除
delete obj.haha; //删除属性
delete obj.hehe; //删除方法

obj.eat()
obj.drink()
obj.drink() */

/* 
  1.this在对象里，this代表他本身

*/

/* 
  arrayObject.splice(index,howmany,item1,.....,itemX) index删除的小标 howmany删除的个数，如果为0，则不会删除个数。
*/

/* var attendance = {
  students:["李四","赵二","王五","小六子"],
  total:6,
  join:function(name){
    this.students.push(name)
  },
  leave:function(name){
    let num = this.students.findIndex((value)=>{
      return value == name 
    })
    num !== -1 ? this.students.splice(num , 1) : ''
  }
}
attendance.leave("张三")
console.log(attendance.students) */

// 对象字面量
/* var obj = {
  name:'张三'
}
obj.name = "李四" */


// 构造函数
// 系统自带的构造函数，通过new方法

/* 
  注意：构造函数和对象是两码事。对象时通过构造函数new出来的

*/
var obj = new Object() // 通过这种方法和对象字面量的效果是一样的，没有什么优势可言，用的也比较少
obj.name = "张三"
