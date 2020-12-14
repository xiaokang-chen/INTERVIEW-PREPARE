var maxProfit = function(prices) {
    if(prices.length < 2){
        return 0;
    }
    let buyPrice = Number.MAX_VALUE;
    let maxProfile = 0;
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < buyPrice){
            buyPrice = prices[i];
        }else if(prices[i] - buyPrice > maxProfile){
            maxProfile = prices[i] - buyPrice;
        }
    }
    return maxProfile;
};

const arr = [3,2,6,5,0,3];
console.log(maxProfit(arr));