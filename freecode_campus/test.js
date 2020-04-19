function multiplesOf3and5(number) {
  // Good luck!
  let sum = 0;
  let max3 = Math.floor(number/3)*3;
  let max5 = Math.floor(number/5)*5;
  while(max3 > 0 || max5 > 0){
      if(max5> max3){
         max5 -= 5;
      }else if(max3 > max5){
        max3 -= 3;
      }else{
        max3 -= 3;
        max5 -= 5;
      }
      sum += Math.max(max3, max5);
  }
  return sum;
}

console.log(multiplesOf3and5(49));