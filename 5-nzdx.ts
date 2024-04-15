let promise: Promise<number> = new Promise((resolve) => {
    resolve(123)
})

promise.then(res => {
    console.log(res)
})