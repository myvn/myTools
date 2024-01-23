let bb = "@24017357a1@";
//todo
    let slice = () => {
    /**
     * 字符串常用方法之 slice
     * 作用：截取字符串
     * 语法：字符串.slice(起始索引，结束索引)
     * ○包含开始的索引对应的内容，不包含结束索引对应的内容
     * ○结束索引不写就直接截取到末尾
     * 返回值：截取出来的字符串
     */
    var str = "hello world";

    // 使用 slice 截取字符串
    var res = str.slice(1, 4); //ell
    console.log(res);
    //没有结束的索引直接截取到末尾
    var res1 = str.slice(1); //ello world
    console.log(res1);

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
