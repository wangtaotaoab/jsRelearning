function Car(opt){
  this.color = opt.color;
  this.brand = opt.brand;
  return this
}
var car1 = new Car({
  color:'red',
  brand:'Benz'
});

console.log(car1.color)

/* 
    Car构造函数被实例化的时候，相当于普通函数被执行的时候，这个时候，Car函数也有AO，此时的AO为
    AO一执行，自动保存this对象。
    

    构造函数被执行 ->  产生AO   ->  AO自动保存this

    当new的时候，构造函数里的内容就跑完了
    AO = {
      this : {
        color：color,
        brand: brand
      }
    }

    在外界，通过car1.color能访问到color，说明了this=car1实例对象。this指向car1.所以能通过car1获取构造函数里的属性
 */

  /* 
    一开始的时候，定义的时候

    GO = {
      Car:function(){}
    }

    当开始产生实例化对象的时候，就会产生AO(实例化对象也是执行函数的一种方式)

    AO = {
      由于是通过实例化new出来的，有一个this对象
      执行函数的时候，有this.color = opt.color;将this的属性都放在this对象里
      this:{
        color:opt.color,
        brand:opt.brand
      }
    }
    在构造函数里，隐藏了一个return 这个函数将this返回出去，即

    return this
    注：在这个地方，return出去的一定要是一个引用值(对象、数组、函数) 。原始值无效


    var car1 = new Car({
      color:'red',
      brand:'Benz'
    });
    
    将实例出来的结果交给了car1变量。即在GO中

    GO = {
      Car:function(){},
      car1:{
        color:'red',
        brand:'Benz'
      }
    }

    new相当于创建了this对象
  */



