/**
 * 加密工具接口
 */
export interface EncryptInterface {
    // 必填 公钥
    publicKey: string | number;
    // 私钥
    privateKey?: string | number;
    // 必填 加密实例
    jsEncryptInstance: any;


    /**
     * 加密
     * @param ciphertext
     */
    encryptData(ciphertext): string

    /**
     * 解密
     * @param plaintext
     */
    decryptData(plaintext): string
}
