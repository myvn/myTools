function netWork(time) {
    let data = {
        status: 200,
        data: {
            name: 1
        }
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 1000 * time)
    })
}
async function foo() {
 return  await netWork(2)
}

foo().then(res => {
    console.log(res);
})
