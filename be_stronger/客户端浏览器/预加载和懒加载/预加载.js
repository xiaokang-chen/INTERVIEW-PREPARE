// 一般在图片比较多的情况下，避免项目中图片加载速度太慢，影响
// 用户体验。所以在进入项目前提前加载图片。
// 做法：把所有图片的路径放到一个数组中，循环遍历数组，每次创建一个
// 图片对象（new Image()），并把路径赋值给图片对象的src属性

function loadImage(url, callback){
    let img = new Image();  // 等价于document.create('img')
    img.src = url;
    // 如果图片已经存在浏览器缓存，直接调用callback并且返回
    if(img.complete){
        callback.call(img);
        return;
    }
    // 图片下载在callback之前
    img.onload = function(){
        // 图片下载完毕异步调用callback
        callback.call(img);
    }
}