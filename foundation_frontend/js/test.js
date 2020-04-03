// let i = 2;
// checkiandj:
//     while(i > 0){
//         let j = 2;
//         let sum = 0;
//         checkj:
//             while(j > 0){
//                 sum = 10*i + j;
//                 j -= 1;
//                 // 22
//                 // if((sum % 3) == 0){
//                 //     i -= 1;
//                 //     continue checkiandj;
//                 // }
//                 // 22 11
//                 if((sum % 3) == 0){
//                     continue checkj;
//                 }
//                 console.log(sum + '不能被三整除');
//             }
//         i -= 1;
//     }

// 一共4个数字，22 21 12 11 

// 55 35 34 25

function showContent(content){
    return document.getElementById('info').innerHTML = content;
};

function setContent(){
    let a = document.createElement('button');
    a.appendChild(document.createTextNode('点击'));
    a.setAttribute("onclick", 'alert("hello")');
    document.body.appendChild(a);
    var infoArr = [
        {'id':'email','content':'your email address'},
        {'id':'name','content':'your name'},
        {'id':'age','content':'your age'}
    ];
    for (var i = 0; i < infoArr.length; i++) {
        // 放到立即执行函数中
        // (function(){
        //     var item = infoArr[i];
        //     document.getElementById(item.id).onfocus = function(){
        //         showContent(item.content);
        //     }
        // })()

        // 放到函数工厂中
        // let item = infoArr[i];
        // document.getElementById(item.id).onfocus = callBack(item.content);

        // 直接放到闭包中
        let item = infoArr[i];
        document.getElementById(item.id).onfocus = function(){
            showContent(item.content);
        }
    }
    function callBack(content){
        return function(){
            document.getElementById('info').innerHTML = content;
        }
    }
}
setContent()