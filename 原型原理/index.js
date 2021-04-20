/* 
    所有对象都有原型，包括原型本身

*/

/* function Teacher(){
  this.succ = {
    baidu:12,
    tengxun:36
  }
  this.age = 30
}
var teacher = new Teacher()

function Student(){
  this.pSkill = 'HTML'
}
Student.prototype = teacher;

var student = new Student()

// console.log(student.__proto__)
student.succ.baidu = 50;
// teacher的succ会变，因为此时的succ是引用值
student.age++;
console.log(student)
// student多了一个age，age=31。teacher不变。因为此时teacher此时是引用值
console.log(student.__proto__) */

/* function Car(){
  this.brand='奔驰'
}
Car.prototype = {
  brand:'宝马',
  intro:function(){
    console.log('我是'+this.brand)
  }
}
var car = new Car()
car.intro(); // 打印宝马，因为实例对象时候，this指向了实例对象本身 */

/* 
  Object.create(对象,null)
  Object.create提供自定义原型的功能，不需要使用系统自带的原型

  把另外对象作为当前对象的原型存在，这时候用Object.create
*/
var test = {
  num:1
}
var a = Object.create(test)
// console.log(a)
// console.log(a.__proto__)

var obj1 = Object.create(null);
// console.log(obj1);
obj1.num = 1;
var obj2 = Object.create(obj1);
// console.log(obj2);
// console.log(obj2.num);


/* 
    对象原型里有一个toString方法需要记住
*/
var obj = Object.create(null);
obj.num = 2;

var newObj = {
  num:3
}
var a = newObj.toString()