
console.log("synchronous 1");

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data back from server");
    }, 3000)

    setTimeout(() => {
      reject("fail to get data from server");
    }, 2000)
})

promise.then(resp => {
    console.log(resp);
}).catch(err => {
    console.log(err);
}).finally(() => {
    console.log("run");
})

console.log("synchronous 2");