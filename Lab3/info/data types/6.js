let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log( arr );

console.log("-------------------------------------");

function copySorted(ar) {
    return ar.slice().sort();
  }
  
  let ar = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(ar);
  
  console.log( sorted );
  console.log( ar );

  console.log("-------------------------------------");

  function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let users = [ john, pete, mary ];
  
  let names = users.map(item => item.name);
  
  console.log( names );

  console.log("-------------------------------------");

