function checker(num, prevNums = new Set()) {
  
  //returning if it is true
  if (num === 1) {
    return true;
  }
  
  //if already number encountred, then we again fall in the same loop. So,terminating there.
  if (prevNums.has(num)) {
    return false;
  }
  
  prevNums.add(num);
  let nextNum = 0;
  
  //logic for updating of the number
  while (num > 0) {
    let digit = num % 10;
    nextNum += digit * digit;
    num = Math.floor(num / 10);
  }
  
  return checker(nextNum, prevNums);
}

let inpNum = 49;
console.log(checker(inpNum));
