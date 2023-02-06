# 安装

npm install my-tools-ts

```javascript
// 默认导出工具 小写开头不用实例化
export {
    // 数据存储工具类
    StorageData,
    
    // 国密4 加密
    JsSm4Client,
    
    // 随机字符串生成
    randomAny
}
```

* ## StorageData : 数据存储工具(根据环境会加密)

> 实例

```javascript
// 引入
import {StorageData} from 'my-tools-ts'
// 配置参数
let option = {
    publicKey: 'AnyString',
    envName: 'dev',
    // s 表示使用 sesionStorage 对象存储,
    // l 表示使用 localStorage 对象存储,
    storageObj: 'l',
    privateKey: 'AnyString',
}

let storage = new StorageData(option)

storage.setData('test', 'ssss 12343234')

storage.getData('test')

```
 
