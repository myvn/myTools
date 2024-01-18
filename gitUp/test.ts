let bb = "@24017357@";
//todo
    let charCodeAt = () => {
    /**
     * 字符串常用方法之 charCodeAt
     * 作用：charCodeAt() 就是返回对应索引位置的 unicode 编码
     * 语法：字符串.charCodeAt(索引)
     * 返回值：该索引位置的对应字符的 编码(十进制)
     */
    let str = "hello world";
    // 使用 charAt 找到字符串中的某一个内容
    let index = str.charCodeAt(4);
    console.log(index); // 111
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
