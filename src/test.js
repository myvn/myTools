function netWork(time) {
    let data = {time: time}
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 1000 * time)
    })
}

async function foo(time) {
    return await netWork(time)
}

foo(2)
    .then(res => {
        console.log(res);
        return foo(3)
    })
    .then(res2 => {
        console.log(res2);
    })
