/* function test(){
  var a = 1;
  function pul(){
    a++;
    console.log(a)
  }
  return pul();
}

var plu = test();
plu; */

// 作业：写一个插件，然后传值，能够在里面做加减乘除

/* ;(function(){
  function Compute(opt){
    this.x = opt.firstNum;
    this.y = opt.secondNum;
  }
  Compute.prototype = { //方法要写到原型上，因为方法是特定的思维，不会改变。把定值卸载原型上
    add:function(){
      return this.x + this.y
    },
    minus:function(){
      return this.x - this.y
    },
    mul:function(){
      return this.x * this.y
    },
    div:function(){
      return this.x / this.y
    }
  }
  window.Compute = Compute;
})();

var compute = new Compute({
  firstNum: 12,
  secondNum: 13
});

var res = compute.add() */

/* ;(function(){
  function Compute(){}
  Compute.prototype = { //方法要写到原型上，因为方法是特定的思维，不会改变。把定值卸载原型上
    add:function(a,b){
      return a + b
    },
    minus:function(a,b){
      return a - b
    },
    mul:function(a,b){
      return a * b
    },
    div:function(a,b){
      return a / b
    }
  }
  window.Compute = Compute;
})();

var compute = new Compute();

var res = compute.add(1,2)
console.log(res) */