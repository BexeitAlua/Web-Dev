
if(browser == 'Edge') {
    alert("You've got the Edge!");
  } else if (browser == 'Chrome'
   || browser == 'Firefox'
   || browser == 'Safari'
   || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }


  let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}

///////////////////////////////////////////

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }

// same with

  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }

///////////////////////////////////////////////////


//Using a question mark operator

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }


//Using OR

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }


//////////////////////////////////////////////////////

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

////////////////////////////////////////////////




