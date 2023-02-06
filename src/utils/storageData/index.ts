import JsSm4Client from '../../utils/encrypt/JsSm4Client'

//   { publicKey:"公钥",privateKey:"私钥",envName:"dev",storageObj:"存储类型 localStorage||sessionStorage" }
interface Option {
    // 公钥
    publicKey: string,
    // 环境名称
    envName?: string
    // 存储对象
    storageObj?: string
    // 私钥
    privateKey?: string
}

export default class StorageData {
    // 存储对象 : localStorage||sessionStorage
    storageObj;
    // 加密实体
    jsEncryptInstance;
    // 配置参数
    option: object
    // 是否开发环境
    isDev: boolean


    /**
     * @param option { publicKey:"公钥",privateKey:"私钥",envName:"dev",storageObj:"存储类型 localStorage||sessionStorage" }
     */
    constructor(option: Option) {
        // 存储队形赋值
        this.storageObj = this.getStorageType(option['storageObj'])
        // 配置合并
        this.option = Object.assign(
            {},
            {envName: 'dev', storageObj: 'l', publicKey: 'AnyString', privateKey: 'AnyString'}
            , option)
        // 环境赋值
        this.isDev = this.option['envName'] === 'dev'
        // 加密实体
        this.jsEncryptInstance = new JsSm4Client(this.option['publicKey'])
    }

    /**
     * 设置数据 , 当数据类型为object 时候会自动
     * @param key
     * @param data
     */
    setData = (key, data: string | object) => {
        try {
            if (typeof data === 'object') {
                data = JSON.stringify(data)
            }
            this.storageObj.setItem(this.isDev ? key : `dev_${key}`, this.isDev ? data : this.dataEncrypt(data))
        } catch (error) {
            console.error(error)
        }
    }

    /**
     * 获取数据
     * @param key
     */
    getData = (key) => {
        let result = ''
        try {
            let value = this.isDev ? this.storageObj.getItem(key) : this.dataDecrypt(this.storageObj.getItem(`dev_${key}`))
            result = JSON.parse(value)
        } catch (error) {
            result = localStorage.getItem(key)
        }
        return result
    }

    /**
     * 删除数据
     * @param key
     */
    removeData = (key) => {
        try {
            this.storageObj.removeItem(this.isDev ? key : `dev_${key}`)
        } catch (error) {
            console.error(error)
        }
    }

    /**
     * 加密数据
     * @param plaintext
     * @private
     */
    private dataEncrypt = (plaintext) => {
        return this.jsEncryptInstance.encryptData(plaintext)
    }
    /**
     * 解密数据
     * @param ciphertext
     * @private
     */
    private dataDecrypt = (ciphertext) => {
        return this.jsEncryptInstance.decryptData(ciphertext)
    }

    /**
     * 获取存储对象
     * @param key
     */
    private getStorageType = (key) => {
        let storageTypeArr = ["localStorage", "sessionStorage", "l", "s", "local", "session"]
        let storageType = {
            "localStorage": localStorage,
            "sessionStorage": sessionStorage,
            "l": localStorage,
            "s": sessionStorage,
            "local": localStorage,
            "session": sessionStorage
        }
        if (key && storageTypeArr.indexOf(key) !== -1) {
            return storageType[key]
        } else {
            return localStorage
        }
    }
}
