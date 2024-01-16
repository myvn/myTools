module.exports = {
  funArr: [
    "trim", "concat",
    "split", "replace",
    "slice", "toLowerCase",
    "toUpperCase", "substr",
    "substring", "lastIndexOf",
    "indexOf", "charCodeAt",
    "charAt"
  ],
  trim: () => {
    /**
     * 字符串常用方法之 trim
     *     作用：取出字符串头尾的空白内容
     *     语法：字符串.trim()
     *     返回值：去除空白内容以后的字符串
     */


    var str = "   hello world     ";

// 使用 trim 切割成一个数组
    var res = str.trim();
    console.log(res); // hello world
  },
  concat: () => {
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
  },
  split: () => {
    /**
     * 字符串常用方法之 split
     * 作用：按照切割符号, 把字符串切割开, 放在一个数组里面.
     * 语法：字符串.split('指定的切割符')
     * ○切割符可以不传递，就会和整体当做一个字符串
     * ○(''）空字符串会一位一位的切割
     * ○(' ') 字符串中有空格 会按照原字符串中的空格切割
     * 返回值：一个用指定切割符切割好的数组
     */
    var str = "hello world";

// 使用 split 切割成一个数组
    // @ts-ignore
    var res = str.split();
    console.log(res); //['hello world']

    var res1 = str.split("");
    console.log(res1); //['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

    var res2 = str.split(" ");
    console.log(res2); //['hello', 'world']
  },
  replace: () => {
    /**
     * 字符串常用方法之 replace
     * 作用：用指定的内容替换掉字符串中的内容
     * 语法：字符串.repalce(被替换的内容，要替换的内容)
     * ○被替换内容 => 换下内容
     * ○要替换内容 => 换上内容
     * 返回值：替换好的字符串
     * 注意：内容只能被替换一次，从索引0 的位置开始
     */
    var str = "hello world";
// 使用 replace 替换字符串中的内容
    var res = str.replace("l", "M");
    console.log(res); // heMlo world
    console.log(str); // hello world
  },
  slice: () => {
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

  },
  toLowerCase: () => {
    /**
     * 字符串常用方法之 toLowerCase 和 toUpperCase
     * 作用：这两个方法分别是用来给字母格式的字符串转成 小写字母 和 大写字母 的
     * 语法：
     * ○字符串.toLowerCase()
     * ○字符串.toUpperCase()
     */
    var str = "hello world";


    // 使用 toLowerCase 转换成小写
    var lower = str.toLowerCase();
    console.log(lower); // hello world

  },
  toUpperCase: () => {
    /**
     * 字符串常用方法之 toLowerCase 和 toUpperCase
     * 作用：这两个方法分别是用来给字母格式的字符串转成 小写字母 和 大写字母 的
     * 语法：
     * ○字符串.toLowerCase()
     * ○字符串.toUpperCase()
     */
    var str = "hello world";

    // 使用 toUpperCase 转换成大写
    var upper = str.toUpperCase();
    console.log(upper); // HELLO WORLD

  },
  substr: () => {
    /**
     * 字符串常用方法之 substr
     * 作用：substring 是用来截取字符串使用的
     * 语法： substring(从哪个索引开始，到哪个索引截止)，包含开始索引，不包含结束索引
     * 返回值：返回截取到的内容
     */
    var str = "hello world";

// 使用 substr截取字符串中的某一个内容
    var res = str.substr(2, 7);//从索引2开始，截取7个
    console.log(res); //llo wor
  },
  substring: () => {
    /**
     * 字符串常用方法之 substring
     * 作用：substring 是用来截取字符串使用的
     * 语法： substring(从哪个索引开始，到哪个索引截止)，包含开始索引，不包含结束索引
     * 返回值：返回截取到的内容
     */
    var str = "hello world";

    // 使用 substring截取字符串中的某一个内容
    var res = str.substring(2, 8);
    console.log(res); //llo wo
  },
  lastIndexOf: () => {
    /**
     * 字符串常用方法之 lastIndexOf
     * 作用：lastIndexOf 是从后向前检测该字符在字符串内的索引位置
     * 语法：字符串.indexOf(要查找的字符，开始索引)
     * 返回值：
     * ○如果有该字符内容, 那么就是该字符的索引位置
     * ○如果没有该字符内容, 就是 -1
     */
    let str = "hello world";

    // 使用 lastIndexOf 找到字符串中的某一个内容
    let index = str.lastIndexOf("l");
    console.log(index); //9 返回第一个找到的内容的下标后面的就不查找了,索引的位置不变

    let index1 = str.lastIndexOf("l", 8);
    console.log(index1); //3 返回第一个找到的内容的下标后面的就不查找了，索引的位置不变

    let index2 = str.lastIndexOf("w", 5);
    console.log(index2); //-1 从后开始查找，开始的索引是5 但是前面没有找到w 返回-1
  },
  indexOf: () => {
    /**
     * 字符串常用方法之 indexOf
     * 作用：indexOf 就是按照字符找到对应的索引
     * 语法：字符串.indexOf(要查找的字符，开始索引)
     * 返回值：
     * ○如果有该字符内容, 那么就是该字符的索引位置
     * ○如果没有该字符内容, 就是 -1
     */
    let str = "hello world";

    // 使用 indexOf 找到字符串中的某一个内容
    let index = str.indexOf("l", 0);
    console.log(index); // 2 返回第一个找到的内容的下标后面的就不查找了

    let index1 = str.indexOf("w", 3);
    console.log(index1); // 6 不管从那个索引开始，索引的位置不变

    let index2 = str.indexOf("w", 7);
    console.log(index2); // -1 从索引7开始查找没有找到返回-1
  },
  charCodeAt: () => {
    /**
     * 字符串常用方法之 charCodeAt
     * 作用：charCodeAt() 就是返回对应索引位置的 unicode 编码
     * 语法：字符串.charCodeAt(索引)
     * 返回值：该索引位置的对应字符的 编码(十进制)
     */
    let str = "hello world";
    // 使用 charAt 找到字符串中的某一个内容
    let index = str.charCodeAt(4);
    console.log(index); // 111
  },
  charAt: () => {
    /**
     * 作用：charAt() 是找到字符串中指定索引位置的内容返回
     * 语法：字符串.charAt(索引)
     * 返回值：该索引位置对应的字符
     * ○如果有该索引位置, 那么就是该索引位置的字符
     * ○如果没有该索引位置, 那么就是 空字符串('')
     */

    let str = "hello world";
    // 使用 charAt 找到字符串中的某一个内容
    let index = str.charAt(2);
    console.log(index); // l
    //查找索引为 13 的内容，因为没有返回是一共空字符串
    let index1 = str.charAt(13);
    console.log(index1); // ''
  }
};
