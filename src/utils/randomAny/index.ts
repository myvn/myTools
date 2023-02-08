// 随机集合设置
const randomMapOption = {
    // 数字
    num: '1234567890',
    // 字母
    az: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    // 英文符号
    fh: '<~!@#$%^*()_+-=[]{}|;:,./?>',
    // // 拉丁字母
    // latins: 'αβγδεζηθικλμνξοπρστυφχψω',
    // // 数学符号
    // maths: '㏒㏑∑√∫∞½¾¼‰≧≦≮≯≡≈≠÷±∮'
}

interface randomOption {
    // 数字
    num?: boolean;
    // 字母
    az?: boolean;
    // 符号
    fh?: boolean;
}

/**
 * 拼接字符串
 * @param option
 */
const spliceChars = (option: randomOption) => {
    let chars = ''
    for (let optionsKey in option) {
        if (option[optionsKey]) {
            chars += randomMapOption[optionsKey]
        }
    }
    return chars
}


/**
 * 随机字符
 * @param length
 * @param options
 * @return {string}
 */

export function randomAny(length?: number, options?: randomOption | string) {
    let resultString = ''
    let chars = ''
    // 默认4 最大1000
    length = length ? (length > 1000 ? 1000 : Math.abs(length)) : 4

    if (options) { // this.options 存在
        if (typeof options === "object") { // object 类型
            chars = spliceChars(options)
        } else if (typeof options === "string") { // string 类型
            // 自定义随机
            chars = options
        }
    } else { // this.options 不存在
        options = {num: true, az: true, fh: true}
        chars = spliceChars(options)
    }

    // 开始随机拼接
    while (length > 0) {
        length--;
        resultString += chars[Math.floor(Math.random() * chars.length)];
    }
    // 返回结果
    return resultString
}


