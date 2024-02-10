for (let i = 0; i < 5; ++i) alert( i ); // 0 1 2 3 4 

for (let i = 0; i < 5; i++) alert( i ); // 0 1 2 3 4 

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i ); // 2 4 6 8 10

    }
  }

  let i = 0;
  while (i < 3) {
    alert( `number ${i}!` ); // number 0! number 1! number 2!
    i++;
  }