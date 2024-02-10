let user = {};

user.name = "Alua";
user.surname = "Bexeit";
user.name = "Aula";
delete user .name;

//////////////////////////////////

function isEmpty(obj){
    for(let k in obj){
        return false;
    }
    return true;
}

////////////////////////////////////

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum); // 390

////////////////////////////////////////

function multiplyNum(obj){
    for(let i in obj){
        if(typeof obk[i] == 'number'){
            obj[i] *= 2;
        }
    }
}