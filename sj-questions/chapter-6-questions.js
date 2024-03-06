const sleep = ms => new Promise(r => setTimeout(r, ms));

async function delayedHello() {
    console.log('function start')
    await sleep(2000)
    console.log('Hellooooo')
}

// delayedHello()

async function fetchData() {
    try {
        let newData = await fetch('https://api.example.com/nonexistent')
        console.log(newData)
    } catch (err) {
        console.log('error fetching data')
    }
}

// fetchData()

async function fetchUserData() {
    try {
        let userData = await fetch('https://the-one-api.dev/v2/book')
        const books = await userData.json()
        console.log(books)

    } catch (err) {
        console.log(err.message)
    }
}

// fetchUserData()

async function postUserData() { 
    try {

        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({name: 'Carl'})
        }
        
        const userData = await fetch('https://the-one-api.dev/v2/book', options)
    } catch(err) {
        console.log(err.message)
    }

}

postUserData()