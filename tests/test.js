const fetch = require('cross-fetch')

const url = 'http://host.docker.internal:3000'

async function getResponse() {
    const res = await fetch(url)
    const json = await res.json()
    return json.pageCount
}

async function reset() {
    await fetch(url + '/reset', {
        method: 'POST'
    })
}

async function test() {
    const res1 = await getResponse()
    if (res1 === 1) {
        console.log('✔ First page visit is 1')
    }
    else {
        throw new Error('❌ First page visit is not 1 but ' + res1)    
    }


    const res2 = await getResponse()
    if (res2 === 2) {
        console.log('✔ Second page visit is 2')
    }
    else {
        throw new Error('❌ Second page visit is not 2 but ' + res1)    
    }

    await reset()
}

test()