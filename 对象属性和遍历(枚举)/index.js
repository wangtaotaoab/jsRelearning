/* 
  在JavaScript中，枚举是相当于遍历

  for循环可以遍历数组，对象要使用for in
*/

/* var opt = {
  brand:'ssdaf',
  name:'adsjfsalk',
  age:24,
  lang:'1564782',
  ak:'asdfassdfassw'
}
for(let key in opt){
  console.log(key);
  console.log(opt[key]);
  // 不能直接写 opt.key -> opt['key] -> undefined
} */

/* 

  hasOwnProperty() 只找对象自身的属性，排除掉原型上的自定义的属性(就是排除自己在原型上加上去的属性)
*/

/* 
function Car(){
  this.brand = 'Benz',
  this.color = 'red'
}
Car.prototype = {
  age:25,
  name:'张三'
}
var car = new Car()
for(let i in car){
  // console.log(i);
  if(car.hasOwnProperty(i)){
    console.log(i)
  }
} */


/* let obj = {
  name:'张三',
  age:40,
  eat:function(){
    console.log("哈哈哈哈")
  }
}
// in 不排除原型行的自定义属性
console.log('brand' in obj); //false   in这里必须要写字符串，不然会报错
console.log('eat' in obj); //true */

/*
  instanceof 判断实例对象是否属于构造函数构造出来的
*/

/* function Car(){
  this.brand = 'Benz',
  this.color = 'red'
}

var car = new Car();
console.log(car instanceof Car);
console.log(car instanceof Object);
console.log([] instanceof Array);
console.log([] instanceof Object);
console.log({} instanceof Object); */

/* 
  项目中，一般使用使用  Object.prototype.toString.call()来判断类型

*/
var a = [];
var str = Object.prototype.toString.call(a);
console.log(str);

/* 本质：
Object.prototype = {
  toString:function(){
    this.toString(); // this指向对象本身
  }
}
当call(a)时，将a替换成this  将a用字符串的形式输出出来 */