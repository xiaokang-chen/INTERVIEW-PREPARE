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

// console.log(multiplesOf3and5(49));

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
        answer = "Low"; 
        break;
    case 4:
    case 5:
    case 6:
        answer = "Mid"; 
        break;
    case 7:
    case 8:
    case 9:
        answer = "High"; 
        break;
  }


  // Only change code above this line
  return answer;
}

console.log(sequentialSizes(1));