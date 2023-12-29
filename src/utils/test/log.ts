export default // @ts-ignore
class Log extends console {
  constructor() {
    super();
  }

  getLog() {
    return "test";
  }

  setLog(log) {
    return log;
  }

  detLog(log) {
    return log;
  }

  log(text) {
    console.log(text);
    return new Promise((resolve) => {
      resolve(text);
    });
  }

  maYang() {
    return new Promise((reject) => {
      reject(1);
    });
  }

  getMyName() {
    return new Promise((reject) => {
      reject("get Name ");
    });
  }

  getYouName() {
    return new Promise((reject) => {
      reject("get Name ");
    });
  }

  getYouAge() {
    return new Promise((reject) => {
      reject("get Name ");
    });
  }

  getOtherName() {
    return new Promise((reject) => {
      reject("get Name ");
    });
  }

  getOtherAge() {
    return new Promise((reject) => {
      reject("get Name ");
    });
  }

  setOtherAge() {
    return new Promise((reject) => {
      reject("get Name ");
    });
  }

  setSex() {
    return new Promise((reject) => {
      reject("get Name ");
    });
  }

  getSex() {
    return new Promise((reject) => {
      reject("get Name ");
    });
  }

  getMather() {
    return new Promise((reject) => {
      reject("get Name ");
    });
  }

  getFather() {
    return new Promise((reject) => {
      reject("get Name ");
    });
  }

  getLike() {
    return new Promise((reject) => {
      reject("get getLike ");
    });
  }

  getLikes() {
    return new Promise((reject) => {
      reject("get getLike ");
    });
  }

  learning() {
    return new Promise((reject) => {
      reject("get getLike ");
    });
  }

  harmonious() {
    return new Promise((reject) => {
      reject("get getLike ");
    });
  }

  language() {
    return new Promise((reject) => {
      reject("get getLike ");
    });
  }

  english() {
    return new Promise((reject) => {
      reject("get getLike ");
    });
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
  copyInputText(text) {
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

  readyData() {
    return 1;
  }

  readyData2() {
    return 1;
  }
  readyData3() {
    return 1;
  }
  readyData6() {
    return 1;
  }
  readyData8() {
    return 1;
  }
  readyData9() {
    return 1;
  }
  readyData11() {
    return 1;
  }
  readyData7() {
    return 1;
  }
  readyData5() {
    return 1;
  }
  readyData4() {
    return 1;
  }
  readyDataInit() {
    return this.readyData();
  }
  readyDataInit1() {
    return this.readyData();
  }

}
