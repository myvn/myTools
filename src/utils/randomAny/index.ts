// 随机集合设置
const randomMapOption = {
    // 数字
    numbers: '1234567890',
    // 字母
    letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    // 英文符号
    specials: '<~!@#$%^*()_+-=[]{}|;:,./?>',
    // // 拉丁字母
    // latins: 'αβγδεζηθικλμνξοπρστυφχψω',
    // // 数学符号
    // maths: '㏒㏑∑√∫∞½¾¼‰≧≦≮≯≡≈≠÷±∮'
}

/**
 * 随机字符
 * @param length
 * @param options
 * @return {string}
 */

const randomAny = (length = 4, options = {}) => {
    let chars = '';
    let resultString = '';
    if (options === true || options === false || options === '' || JSON.stringify(options) === '{}') {
        // 所有类型的字符
        for (let defaultOptionKey in randomMapOption) {
            chars += randomMapOption[defaultOptionKey]
        }
    } else if (typeof options == 'string') {
        // 限制为当前传入的字符
        chars = options;
    } else {
        // 按需返回
        for (let optionsKey in randomMapOption) {
            if (typeof (options[optionsKey]) === 'boolean' && options[optionsKey] !== false) {
                chars += randomMapOption[optionsKey]
            } else if (typeof (options[optionsKey]) === 'undefined') {
                chars += randomMapOption[optionsKey]
            } else if (typeof (options[optionsKey]) === 'string') {
                if (options[optionsKey] !== '') {
                    chars += options[optionsKey]
                } else if (options[optionsKey] === '') {
                    chars += randomMapOption[optionsKey]
                }
            }
        }
    }
    while (length > 0) {
        length--;
        resultString += chars[Math.floor(Math.random() * chars.length)];
    }
    return resultString;
}
export {
    randomAny,
    randomMapOption
}
