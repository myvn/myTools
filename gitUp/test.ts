let bb = "@24017357a1@";
//todo
    let charAt = () => {
    /**
     * 作用：charAt() 是找到字符串中指定索引位置的内容返回
     * 语法：字符串.charAt(索引)
     * 返回值：该索引位置对应的字符
     * ○如果有该索引位置, 那么就是该索引位置的字符
     * ○如果没有该索引位置, 那么就是 空字符串('')
     */

    let str = "hello world";
    // 使用 charAt 找到字符串中的某一个内容
    let index = str.charAt(2);
    console.log(index); // l
    //查找索引为 13 的内容，因为没有返回是一共空字符串
    let index1 = str.charAt(13);
    console.log(index1); // ''
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
