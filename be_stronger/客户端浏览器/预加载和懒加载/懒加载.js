// 懒加载主要为服务器端优化，缓解服务器压力，并发请求数量减少
// 还可以根据用户可视区域加载，有效降低用户流量（没看到的图片不要加载）
// 实现方式有三种：
// 1. 纯粹的延迟加载，使用setTimeOut或者setInterval（这种不推荐！！！！并没有解决用户流量问题）
// 2. 条件加载，符合某些条件或者触发了某些事件才开始异步下载
// 3. 可视区加载，仅加载用户看到的区域，主要由监控滚动条来实现（scrollTop）

let imgList = Array.from(document.getElementsByTagName('img'));
// 可加载区域 = 当前屏幕高度 + 滚动条已滚动高度
const hasHeight = function(){
    const clientHeight = window.innerHeight;
    const top = document.body.scrollTop || document.documentElement.scrollTop;
    return clientHeight + top;
}

// 判断是否加载图片
function loadImage(){
    imgList.forEach(img => {
        if(!img.attributes['src'].value && img.offsetTop < hasHeight()){
            // src不存在并且当前的图片已经滑动到可加载区域，则加载图片
            img.src = img.attributes['temp-src'].value;
        }
    });
}