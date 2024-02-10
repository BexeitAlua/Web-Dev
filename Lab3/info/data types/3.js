function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  console.log( ucFirst("john") ); //John

  console.log("-------------------------");
/////////////////////////////////////

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  console.log( checkSpam('buy ViAgRA now') ); //true
  console.log( checkSpam('free xxxxx') );//true
  console.log( checkSpam("innocent rabbit") );//false
  console.log("-------------------------");
///////////////////////////////////////////////

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }

///////////////////////////////////////

function extractCurrencyValue(str) {
    return +str.slice(1);
  }