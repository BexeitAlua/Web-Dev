let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

console.log( fruits.length ); //4

console.log("-----------------------------------");

////////////////////////////////////

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log( styles.shift() );
styles.unshift("Rap", "Reggae");

console.log("--------------------------------------");

//////////////////////////////////////////////

let arr = ["a", "b"];

arr.push(function() {
    console.log( this );
})

arr[2](); // a,b,function(){...}

console.log("-----------------------------------------------");

/////////////////////////////////////////

function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
  
     
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );

////////////////////////////////////////////////////////

function getMaxSubSum(arr) {
    let maxSum = 0; 
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }
  
  console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  console.log( getMaxSubSum([1, 2, 3]) ); // 6
  console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100