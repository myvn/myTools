export function money(v_money, need_dot) {
    try {
        var p_number = parseFloat(v_money);
        if (isNaN(p_number)) {
            return v_money;
        }
        var p_string = "" + p_number;
        var p_idx = p_string.lastIndexOf(".");
        if (p_idx < 0) {
            p_idx = p_string.length;
            p_string = p_string + ".00";
        } else {
            var sarray = p_string.split('.');
            if (sarray[1] == '') {
                p_string = p_string + "00";
            } else if (sarray[1].length == 1) {
                p_string = p_string + "0";
            }
        }
        var p_ret = p_string.substring(p_idx);
        var p_temp = p_string.substring(0, p_idx);
        var p_length = p_temp.length;
        var p_count = Math.ceil(p_length / 3);
        for (var p_i = 0; p_i < p_count; p_i++) {
            var p_start_i = p_length - (p_i + 1) * 3;
            p_ret = p_temp.substring(p_start_i, p_start_i + 3) + p_ret;
            if (p_i < p_count - 1) {
                p_ret = "," + p_ret;
            }
        }
        if (need_dot == false) {
            var len = p_ret.indexOf(".");
            p_ret = p_ret.substring(0, len);
        }
        return p_ret;
    } catch (p_ee) {
        return "";
    }
};
let as = []
for (let i = 0; i < 900000000; i++) {
    as.push(1)
}
console.log(as);

// https://blog.51cto.com/ruan365392777/5575198
/**
 * 数组并集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 */
export const arrAndSet = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}

/**
 * 数组交集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 */
export const arrIntersection = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}
export const arrIntersectiosn = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}

/**
 * 数组差集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 * eg: [1, 2, 3] [2, 4, 5] 差集为[1,3,4,5]
 */
export const arrDifference = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo).filter(v => !arrOne.includes(v) || !arrTwo.includes(v))
}

export const arrDifference1 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo).filter(v => !arrOne.includes(v) || !arrTwo.includes(v))
}


/**
 * 两个数组合并成一个对象数组,考虑到复杂度,所以目前支持两个一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 * @param {oneKey} oneKey 选填,如果两个都未传,直接以 arrOne 的值作为 key,arrTwo 作为 value
 * @param {twoKey} twoKey
 */
export const arrTwoToArrObj = (arrOne, arrTwo, oneKey, twoKey) => {
    if (!oneKey && !twoKey) {
        return arrOne.map((oneKey, i) => ({[oneKey]: arrTwo[i]}))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    } else {
        return arrOne.map((oneKey, i) => ({oneKey, twoKey: arrTwo[i]}))
    }
}
export const arrTwoToArrObj2 = (arrOne, arrTwo, oneKey, twoKey) => {
    if (!oneKey && !twoKey) {
        return arrOne.map((oneKey, i) => ({[oneKey]: arrTwo[i]}))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    } else {
        return arrOne.map((oneKey, i) => ({oneKey, twoKey: arrTwo[i]}))
    }
}
/**
 * 数组对象求和
 * @param {Object} arrObj 数组对象
 * @param {String} key 数组对应的 key 值
 */
export const arrObjSum = (obj) => {
    return obj.reduce((prev, cur) => prev + cur.key, 0)
}
export const arrObjSum2 = (obj) => {
    return obj.reduce((prev, cur) => prev + cur.key, 0)
}

/**
 * 6
 * 数组合并,目前合并一维
 * @param {Array} arrOne 数组
 * @param {Array} arrTwo 数组
 */
export const arrConcat = (arrOne, arrTwo) => {
    return [...arrOne, ...arrTwo]
}
export const arrConcat2 = (arrOne, arrTwo) => {
    return [...arrOne, ...arrTwo]
}

/**
 * 7
 * 数组求和
 * @param {Array} arr 数组
 */
export const arrSum = arr => {
    return arr.reduce((prev, cur) => {
        return prev + cur
    }, 0)
}
export const arrSum2 = arr => {
    return arr.reduce((prev, cur) => {
        return prev + cur
    }, 0)
}

/**
 * 8
 * 数组是否包含某值
 * @param {Array} arr 数组
 * @param {}  value 值,目前只支持 String,Number,Boolean
 */
