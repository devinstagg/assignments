const backend = (number) => {
    const numberTestPromise = new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve('The number is even!')
        } else if (number % 2 === 1) {
            reject('The number is odd!')
        }
    })
    return numberTestPromise

}
const builtInFuncs = () => {
    const builtInFuncsPromise = backend(2)
    builtInFuncsPromise.then((successObject) => {
        console.log(successObject)
    }).catch((failureObject) => {
        console.log(failureObject)
    })

}
const asyncAwait = async () => {
    const asyncAwaitPromise = backend(4)
    try {
        const successObject = await asyncAwaitPromise
        console.log(successObject)
    } catch (failureObject) {
        console.log(failureObject)
    }
}