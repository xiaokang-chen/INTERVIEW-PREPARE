function merge(intervals){
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    let i = 0;
    while(i < intervals.length - 1){
        // 如果前面区间的右大于后面区间的左
        if(intervals[i][1] >= intervals[i+1][0]){
            let a = intervals[i][0];
            // 看前面区间是否包含后面区间，来决定b的取值
            let b = Math.max(intervals[i][1], intervals[i+1][1]);
            intervals.splice(i, 2, [a, b]);
        }else{
            i++;
        }
    }
    return intervals;
}

function merge2(intervals){
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    const res = [];
    for(let i = 0; i < intervals.length;){
        let rightBase = intervals[i][1];
        let j = i + 1;
        // 合并包含的区间（连续的区间持续合并，直到断开----优化的关键）
        while(j < intervals.length &&rightBase >= intervals[j][0]){
            rightBase = Math.max(rightBase, intervals[j][1])
            j++;
        }
        res.push([intervals[i][0], rightBase]);
        i = j;
    }
    return res;
}

const intervals = [[1,3],[2,6],[8,10],[15,18]];
const intervals2 = [[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]];
console.log(merge2(intervals2));