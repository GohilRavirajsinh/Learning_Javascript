const PromiseOne = new Promise(function (resolve, reject) {
    // Do an asyc task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async Task is Compelete');
        resolve()
    }, 1000)
})
PromiseOne.then(function () {
    console.log('Promise Consumed')
})


new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async Task is 2 Complete')
        resolve()
    }, 1000);
}).then(() => {
    console.log('second Promise Consumed')
})


const PromiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: 'Goku', email: 'goku@example.com' })
    }, 1000)
})
PromiseThree.then(function (user) {
    console.log(user)
})


const PromiseFour = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ IGN: 'GokuPlayzZz', igID: 5872341440 })
        } else {
            reject('Error: Data Failed to fetch');
        }
    }, 1000)
})
PromiseFour
    .then((player) => {
        console.log(player)
        return player.IGN
    }).then((playerName) => {
        console.log(playerName)
    }).catch((error) => {
        console.log(error);
    }).finally(() => console.log("The Promise is either resolved and rejected!"))


const PromiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true; // if true than error why? first run and see error than see async comment in bottom
        if (!error) {
            resolve({ Player: 'XGoku', INid: 5872341440 })
        } else {
            reject('ERROR: JS Went Wrong')
        }
    }, 1000)
})
async function consumePromiseFive() { // async cannot handle error direct if use try/catch than its run
    const response = await PromiseFive
    console.log(response)
}
consumePromiseFive()
//Handle async error using try catch in the same program
async function consumePromiseFive() {
    try {
        const response = await PromiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

async function getAllUsers() {
    try {
        const DataResponse = await fetch('https://api.github.com/users/GohilRavirajsinh')
        const Data = await DataResponse.json()
        console.log(Data)
        console.log(`Player Bio : ${Data.bio}`)
    } catch (error) {
        console.log(error)
    }
}
getAllUsers()

// using thrn(),catch() same upper example
fetch('https://api.github.com/users/GohilRavirajsinh').then(function (DataResponse) {
    return DataResponse.json()
}).then(function (data) {
    console.log(data)
    console.log(`Player Bio : ${data.bio}`)
}).catch((error) => console.log(error) )