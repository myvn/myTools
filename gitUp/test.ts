let bb = "@24017357@";
//todo
    let concat = () => {
    /**
     * 字符串常用方法之 concat
     * 作用：字符串拼接也可以说是字符串合并
     * 语法：字符串.concat(字符串)
     * 返回值：拼接后的字符串
     */

    var str = "hello world ";

    var str1 = "ni hao";

    // 使用 concat 切割成一个数组
    var res = str.concat("ni hao");
    console.log(res); // hello world ni hao

    var res1 = str.concat(str1);
    console.log(res1); // hello world ni hao
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
