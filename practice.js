const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('inside')
    }, 2000);
}).then((response) => {
    console.log(response)
})