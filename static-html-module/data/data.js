// 判断手机
var isMobile = function (env='') {
    console.log(env);
    if (env && env!=='') {

    }else{
        return false
       /* if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            return true // 手机端
        } else {
            return false // PC端
        }*/
    }

}
console.log(isMobile(undefined));
// oss url
var ossUrl = 'https://ttuuoozhuanti.oss-cn-hangzhou.aliyuncs.com/';
// projectPath
var projectPath = '20221101/';
// 图片基础地址
var imgFile = 'image/';
// 手机端||pc端
var envPath = isMobile() ? 'mb/' : 'pc/';

// 项目图片 分：移动端 和 pc端 ，最终地址前部分，
var imgPcMbUrl = ossUrl + projectPath + imgFile + envPath;
// 共有图片地址 ： 如商品图片地址
var commonImgPath = ossUrl + projectPath + imgFile

/* 以下开始是数据配置 */





