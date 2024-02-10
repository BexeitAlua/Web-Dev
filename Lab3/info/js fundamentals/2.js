let name = "Alua";

console.log(`hello ${1}`); //hello 1

console.log(`hello ${"name"}`); //hello name

console.log(`hello ${name}`); //hello Alua

console.log("------------------------");

let a = 1, b = 1;

let c = ++a; 
let d = b++;

console.log(c);//2
console.log(d);//1

console.log(a);//2
console.log(b);//2
console.log("------------------------");

let x = 1 + (a *= 2);

console.log(x); //5
console.log("------------------------");
console.log("" + 1 + 0);//"10"
console.log("" - 1 + 0);//-1
console.log(true + false);//1
console.log(6 / "3");//2
console.log("2" * "3");//6
console.log(4 + 5 + "px");//"9px"
console.log("$" + 4 + 5);//"$45"
console.log("4" - 2);//2
console.log("4px" - 2);//NaN
console.log("  -9  " + 5);//"" -9 5"
console.log("  -9  " - 5);-14
console.log(null + 1); //1
console.log(undefined + 1);//NaN
console.log(" \t \n" - 2);//-2
console.log("------------------------");
let f = +prompt("First number?", 1);
let g= +prompt("Second number?", 2);



alert(f+g);

console.log("------------------------");