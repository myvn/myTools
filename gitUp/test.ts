let bb = "@24017357a1@";
//todo
    let toLowerCase = () => {
    /**
     * 字符串常用方法之 toLowerCase 和 toUpperCase
     * 作用：这两个方法分别是用来给字母格式的字符串转成 小写字母 和 大写字母 的
     * 语法：
     * ○字符串.toLowerCase()
     * ○字符串.toUpperCase()
     */
    var str = "hello world";


    // 使用 toLowerCase 转换成小写
    var lower = str.toLowerCase();
    console.log(lower); // hello world

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
// ni
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