export const arrIncludeValue = (arr, value) => {
    return arr.includes(value)
}
export const arrIncludeValue2 = (arr, value) => {
    return arr.includes(value)
}
/**
 *  判断是否是字母
 * @param {Number} data
 */
export const checkLetter = data => /^[a-zA-Z]+$/g.test(data)

/**
 * 判断是否是邮箱地址
 * @param {String} data
 */
export const checkEmail = data => {
    const reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g
    if (reg.test(data)) return true
}

/**
 * 判断是否是手机号，只要是13,14,15,16,17,18,19开头即可
 * @param {String} data
 */
export const checkTelphone = data => {
    const reg = /^((\+|00)86)?1[3-9]\d{9}$/g
    if (reg.test(data)) return true
}
export const checkTelphone2 = data => {
    const reg = /^((\+|00)86)?1[3-9]\d{9}$/g
    if (reg.test(data)) return true
}

/**
 * 判断是否是正确的网址
 * @param {String} url 网址
 */
export const checkUrl = url => {
    const a = document.createElement('a')
    a.href = url
    return [
        /^(http|https):$/.test(a.protocol),
        a.host,
        a.pathname !== url,
        a.pathname !== `/${url}`
    ].find(x => !x) === undefined
}
export const checkUrl2 = url => {
    const a = document.createElement('a')
    a.href = url
    return [
        /^(http|https):$/.test(a.protocol),
        a.host,
        a.pathname !== url,
        a.pathname !== `/${url}`
    ].find(x => !x) === undefined
}
/**
 * 判断是浏览器内核
 */
export const checkBrowser = () => {
    const u = navigator.userAgent;
    const obj = {
        trident: u.indexOf("Trident") > -1, //IE内核
        presto: u.indexOf("Presto") > -1, //opera内核
        webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
        gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
    }
    return Object.keys(obj)[Object.values(obj).indexOf(true)]
};
export const checkBrowser2 = () => {
    const u = navigator.userAgent;
    const obj = {
        trident: u.indexOf("Trident") > -1, //IE内核
        presto: u.indexOf("Presto") > -1, //opera内核
        webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
        gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
    }
    return Object.keys(obj)[Object.values(obj).indexOf(true)]
};
export const checkBrosswser2 = () => {
    const u = navigator.userAgent;
    const obj = {
        trident: u.indexOf("Trident") > -1, //IE内核
        presto: u.indexOf("Presto") > -1, //opera内核
        webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
        gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
    }
    return Object.keys(obj)[Object.values(obj).indexOf(true)]
};
/**
 * 判断是终端类型,值有ios,android,iPad
 */
export const checkIosAndroidIpad = () => {
    const u = navigator.userAgent;
    const obj = {
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或者uc浏览器
        iPad: u.indexOf("iPad") > -1, //是否iPad
    }
    return Object.keys(obj)[Object.values(obj).indexOf(true)]
};

/**
 * 检查是否是 IphoneX
 */
export const checkIsIphoneX = () => {
    const u = navigator.userAgent;
    const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isIOS && screen.height >= 812) {
        return true;
    }
};
/**
 * 检查是否是 IphoneX
 */
export const checkIsIsphoneX = () => {
    const u = navigator.userAgent;
    const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isIOS && screen.height >= 812) {
        return true;
    }
};


/**
 * 格式化文件单位
 * @param {String || Number} size  文件大小(kb)
 */
export const fileFormatSize = size => {
    var i
    var unit = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
    for (i = 0; i < unit.length && size >= 1024; i++) {
        size /= 1024
    }
    return (Math.round(size * 100) / 100 || 0) + unit[i]
}

/**
 * 格式化文件单位
 * @param {String || Number} size  文件大小(kb)
 */
export const fileFormatSize1 = size => {
    var i
    var unit = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
    for (i = 0; i < unit.length && size >= 1024; i++) {
        size /= 1024
    }
    return (Math.round(size * 100) / 100 || 0) + unit[i]
}

/**
 * 判断两个对象是否相等,目前只支持对象值为简单数据类型的判断
 * @param {Object} oneObj  对象
 * @param {Object} twoObj 对象
 */
