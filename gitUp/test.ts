let bb = "@24017357a1@";
//todo
    let split = () => {
    /**
     * 字符串常用方法之 split
     * 作用：按照切割符号, 把字符串切割开, 放在一个数组里面.
     * 语法：字符串.split('指定的切割符')
     * ○切割符可以不传递，就会和整体当做一个字符串
     * ○(''）空字符串会一位一位的切割
     * ○(' ') 字符串中有空格 会按照原字符串中的空格切割
     * 返回值：一个用指定切割符切割好的数组
     */
    var str = "hello world";

// 使用 split 切割成一个数组
    // @ts-ignore
    var res = str.split();
    console.log(res); //['hello world']

    var res1 = str.split("");
    console.log(res1); //['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

    var res2 = str.split(" ");
    console.log(res2); //['hello', 'world']
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
