let browserEnv = {
    isMobile: () => {
        let arr=[1,2,3,4,5]
        arr.forEach((item, index) => {
            console.log(item);
            console.log(index);
        })
        let ua=''
        console.log(ua);
    },
    isWx: () => {
        let arr=[1,2,3,4,5]
        arr.forEach((item, index) => {
            console.log(item);
            console.log(index);
        })
        return ''
    },
    isWxMin: () => {
        return ''
    },
    isAli: () => {
        return ''
    },
    isAliMin: () => {
        return ''
    }
}
// 查看我的git Config mark ahrimansource@gmail.com
// 查看我的git Config

export default browserEnv
