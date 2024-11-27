const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
let dayjs = require("dayjs");


const { randomAny } = require("../gitUp/main.js");
const myString = require("../src/study/string");

function git_init() {
  exec("git init", (error, stdout, stderr) => {
    if (error) {
      console.error(`执行错误: ${error}`);
      return;
    }

    // 输出标准输出结果
    console.log("git_add ok");
    console.log(stdout);

    // git_commit();

  });
}

function git_pull() {
  return new Promise((resolve, reject) => {
    exec("git pull", (error, stdout, stderr) => {
      if (error) {
        console.error(`执行错误: ${error}`);
        return resolve({ state: false, msg: error });
      }
      console.log("git_pull ok");
      return resolve({ state: true, msg: "git pull . success" });
    });
  });

}

function git_add() {
  return new Promise((resolve, reject) => {
    exec("git add .", (error, stdout, stderr) => {
      if (error) {
        console.error(`执行错误: ${error}`);
        return resolve({ state: false, msg: error });
      }
      console.log("git_add ok");
      return resolve({ state: true, msg: "git add . success" });
    });
  });

}

function git_commit() {
  let arr = ["1 新增功能", "2 修复bug", "3 版本升级"];
  let index = Math.floor(Math.random() * (arr.length));
  return new Promise((resolve, reject) => {
    exec(`git commit -m '${arr[index]}'`, (error, stdout, stderr) => {
      if (error) {
        console.error(`执行错误: ${error}`);
        return resolve({ state: false, msg: error });
      }

      console.log("git_commit ok");
      return resolve({ state: true, msg: "git commit -m '' success" });
    });
  });
}

function git_push() {
  return new Promise((resolve, reject) => {
    try {
      exec(`git push`, (error, stdout, stderr) => {
        if (error) {
          console.error(`执行错误: ${error}`);
          // throw error;
          return resolve({ state: false, msg: error });
        }

        console.log("git_push ok");
        return resolve({ state: true, msg: "git_push success" });
      });
    } catch (e) {
      console.log(e);
      return resolve({ state: false, msg: error });
    }
  });
}


function fileChange() {
  console.log(path.join(__dirname, "test.ts"));
  const packagePath = path.join(__dirname, "test.ts");
  let packageContent = fs.readFileSync(packagePath, "utf8");

  /* let number = packageContent.indexOf("@");

   let replaceString = packageContent.substring(number + 1, number + 1 + 8);
   console.log(replaceString);
   let version = randomAny(8, { num: true });
   let finalString = packageContent.replace(replaceString, version);

   */

  let number = packageContent.indexOf("//todo");
  let number1 = packageContent.lastIndexOf("//todo");
  let rpString = packageContent.substring(number + 6, number1);
  let index = Math.floor(Math.random() * (myString.funArr.length));
  let funName = myString.funArr[index];
  let funBody = `
    let ${funName} = ${myString[funName].toString()}
  `;
  let finalString = packageContent.replace(rpString, funBody);
  // console.log(finalString);
  return new Promise((resolve, reject) => {
    fs.writeFile(packagePath, finalString, {}, (err) => {
      if (err) {
        return resolve({ state: false, msg: "写入失败" });
      }
      return resolve({ state: true, msg: "写入成功" });
    });
  });
}

function autoGitUp() {
  if (downCount > 48) {
    clearInterval(aaa);

  } else {


    fileChange()
      .then(res => {
        if (res.state) {
          return git_pull();
        }
      })
      .then(res => {
        if (res.state) {
          return git_add();
        }
      })
      .then(res => {
        console.log(res);
        if (res.state) {
          return git_commit();
        }
      })
      .then(res => {
        if (res.state) {
          // process.env.https_proxy = "http://127.0.0.1:7890";
          // process.env.http_proxy = "http://127.0.0.1:7890";
          // process.env.all_proxy = "socks5://127.0.0.1:7890";
          console.log("process.env.https_proxy add", process.env.https_proxy);
          return git_push();
        }
      })
      .then(res => {
        // delete process.env.https_proxy;
        // delete process.env.http_proxy;
        // delete process.env.all_proxy;
        console.log("process.env.https_proxy delete", process.env.https_proxy);

        downCount++;
        console.log(downCount, dayjs().format("YYYY-MM-DD HH:mm:ss"));
      });

  }
}

// export https_proxy="http://127.0.0.1:7890"
// export  http_proxy="http://127.0.0.1:7890"
// export all_proxy="socks5://127.0.0.1:7890"

let downCount = 0;
console.log(process.env.JAVA_HOME);

autoGitUp();

let aaa = setInterval(() => {
    autoGitUp();
  },
  15 * 1000);


/*require('dotenv').config(); // 导入 dotenv 模块并配置 .env 文件
console.log(require("dotenv").config());
console.log(process.env.MY_VARIABLE); // 输出 MY_VARIABLE 的值
/!**!/*/
