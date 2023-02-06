# webpack
### 安装环境

```shell
  npm install webpack  @webpack-cli/generators -D
```

### 开始创建工程
```shell
  webpack init
```

### 选项配置
```text
1 您希望使用以下哪种JS解决方案？
? Which of the following JS solutions do you want to use? 
Typescript
```
```text
2 是否使用webpack-dev-server
? Do you want to use webpack-dev-server? (Y/n)?
 -> y
```
```text
3 是否要简化捆绑包HTML文件的创建？
 3 ? Do you want to simplify the creation of HTML files for your bundle? (Y/n)
 -> y
```
```text
4 是否要添加PWA支持？ 
? Do you want to add PWA support? (Y/n) 桌面生产图标 
 -> y
 这里是一个第三方库PWA，PWA（Progressive Web App，渐进式网页应用，逐渐接近原生app的web app）是一种理念，使用多种技术来增强web app的功能，可以让网站的体验变得更好，能够模拟一些原生功能，比如通知推送。在移动端利用标准化框架，让网页应用呈现和原生应用相似的体验。根据自己需要，我这选择Y。
```
```text
5 下载预处理的loader，这里我选择Sass.
? Which of the following CSS solutions do you want to use?  
 -> SASS
```

```text
6 你会在你的项目中使用CSS样式和SASS吗？
? Will you be using CSS styles along with SASS in your project? (Y/n)   
 -> Y
```
```text
7 是否使用PostCSS
? Will you be using PostCSS in your project? (y/N)  
 -> Y
```
```text
8 是否要为每个文件提取CSS？
? Do you want to extract CSS for every file?  
 ->  Yes
```

```text
9 是否要安装更漂亮的以格式化生成的配置?
? Do you like to install prettier to format generated configuration?
 ->  Yes
```

```text
10 是否要安装更漂亮的以格式化生成的配置?
? Pick a package manager: (Use arrow keys)
> npm
```

```text
11 是否要覆盖 package.json?
? Overwrite package.json?
-> y
```
 
```text
12 是否要覆盖 README.md?
? Overwrite README.md
-> y
```


### 文件配置
tsconfig.json 配置
```json  
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/",// 打包到的目录
    "sourceMap": false,// 是否生成sourceMap（用于浏览器调试）
    "noImplicitAny": false,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "declaration": true,// 是否生成声明文件
    "declarationDir": "./dist/types/",// 声明文件打包的位置
    "declarationMap": false,// 是否生成声明文件map文件（便于调试）
    "moduleResolution": "node",
    "module": "esnext",
    "target": "es5",// 转化成的目标语言
    "baseUrl": "./",
    "types": [
      "node"
    ],
    "typeRoots": [
      "./node_modules/@types"
    ],
    "lib": [
      "dom",
      "es2015"
    ],
    "jsx": "react",
    "allowJs": false
  },
  "include": [
    "src/**/*.ts",
    "typings.d.ts",
  ],// 要打包的文件
  "exclude": [
    "node_modules",
    "*.test.ts"
  ]
}

```

package.json
```json
{
 "main": "./dist/main.js",
  "types": "./dist/types/index.d.ts",
  "files": [
    "dist"
  ]
}
```
