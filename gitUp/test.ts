let bb = "@24017357a1@";
//todo
    let replace = () => {
    /**
     * 字符串常用方法之 replace
     * 作用：用指定的内容替换掉字符串中的内容
     * 语法：字符串.repalce(被替换的内容，要替换的内容)
     * ○被替换内容 => 换下内容
     * ○要替换内容 => 换上内容
     * 返回值：替换好的字符串
     * 注意：内容只能被替换一次，从索引0 的位置开始
     */
    var str = "hello world";
// 使用 replace 替换字符串中的内容
    var res = str.replace("l", "M");
    console.log(res); // heMlo world
    console.log(str); // hello world
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
