function fiboEvenSum(n) {
  // You can do it!
  if(n < 2){
    return 0; 
  }
  let sum = 2;
  let nums = [1, 2];
  while(nums[1] < n){
    [nums[0], nums[1]] = [nums[1], nums[0]+nums[1]];
    if(nums[1]%2 === 0){
        sum += nums[1];
    }
  }
  return sum;
}

console.log(fiboEvenSum(10));