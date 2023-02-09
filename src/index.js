module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let flag = 0;
  
  for (let i = 0; i < str.length; i++) {

    if (bracketsConfig.some(elem => {
        if (str[i] === elem[0] && str[i] !== elem[1]) {
          return true;
        } else if (str[i] === elem[0] && str[i] === elem[1] && ((flag % 2) !== 0) && str[i] !== stack[stack.length - 1]) {
          return true;
        } else if (str[i] === elem[0] && str[i] === elem[1] && ((flag % 2) === 0) && str[i] === stack[stack.length - 1]) {
          return false;
        } else if (str[i] === elem[0] && str[i] === elem[1] && ((flag % 2) !== 0)) {
          flag = flag + 1;
          return false;
        } else if (str[i] === elem[0] && str[i] === elem[1]) {
          flag = flag + 1;
          return true;
        } else {
          return false;
        };
      } 
    )) { 
          stack.push(str[i]); 
    } else {
      if (stack.length === 0) {
        return false;
      }
    } 

    let pair = '';

    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j][1] !== str[i]) {  
        continue;

      } else if (bracketsConfig[j][1] === bracketsConfig[j][0] && (flag % 2) !== 0) {           
            continue;

      } else {
        pair = bracketsConfig[j][0]; 
      }
    }

    if (pair.length === 0) { 
      continue;
    }
  
    if (pair === stack[stack.length - 1]) {       
      stack.pop(); 

    } else {
      return false;
    } 
  }

  if (stack.length === 0) {
    return true;
    
  } else {
    return false;
  }
}
