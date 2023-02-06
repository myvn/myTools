import {EncryptInterface} from "./interface/encryptInterface";
import JsSm4 from 'jssm4'

/**
 * 国密4工具类
 */
export default class JsSm4Client implements EncryptInterface {
    publicKey;
    jsEncryptInstance;

    /**
     * 加密key
     * @param publicKey
     */
    constructor(publicKey:string) {
        this.publicKey = publicKey
        this.jsEncryptInstance = new JsSm4(publicKey)
    }

    /**
     * 加密方法
     * @param plaintext
     */
    encryptData( plaintext:string): string {
        return this.jsEncryptInstance.encryptData_ECB(plaintext);
    }

    /**
     * 解密方法
     * @param ciphertext
     */
    decryptData(ciphertext:string): string {
        return this.jsEncryptInstance.decryptData_ECB(ciphertext);
    }


}
