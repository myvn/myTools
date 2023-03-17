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
/**
 * 数组并集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 */
export const arrAndSet = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}
export const arrAndSet1 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}

export const arrAndSet2 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}

export const arrAndSet4 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}
export const arrAndSet5 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}

export const arrAndSet6 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}
export const arrAndSet7 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}
export const arrAndSet8 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}
export const arrAndSet9 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}
export const arrAndSet10 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}
export const arrAndSet11 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}
export const arrAndSet12 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}

export const arrAndSet13 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}

export const arrAndSet14 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}

export const arrAndSet15 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}
export const arrAndSet16 = (arrOne, arrTwo) => {
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
export const arrIntersection0 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}
export const arrIntersection1 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}
export const arrIntersection2 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}

export const arrIntersection3 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}
export const arrIntersection4 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}
export const arrIntersection5 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}
export const arrIntersection6 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}
export const arrIntersection7 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}
export const arrIntersection8 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}
export const arrIntersection9 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}
export const arrIntersection10 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
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

/**
 * 数组对象求和
 * @param {Object} arrObj 数组对象
 * @param {String} key 数组对应的 key 值
 */
export const arrObjSum = (obj) => {
    return obj.reduce((prev, cur) => prev + cur.key, 0)
}

export const arrObjSum1 = (obj) => {
    return obj.reduce((prev, cur) => prev + cur.key, 0)
}
export const arrObjSum2 = (obj) => {
    return obj.reduce((prev, cur) => prev + cur.key, 0)
}


/**
 * 数组合并,目前合并一维
 * @param {Array} arrOne 数组
 * @param {Array} arrTwo 数组
 */
export const arrConcat = (arrOne, arrTwo) => {
    return [...arrOne, ...arrTwo]
}

/**
 * 数组是否包含某值
 * @param {Array} arr 数组
 * @param {}  value 值,目前只支持 String,Number,Boolean
 */
export const arrIncludeValue = (arr, value) => {
    return arr.includes(value)
}

/**
 * 数组去重
 * @param {Array} arr  数组
 */
export const arrRemoveRepeat = arr => {
    return Array.from(new Set(arr))
}

/**
 * 数组排序
 * @param {Array} arr  数组
 * @param {Boolean} ascendFlag   升序,默认为 true
 */
export const arrOrderAscend = (arr, ascendFlag = true) => {
    return arr.sort((a, b) => {
        return ascendFlag ? a - b : b - a
    })
}

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
export const checkTelPhone = data => {
    const reg = /^((\+|00)86)?1[3-9]\d{9}$/g
    if (reg.test(data)) return true
}

export function rnp() {
    return new Promise((resolve) => {
        resolve(1)
    })
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
 * 判断是否是微信,qq 或 uc
 */
export const checkWeixinQqUc = () => {

    const u = navigator.userAgent;
    const obj = {
        weixin: u.indexOf("MicroMessenger") > -1, //是否微信
        // qq: u.match(/QQ/i) == "qq"&&!u.indexOf('MQQBrowser') > -1, //是否QQ
        uc: u.indexOf('UCBrowser') > -1
    }
    return Object.keys(obj)[Object.values(obj).indexOf(true)]
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
        if ( propA !== propB) {
            return false;
        }
    }
    return true;
}
/**
 * 对象深度克隆,
 * JSON.stringify深度克隆对象
 * 无法对函数 、RegExp等特殊对象的克隆,
 * 会抛弃对象的constructor,所有的构造函数会指向Object
 * 对象有循环引用,会报错
 * @param {Object}  obj 克隆的对象
 */


/**
 * sessionStorage 存贮某一段时间失效
 * @param {String} key  属性
 * @param {*} value 存贮值
 * @param {String} expire 过期时间,毫秒数
 */
export const sessionStorageSetExpire = (key, value, expire) => {
    if (typeof (value) === 'object') value = JSON.stringify(value)
    sessionStorage.setItem(key, value)
    setTimeout(() => {
        sessionStorage.removeItem(key)
    }, expire)
}
export const sessionStorageSetExpire1 = (key, value, expire) => {
    if (typeof (value) === 'object') value = JSON.stringify(value)
    sessionStorage.setItem(key, value)
    setTimeout(() => {
        sessionStorage.removeItem(key)
    }, expire)
}
export const sessionStorageSetExpire2 = (key, value, expire) => {
    if (typeof (value) === 'object') value = JSON.stringify(value)
    sessionStorage.setItem(key, value)
    setTimeout(() => {
        sessionStorage.removeItem(key)
    }, expire)
}
export const sessionStorageSetExpire3 = (key, value, expire) => {
    if (typeof (value) === 'object') value = JSON.stringify(value)
    sessionStorage.setItem(key, value)
    setTimeout(() => {
        sessionStorage.removeItem(key)
    }, expire)
}
export const sessionStorageSetExpire4 = (key, value, expire) => {
    if (typeof (value) === 'object') value = JSON.stringify(value)
    sessionStorage.setItem(key, value)
    setTimeout(() => {
        sessionStorage.removeItem(key)
    }, expire)
}
export const sessionStorageSetExpire5 = (key, value, expire) => {
    if (typeof (value) === 'object') value = JSON.stringify(value)
    sessionStorage.setItem(key, value)
    setTimeout(() => {
        sessionStorage.removeItem(key)
    }, expire)
}
export const sessionStorageSetExpire6 = (key, value, expire) => {
    if (typeof (value) === 'object') value = JSON.stringify(value)
    sessionStorage.setItem(key, value)
    setTimeout(() => {
        sessionStorage.removeItem(key)
    }, expire)
}
export const sessionStorageSetExpire7 = (key, value, expire) => {
    if (typeof (value) === 'object') value = JSON.stringify(value)
    sessionStorage.setItem(key, value)
    setTimeout(() => {
        sessionStorage.removeItem(key)
    }, expire)
}
export const sessionStorageSetExpire8 = (key, value, expire) => {
    if (typeof (value) === 'object') value = JSON.stringify(value)
    sessionStorage.setItem(key, value)
    setTimeout(() => {
        sessionStorage.removeItem(key)
    }, expire)
}
export const sessionStorageSetExpire9 = (key, value, expire) => {
    if (typeof (value) === 'object') value = JSON.stringify(value)
    sessionStorage.setItem(key, value)
    setTimeout(() => {
        sessionStorage.removeItem(key)
    }, expire)
}
export const sessionStorageSetExpire10 = (key, value, expire) => {
    if (typeof (value) === 'object') value = JSON.stringify(value)
    sessionStorage.setItem(key, value)
    setTimeout(() => {
        sessionStorage.removeItem(key)
    }, expire)
}
