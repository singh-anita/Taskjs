/**
 * @description function to get options object and used xmlhttprequest to Initializes a request and 
 * If the request is asynchronous ,
 *  this method returns as soon as the request is sent.
 * @param {*} options object
 * @return {Promise object}
 */
var getUserData         = (options)  => {

    return new Promise((resolve, reject) => {

        const request   = new XMLHttpRequest();
        request.open(options.method, options.url);
        request.onload  = () => {    
            if (request.status === 200) {
                resolve(request.response); // we got data here, so resolve the Promise
            } else {
                // reject(Error(request.statusText)); // status is not 200 OK, so reject
                reject({
                    status: this.status,
                    statusText: request.statusText
                });
            }
        };
        request.onerror = () => {
             // error occurred, reject the  Promise
            reject({
                status: this.status,   
                statusText: request.statusText  
            });
        };

        request.send(); // send the request
    });
};
/**
 * @description function to get data which is in JSON array format, passed it to html table
 * @param {*} data 
 * @return {}
 */
var createTableForUser  = (data) => {
    console.log(data)
    
    var tbody           = document.getElementById('tbody1');

    data.map((item) => {
        var tr          = document.createElement('tr');

        Object.keys(item).map((key) => {
            if (key     != "profile_image") {
                var td   = document.createElement('td')
                td.appendChild(document.createTextNode(item[key]))
                tr.appendChild(td)
            }
        })

        tbody.appendChild(tr);
    })
};

var options              = {
    method      : 'GET',
    url         : 'http://dummy.restapiexample.com/api/v1/employees'
};

getUserData(options)
    .then((result) => {
        return createTableForUser(JSON.parse(result))
    })
    .catch((error) => {
        console.log('error occured ' + error);
    })
