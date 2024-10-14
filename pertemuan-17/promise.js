// Promise
const helloWold = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World")
        },2000);
    })
}

// async
const messages = async () => {
    const msg = await helloWold()
    console.log(msg);
}
messages()
export{messages}
