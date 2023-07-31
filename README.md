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
