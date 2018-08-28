/**
 *
 * @return {} 
 */
function cleanRoom() {
    return new Promise(function (resolve, reject) {
        // reject('rejeted');
        resolve('Cleaned The Room ');
    });
}

/**
 * 
 * @param {*} message 
 * @return {}
 */
function removeGarbage(message) {
    return new Promise(function (resolve, reject) {
        resolve(message + 'remove Garbage ');
    });
}

/**
 * 
 * @param {*} message 
 * @return {}
 */
function winIcecream(message) {
    return new Promise(function (resolve, reject) {
        resolve(message + 'won Icecream');
    });
}

cleanRoom()
.then(function (result) {
    return removeGarbage(result)
    // throw "mbghvjbhvjhvhj"
}).then(function (result) {
    return winIcecream(result)
}).then(function (result) {
    console.log('finished ' + result);
})
.catch((error) => {
    console.log('error occured ' + error);
})


// http://dummy.restapiexample.com/api/v1/employees
