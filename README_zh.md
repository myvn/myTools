# umd

```html

<script src="./dist/main.js"></script>
<script>
    // tools  window中有
    let {setGrayscale, StorageData, JsSm4Client, randomAny} = tools
</script>
```

# node安装

npm install my-tools-ts

```javascript
// 默认导出工具 小写开头不用实例化
export {
    // dom 置灰
    setGrayscale,

    // 数据存储工具类
    StorageData,

    // 国密4 加密
    JsSm4Client,

    // 随机字符串生成
    randomAny
}
```

* ## setGrayscale 置灰

> 通过dom对象设置style属性,来实现置灰



配置参数描述

```javascript
// num : 灰度0-100,默认为100 
// domId :  domId 默认为app
```
html
```html
<div id="app">
    <div style="background: red;width: 20vw;height: 20vw">
        测试自动置灰
    </div>
</div>
<script>
    setGrayscale(100)
</script>
```
js
```javascript
//
// num : 灰度0-100,默认为100 
// domId :  domId 默认为app

// 引入
import {setGrayscale} from 'my-tools-ts'
//  给id为:testView 的dom对象,灰度设置为80%
setGrayscale(80,'testView')
```


* ## StorageData : 浏览器本地数据加密存储工具

> 在浏览器本地数据加密存储(加密采用JsSm4),加密可控制.

实例

```javascript
// 引入
import {StorageData} from 'my-tools-ts'
// 配置参数 说明
let option = {
    // 必传 加密Key
    publicKey: 'AnyString',
    // 非必传 默认dev 控制数据加密 : dev:不加密 ||  other 加密
    envName: 'pro',
    // 非必传 默认 localStorage
    // s 表示使用 sesionStorage 对象存储,
    // l 表示使用 localStorage 对象存储,
    storageObj: 'l',
    // 非必传 默认 AnyString
    privateKey: 'AnyString',
}

let option = {
    publicKey: 'AnyString',
    envName: 'dev',
    // s 表示使用 sesionStorage 对象存储,
    // l 表示使用 localStorage 对象存储,
    storageObj: 'l',
    privateKey: 'AnyString',
}

let storage = new StorageData(option)

storage.setData('testString', 'ssssdfdsfs 12343234')
storage.setData('testObject', {name:1})
storage.setData('testNumber', 111111)
storage.setData('testBoolean', false)
storage.setData('testArray', ["1",2,false,{name:1}])

console.log(storage.getData('testString'))
console.log(storage.getData('testObject'))
console.log(storage.getData('testNumber'))
console.log(storage.getData('testBoolean'))
console.log(storage.getData('testArray'))
```

* ## randomAny 随机字符串

> 根据配置随机生成字符,最终以字符串形式返回

* 数字: 1234567890
* 字母: a_zA_Z
* 英文符号: <~!@#$%^*()_+-=[]{}|;:,./?>

配置参数描述

```javascript

// length:随机字符串长度  非必传 默认4

// * options :  string || {num:true,az:true,fh:true}

```

```javascript

// 引入
import {randomAny} from 'my-tools-ts'
//  {num : 控制数字  az  : 控制字母,fh  : 控制符号}

// 随机5位任意字符
randomAny(5) // *Ql?/
randomAny(5, {num: true, az: true, fh: true}) // -J-5o

// 从'23rtgheer' 中随机8位
randomAny(8, '23rtgheer') // eegr23te

// 随机8位数字
randomAny(8, {num: true}) // ]}#-)/><

// 随机8位字母
randomAny(8, {az: true}) // vUKIpxEb

// 随机8位特殊字符
randomAny(8, {fh: true}) // ]}#-)/><

```

* ## JsSm4Client 国密4 加密,解密

> 封装了JsSm4,


配置参数描述
key : 秘钥

* 加密方法
* @param plaintext
* encryptData( plaintext:string): string


* 解密方法
* @param ciphertext
* decryptData(ciphertext:string): string

```javascript
// 引入

import {JsSm4Client} from 'my-tools-ts'

const key = '1234321'

let jsSm4Client = new JsSm4Client(key)

let a = "1232123"

console.log(jsSm4Client.decryptData(jsSm4Client.encryptData(a))); // 1232123

```
