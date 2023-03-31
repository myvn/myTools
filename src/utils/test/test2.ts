/**
 * 数组并集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 */
export const arrAndSet = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}
export const arrAndSet2 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}
export const arrAndSet3 = (arrOne, arrTwo) => {
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
export const arrAndSet17 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}
export const arrAndSet18 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}
export const arrAndSet19 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}
export const arrAndSet20 = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}

export const arrIntersection = (arrOne, arrTwo) => {
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
export const arrIntersection101 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}
export const arrIntersection102 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}
export const arrIntersection103 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}
export const arrIntersection104 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}
export const arrIntersection105 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}
export const arrIntersection106 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}
export const arrIntersection107 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}
export const arrIntersection117 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}

export const arrIntersection147 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}

export const filters = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}

export const filterX = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}

export const arrIntersection148 = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}

export const arrTwoToArrObj = (arrOne, arrTwo, oneKey, twoKey) => {
    if (!oneKey && !twoKey) {
        return arrOne.map((oneKey, i) => ({[oneKey]: arrTwo[i]}))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    } else {
        return arrOne.map((oneKey, i) => ({oneKey, twoKey: arrTwo[i]}))
    }
}
export const arrTwoToArrObjId = (arrOne, arrTwo, oneKey, twoKey) => {
    if (!oneKey && !twoKey) {
        return arrOne.map((oneKey, i) => ({[oneKey]: arrTwo[i]}))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    } else {
        return arrOne.map((oneKey, i) => ({oneKey, twoKey: arrTwo[i]}))
    }
}
export const arrTwoToArrObjId3 = (arrOne, arrTwo, oneKey, twoKey) => {
    if (!oneKey && !twoKey) {
        return arrOne.map((oneKey, i) => ({[oneKey]: arrTwo[i]}))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    } else {
        return arrOne.map((oneKey, i) => ({oneKey, twoKey: arrTwo[i]}))
    }
}
export const arrTwoToArrObjId4 = (arrOne, arrTwo, oneKey, twoKey) => {
    if (!oneKey && !twoKey) {
        return arrOne.map((oneKey, i) => ({[oneKey]: arrTwo[i]}))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    } else {
        return arrOne.map((oneKey, i) => ({oneKey, twoKey: arrTwo[i]}))
    }
}
export const arrTwoToArrObjId5 = (arrOne, arrTwo, oneKey, twoKey) => {
    if (!oneKey && !twoKey) {
        return arrOne.map((oneKey, i) => ({[oneKey]: arrTwo[i]}))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    } else {
        return arrOne.map((oneKey, i) => ({oneKey, twoKey: arrTwo[i]}))
    }
}
export const arrTwoToArrObjId11 = (arrOne, arrTwo, oneKey, twoKey) => {
    if (!oneKey && !twoKey) {
        return arrOne.map((oneKey, i) => ({[oneKey]: arrTwo[i]}))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    } else {
        return arrOne.map((oneKey, i) => ({oneKey, twoKey: arrTwo[i]}))
    }
}
export const arrTwoToArrObjId12 = (arrOne, arrTwo, oneKey, twoKey) => {
    if (!oneKey && !twoKey) {
        return arrOne.map((oneKey, i) => ({[oneKey]: arrTwo[i]}))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    } else {
        return arrOne.map((oneKey, i) => ({oneKey, twoKey: arrTwo[i]}))
    }
}
export const arrTwoToArrObjId13 = (arrOne, arrTwo, oneKey, twoKey) => {
    if (!oneKey && !twoKey) {
        return arrOne.map((oneKey, i) => ({[oneKey]: arrTwo[i]}))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    } else {
        return arrOne.map((oneKey, i) => ({oneKey, twoKey: arrTwo[i]}))
    }
}
export const arrTwoToArrObjId14 = (arrOne, arrTwo, oneKey, twoKey) => {
    if (!oneKey && !twoKey) {
        return arrOne.map((oneKey, i) => ({[oneKey]: arrTwo[i]}))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    } else {
        return arrOne.map((oneKey, i) => ({oneKey, twoKey: arrTwo[i]}))
    }
}
export const arrTwoToArrObjId15 = (arrOne, arrTwo, oneKey, twoKey) => {
    if (!oneKey && !twoKey) {
        return arrOne.map((oneKey, i) => ({[oneKey]: arrTwo[i]}))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    } else {
        return arrOne.map((oneKey, i) => ({oneKey, twoKey: arrTwo[i]}))
    }
}
export const arrTwoToArrObjId16 = (arrOne, arrTwo, oneKey, twoKey) => {
    if (!oneKey && !twoKey) {
        return arrOne.map((oneKey, i) => ({[oneKey]: arrTwo[i]}))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    } else {
        return arrOne.map((oneKey, i) => ({oneKey, twoKey: arrTwo[i]}))
    }
}
export const arrTwoToArrObjId17 = (arrOne, arrTwo, oneKey, twoKey) => {
    if (!oneKey && !twoKey) {
        return arrOne.map((oneKey, i) => ({[oneKey]: arrTwo[i]}))
        // 或者,此方法针对将 arrTwo 的索引作为 key 的情况,arrTwo 值会覆盖 arrOne
        // return Object.assign({}, arrOne, arrTwo)
    } else {
        return arrOne.map((oneKey, i) => ({oneKey, twoKey: arrTwo[i]}))
    }
}
