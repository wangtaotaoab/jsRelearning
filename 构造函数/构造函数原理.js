// 累加器
/* function test(){
  var num = 0;
  function add(){
    console.log(++num)
  }
  return add;
}
var test1 = test();
test1() */

// 缓存机制
function myClass(){
  var students = [];

  var operation = {
    join:function(name){
      students.push(name);
      console.log(students);
    },
    leave:function(name){
      const num = students.findIndex((value)=>{
        return value == name
      })
      num !== -1 ? students.splice(num,1) : ''

      /* for(var i = 0;i<students.length;i++){
        var item = students[i]; // 这一步是用来优化性能的
        if(item === name){
          students.splice(i,1)
        }
      } */
      /* var num = students.indexOf(name);
      num !== -1 ? students.splice(num,1) : ''; */
      console.log(students);
    } 
  }
  
  return operation
}

var obj = myClass()
obj.join("张三")
obj.join("李四")
obj.join("王五")
obj.leave("李四")