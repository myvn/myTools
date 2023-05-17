// 随机字符
import {randomAny} from "./utils/randomAny";

// 数据存储工具类
import StorageData from "./utils/storageData";
import JsSm4Client from "./utils/encrypt/JsSm4Client";
// 全局置灰
import {setGrayscale} from "./utils/style/setGrayscale";

export {
    // 全局置灰
    setGrayscale,
    // 数据存储工具类
    StorageData,
    // 随机字符串生成
    randomAny,
    // 国密4 加密
    JsSm4Client
}

