const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fetchData() {
    try {
        const res = await fetch('https://dummyjson.com/products/1')
        console.log(res)
    } catch(err) {
        console.log(err.message)
    }
}

fetchData()