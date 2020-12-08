// 剪枝前
function combinationSum(candidates, target){
    const res = [];
    function getPath(begin, target, path){
        if(target < 0){
            return;
        }
        if(target === 0){
            res.push([...path]);
            return;
        }
        for(let i = begin; i < candidates.length; i++){
            // 做选择
            path.push(candidates[i]);
            getPath(i, target -candidates[i], path);
            // 撤销选择
            path.pop();
        }
    }
    getPath(0, target, []);
    return res;
}

// 剪枝后的
var combinationSum1 = function(candidates, target){
    const res = [];
    function getPath(begin, target, path){
        if(target === 0){
            res.push([...path]);
            return;
        }
        for(let i = begin; i < candidates.length; i++){
            // 剪枝（必须配合排序好的candidates）
            if(target - candidates[i] < 0){
                break;
            }
            path.push(candidates[i]);
            getPath(i, target - candidates[i], path);
            path.pop();
        }
    }
    candidates.sort((a, b) => a-b);
    getPath(0, target, []);
    return res;
}

const arr = [2, 3, 6, 7];
const target = 7;
console.log(combinationSum(arr, target));