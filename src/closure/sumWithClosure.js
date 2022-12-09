function sumWithClosure(firstNum) {
    return function (secondNum) {
      if (secondNum) {
        return secondNum + firstNum;
      }
      return firstNum;
    };
  }
  
console.log(sumWithClosure(3)(2));
console.log(sumWithClosure(3)());