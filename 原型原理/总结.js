/* 
    1.原型在构造函数之上，是构造函数的一个属性
    2.创建实例之后，可以继承构造函数的原型
    3.构造函数起作用的最根本操作时new，不new的时候，原型是不存在的。原型要在构造函数上生成(即实例化出来的对象继承构造函数的原型属性)
*/

function Person(){

}
Person.prototype.name = 'wangtao';
var p = new Person()