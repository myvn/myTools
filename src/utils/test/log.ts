export default // @ts-ignore
class Log extends console{
    constructor() {
        super();
    }
    getLog(){
        return "test"
    }
    setLog(log){
        return log
    }
    detLog(log){
        return log
    }
    log(text){
        console.log(text);
        return new Promise((resolve) => {
            resolve(text)
        });
    }
    maYang(){
        return new Promise((reject) => {
            reject(1)
        });
    }
}
