const { default: fetch } = require("node-fetch")

const chuckPromise = async () =>  {
    try {
        const response = await fetch('http://api.icndb.com/jokes/random')
        const data = await response.json()
        return data.value.joke
    } catch (error)  {
        console.error('Chuck says he made an error.')
    }
}


const printByChuck = async () =>  {
    const print = await chuckPromise()
    console.log(print, 'by Chuck Norris')
}


printByChuck()

const threeQuotes = async () => {
    const array =[]
    for (let i = 0; i < 3; i++)  {
        array.push(await chuckPromise())
    }
    console.log(await array)
    const resolved = await Promise.all(array)
    console.log(resolved)
}
 threeQuotes()
// 


// resolveThree()

