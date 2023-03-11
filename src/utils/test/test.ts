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

/**
 * 数组交集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 */
export const arrIntersection = (arrOne, arrTwo) => {
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
    if(!oneKey&&!twoKey){
        return arrOne.map((oneKey, i) => ({ [oneKey]:arrTwo[i] }))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    }else{
        return arrOne.map((oneKey, i) => ({ oneKey, twoKey: arrTwo[i] }))
    }
}
