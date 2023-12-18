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


}
