let bb = "@24017357a1@";
//todo
    let lastIndexOf = () => {
    /**
     * 字符串常用方法之 lastIndexOf
     * 作用：lastIndexOf 是从后向前检测该字符在字符串内的索引位置
     * 语法：字符串.indexOf(要查找的字符，开始索引)
     * 返回值：
     * ○如果有该字符内容, 那么就是该字符的索引位置
     * ○如果没有该字符内容, 就是 -1
     */
    let str = "hello world";

    // 使用 lastIndexOf 找到字符串中的某一个内容
    let index = str.lastIndexOf("l");
    console.log(index); //9 返回第一个找到的内容的下标后面的就不查找了,索引的位置不变

    let index1 = str.lastIndexOf("l", 8);
    console.log(index1); //3 返回第一个找到的内容的下标后面的就不查找了，索引的位置不变

    let index2 = str.lastIndexOf("w", 5);
    console.log(index2); //-1 从后开始查找，开始的索引是5 但是前面没有找到w 返回-1
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