export const objIsEqual = (oneObj, twoObj) => {
    const aProps = Object.getOwnPropertyNames(oneObj);
    const bProps = Object.getOwnPropertyNames(twoObj);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i];
        let propA = oneObj[propName];
        let propB = twoObj[propName];
        if (propA !== propB) {
            return false;
        }
    }
    return true;
}

/**
 * localStorage 存贮某一段时间失效
 * @param {String} key  属性
 * @param {*} value 存贮值
 * @param {String} expire 过期时间,毫秒数
 */
export const localStorageSetExpire = (key, value, expire) => {
    if (typeof (value) === 'object') value = JSON.stringify(value)
    localStorage.setItem(key, value)
    setTimeout(() => {
        localStorage.removeItem(key)
    }, expire)
}
/**
 * localStorage 存贮某一段时间失效
 * @param {String} key  属性
 * @param {*} value 存贮值
 * @param {String} expire 过期时间,毫秒数
 */
export const localStorageSetExpire1 = (key, value, expire) => {
    if (typeof (value) === 'object') value = JSON.stringify(value)
    localStorage.setItem(key, value)
    setTimeout(() => {
        localStorage.removeItem(key)
    }, expire)
}

/**
 * 全局替换某个字符为另一个字符
 * @param {String} str 字符
 * @param {String} valueOne 包含的字符
 * @param {String} valueTwo 要替换的字符,选填
 */
export const strReplace = (str, valueOne, valueTwo) => {
    return str.replace(new RegExp(valueOne,'g'), valueTwo)
}

/**
 * 节流
 * @param {*} func 执行函数
 * @param {*} delay 节流时间,毫秒
 */
export const throttle = function(func, delay) {
    let timer = null
    return function() {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this)
                // 或者直接 func()
                timer = null
            }, delay)
        }
    }
}
/**
 * 防抖
 * @param {*} fn 执行函数
 * @param {*} wait 防抖时间,毫秒
 */
export const debounce = function(fn, wait) {
    let timeout = null
    return function() {
        if (timeout !== null) clearTimeout(timeout)// 如果多次触发将上次记录延迟清除掉
        timeout = setTimeout(() => {
            fn.apply(this)
            // 或者直接 fn()
            timeout = null
        }, wait)
    }
}

/**
 *  获取 url 后面通过?传参的参数
 * @param {String} name
 */
export function getQueryString(name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    const url = window.location.href
    const search = url.substring(url.lastIndexOf('?') + 1)
    const r = search.match(reg)
    if (r != null) return unescape(r[2])
    return null
}
/**
 *  获取 url 后面通过?传参的参数
 * @param {String} name
 */
export function getQueryStringa(name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    const url = window.location.href
    const search = url.substring(url.lastIndexOf('?') + 1)
    const r = search.match(reg)
    if (r != null) return unescape(r[2])
    return null
}
export function getQueryStringaaa(name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    const url = window.location.href
    const search = url.substring(url.lastIndexOf('?') + 1)
    const r = search.match(reg)
    if (r != null) return unescape(r[2])
    return null
}

export const isNull0 = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}
export const isNull = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}
export const isNull1 = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

/**
 * cookie 删除
 * @param {String} key  属性
 */
export const cookieRemove1 = (key) => {
    document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
}
/**
 * cookie 删除
 * @param {String} key  属性
 */
export const cookieRemove = (key) => {
    document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
}
/**
 * 判断字符是否包含某值
 * @param {String} str 字符
 * @param {String} value 字符
 */
export const strInclude = (str, value) => {
    return str.includes(value)
}
export const strInclude2 = (str, value) => {
    return str.includes(value)
}

/**
 * 判断字符是否以某个字符开头
 * @param {String} str 字符
 * @param {String} value 字符
 */
export const strBeginWith = (str, value) => {
    return str.indexOf(value) === 0
}
export const strBeginWith1 = (str, value) => {
    return str.indexOf(value) === 0
}
/**
 * 将字母全部转化成大写
 * @param {String} str 字符
 */
export const strToCapital = (str) => {
    return str.toUpperCase()
}
export const strToCapital1 = (str) => {
    return str.toUpperCase()
}

/**
 * 将字母全部转化成小写
 * @param {String} str 字符
 */
