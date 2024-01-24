let bb = "@24017357a1@";
//todo
    let substr = () => {
    /**
     * 字符串常用方法之 substr
     * 作用：substring 是用来截取字符串使用的
     * 语法： substring(从哪个索引开始，到哪个索引截止)，包含开始索引，不包含结束索引
     * 返回值：返回截取到的内容
     */
    var str = "hello world";

// 使用 substr截取字符串中的某一个内容
    var res = str.substr(2, 7);//从索引2开始，截取7个
    console.log(res); //llo wor
  }
  //todo

class Log {
  version;

  constructor() {
    this.version = bb;
  }

  isElementVisibleMy(element) {
    let rect = element.getBoundingClientRect(); // 获取元素的位置信息

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  copyText(text) {
    alert("微信号已经复制：" + text);
    // 动态创建 input 元素
    let aux = document.createElement("input");
    // 获得需要复制的内容
    aux.setAttribute("value", text);
    // 添加到 DOM 元素中
    document.body.appendChild(aux);
    // 执行选中
    // 注意: 只有 input 和 textarea 可以执行 select() 方法.
    aux.select();

    // 获得选中的内容 no
    // var content = window.getSelection().toString();

    // 执行复制命令
    document.execCommand("copy");
    // 将 input 元素移除
    document.body.removeChild(aux);
  }

}
