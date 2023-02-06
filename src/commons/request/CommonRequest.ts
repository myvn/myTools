/**
 * 公共Request类
 *
 * 所有业务请求类需要实现此接口
 *
 * @author my
 */
interface CommonRequest {
    // 请求地址
    url;
    // 请求参数
    params;
    // 请求超时时间
    timeout;
}

export default CommonRequest
