# my-tools-ts

## install

```shell
npm install my-tools-ts
```

## import

```javascript
import { setGrayscale, StorageData, randomAny } from 'my-tools-ts'
```
## demo
### setGrayscale 

> Set the style property through the dom object to achieve automatic grey out of the background

Configuration parameter description

```javascript
// num : Grey release [0,100],default : 100 
// domId : String , default app
setGrayscale(num,domId)
```

 

```html

<div id="app">
  <div style="background: red;width: 20vw;height: 20vw">
    test
  </div>
</div>
<script>
  setGrayscale(100)
</script>
```

```javascript
//
// num : 灰度0-100,默认为100 
// domId :  domId 默认为app

// 引入
import { setGrayscale } from 'my-tools-ts'
//  给id为:testView 的dom对象,灰度设置为80%
setGrayscale(80, 'testView')
```

## StorageData 
Browser Local Data Encryption Storage Tool

> In the browser local data encryption storage (encryption using JsSm4), encryption can be controlled


```javascript
// import
import { StorageData } from 'my-tools-ts'
// Configuration parameters, description
let option = {
  // Required, Encryption Key
  publicKey: 'AnyString',
  // Not required, default dev controls data encryption: dev: not encrypted | | other encryption
  envName: 'pro',
  // Not required, default localStorage
  // s : sesionStorage saveObj,
  // l : localStorage saveObj,
  storageObj: 'l',
  // Not required default AnyString
  privateKey: 'AnyString',
}

let option = {
  publicKey: 'AnyString',
  envName: 'dev',
  // s : sesionStorage saveObj,
  // l : localStorage saveObj,
  storageObj: 'l',
  privateKey: 'AnyString',
}

let storage = new StorageData(option)

storage.setData('testString', 'ssssdfdsfs 12343234')
storage.setData('testObject', { name: 1 })
storage.setData('testNumber', 111111)
storage.setData('testBoolean', false)
storage.setData('testArray', ["1", 2, false, { name: 1 }])

console.log(storage.getData('testString'))
console.log(storage.getData('testObject'))
console.log(storage.getData('testNumber'))
console.log(storage.getData('testBoolean'))
console.log(storage.getData('testArray'))
```

### randomAny  
random string

> Generate random characters according to the configuration, and finally return them as strings

* number: 1234567890
* character: a_zA_Z
* symbols: <~!@#$%^*()_+-=[]{}|;:,./?>

Configuration parameter description

```javascript

// length:Random string length, optional, default 4

// * options :  string || {num:true,az:true,fh:true}

```

```javascript

// import
import { randomAny } from 'my-tools-ts'
//  {num : number  az  : character, fh  : symbols}

// Random 5-digit arbitrary character
randomAny(5) // *Ql?/
randomAny(5, { num: true, az: true, fh: true }) // -J-5o

// Random 8 bits from '23rtgheer'
randomAny(8, '23rtgheer') // eegr23te

// Random 8-digit number
randomAny(8, { num: true }) // ]}#-)/><

// Random 8-digit letter
randomAny(8, { az: true }) // vUKIpxEb

// Random 8-bit special characters
randomAny(8, { fh: true }) // ]}#-)/><

```

### JsSm4Client 

> Encapsulates JsSm4,


Configuration parameter description
key : secret key

* encryption method
* @param plaintext
* encryptData( plaintext:string): string


* decryption method
* @param ciphertext
* decryptData(ciphertext:string): string

```javascript
// import

import { JsSm4Client } from 'my-tools-ts'

const key = '1234321'

let jsSm4Client = new JsSm4Client(key)

let a = "1232123"

console.log(jsSm4Client.decryptData(jsSm4Client.encryptData(a))); // 1232123

```
