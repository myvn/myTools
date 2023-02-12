/**
 * 全局置灰
 * dom中必须有id为app的标签
 * @param num   灰度 0-100 ,默认100.
 * @param domId
 */
export function setGrayscale(num: number = 100, domId?: string) {
    let html_box = document.getElementById(`${domId ?? 'app'}`)
    if (html_box) {
        html_box.style.filter = `grayscale(${num}%)`
    } else {
        console.log(`没有id为${domId}的dom对象`);
    }
}
