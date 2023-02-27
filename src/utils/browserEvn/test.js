function money (v_money, need_dot) {
    try {
        var p_number = parseFloat(v_money);
        if(isNaN(p_number)) {
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
let as=[]
for (let i = 0; i <900000000 ; i++) {
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

/**
 * 数组差集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 * eg: [1, 2, 3] [2, 4, 5] 差集为[1,3,4,5]
 */
export const arrDifference = (arrOne, arrTwo) => {
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
    if(!oneKey&&!twoKey){
        return arrOne.map((oneKey, i) => ({ [oneKey]:arrTwo[i] }))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    }else{
        return arrOne.map((oneKey, i) => ({ oneKey, twoKey: arrTwo[i] }))
    }
}
/**
 * 数组对象求和
 * @param {Object} arrObj 数组对象
 * @param {String} key 数组对应的 key 值
 */
export const arrObjSum = (obj, key) => {
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

/**
 * 7
 * 数组求和
 * @param {Array} arr 数组
 */
export const arrSum = arr => {
    return arr.reduce((prev, cur)=> {
        return prev + cur
    }, 0)
}

/**
 * 8
 * 数组是否包含某值
 * @param {Array} arr 数组
 * @param {}  value 值,目前只支持 String,Number,Boolean
 */
export const arrIncludeValue = (arr,  value) => {
    return arr.includes( value)
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