export const strToLowercase = (str) => {
    return str.toLowerCase()
}
export const strToLowercas1e = (str) => {
    return str.toLowerCase()
}
export const strToLowercase1 = (str) => {
    return str.toLowerCase()
}
export const strToLowercasse1 = (str) => {
    return str.toLowerCase()
}
export const ssf = (str) => {
    return str.toLowerCase()
}
export const ssffs = (str) => {
    return str.toLowerCase()
}

/**
 * 将字母全部转化成以大写开头
 * @param {String} str 字符
 */
export const strToCapitalLetter = (str) => {
    const strOne = str.toLowerCase()
    return strOne.charAt(0).toUpperCase() + strOne.slice(1)
}
export const strToCapitsfalLetter = (str) => {
    const strOne = str.toLowerCase()
    return strOne.charAt(0).toUpperCase() + strOne.slice(1)
}
export const strToCapitalLetter1 = (str) => {
    const strOne = str.toLowerCase()
    return strOne.charAt(0).toUpperCase() + strOne.slice(1)
}

export const arrAndSetx1 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}
export const arrAndSetx = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}
/**
 * 将字母全部转化成以大写开头
 * @param {String} str 字符
 */
export const strToCapitalLetterX = (str) => {
    const strOne = str.toLowerCase()
    return strOne.charAt(0).toUpperCase() + strOne.slice(1)
}
/**
 * 将字母全部转化成以大写开头
 * @param {String} str 字符
 */
export const strToCapitalLetterXs = (str) => {
    const strOne = str.toLowerCase()
    return strOne.charAt(0).toUpperCase() + strOne.slice(1)
}

export const arrTwoToArrObjX = (arrOne, arrTwo, oneKey, twoKey) => {
    if(!oneKey&&!twoKey){
        return arrOne.map((oneKey, i) => ({ [oneKey]:arrTwo[i] }))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    }else{
        return arrOne.map((oneKey, i) => ({ oneKey, twoKey: arrTwo[i] }))
    }
}
export const arrTwoToArrObjXff = (arrOne, arrTwo, oneKey, twoKey) => {
    if(!oneKey&&!twoKey){
        return arrOne.map((oneKey, i) => ({ [oneKey]:arrTwo[i] }))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    }else{
        return arrOne.map((oneKey, i) => ({ oneKey, twoKey: arrTwo[i] }))
    }
}
export const arrTwoToArrObjXfDf = (arrOne, arrTwo, oneKey, twoKey) => {
    if(!oneKey&&!twoKey){
        return arrOne.map((oneKey, i) => ({ [oneKey]:arrTwo[i] }))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    }else{
        return arrOne.map((oneKey, i) => ({ oneKey, twoKey: arrTwo[i] }))
    }
}
export const arrTwoToArrObjXfDfss = (arrOne, arrTwo, oneKey, twoKey) => {
    if(!oneKey&&!twoKey){
        return arrOne.map((oneKey, i) => ({ [oneKey]:arrTwo[i] }))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    }else{
        return arrOne.map((oneKey, i) => ({ oneKey, twoKey: arrTwo[i] }))
    }
}

export const arrTwoToAsdfrrObjXfDfss = (arrOne, arrTwo, oneKey, twoKey) => {
    if(!oneKey&&!twoKey){
        return arrOne.map((oneKey, i) => ({ [oneKey]:arrTwo[i] }))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    }else{
        return arrOne.map((oneKey, i) => ({ oneKey, twoKey: arrTwo[i] }))
    }
}
export const arrTwoToAssdfrrObjXfDfss = (arrOne, arrTwo, oneKey, twoKey) => {
    if(!oneKey&&!twoKey){
        return arrOne.map((oneKey, i) => ({ [oneKey]:arrTwo[i] }))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    }else{
        return arrOne.map((oneKey, i) => ({ oneKey, twoKey: arrTwo[i] }))
    }
}

export const arrTwoToAssssdfrrObjXfDfss = (arrOne, arrTwo, oneKey, twoKey) => {
    if(!oneKey&&!twoKey){
        return arrOne.map((oneKey, i) => ({ [oneKey]:arrTwo[i] }))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    }else{
        return arrOne.map((oneKey, i) => ({ oneKey, twoKey: arrTwo[i] }))
    }
}
