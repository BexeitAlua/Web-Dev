function camelize(str) {
    return str
      .split('-') 
      .map(
        
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join('');
  }

////////////////////////////////////////////////////////////////////////////////

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  
  console.log( filtered ); // 3 1
  
  console.log( arr ); // 5 3 8 1

  console.log("----------------------------------------------------------------");

  

  function filterRangeInPlace(ar, a, b) {

    for (let i = 0; i < ar.length; i++) {
      let val = ar[i];
  
      if (val < a || val > b) {
        ar.splice(i, 1);
        i--;
      }
    }
  
  }
  
  let ar = [5, 3, 8, 1];
  
  filterRangeInPlace(ar, 1, 4); 
  
  console.log( ar ); // 3 1