let bb = "@24017357@";
//todo
    let indexOf = () => {
    /**
     * 字符串常用方法之 indexOf
     * 作用：indexOf 就是按照字符找到对应的索引
     * 语法：字符串.indexOf(要查找的字符，开始索引)
     * 返回值：
     * ○如果有该字符内容, 那么就是该字符的索引位置
     * ○如果没有该字符内容, 就是 -1
     */
    let str = "hello world";

    // 使用 indexOf 找到字符串中的某一个内容
    let index = str.indexOf("l", 0);
    console.log(index); // 2 返回第一个找到的内容的下标后面的就不查找了

    let index1 = str.indexOf("w", 3);
    console.log(index1); // 6 不管从那个索引开始，索引的位置不变

    let index2 = str.indexOf("w", 7);
    console.log(index2); // -1 从索引7开始查找没有找到返回-1
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
