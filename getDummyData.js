/**
 * @description function to get options object and used xmlhttprequest to Initializes a request and 
 * If the request is asynchronous ,
 *  this method returns as soon as the request is sent.
 * @param {object} options 
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
 * @param {Array} data 
 * @return {} default
 */
var createTableForUser  = (data) => {
    var tbl = document.createElement('table');
    tbl.style.width = '60%';
    tbl.setAttribute('border', '1');
    tbl.setAttribute('cellspacing', '0');
    tbl.setAttribute('cellpadding', '5');
    console.log(data);

    // retrieve column header
    var col = []; // define an empty array
    data.map((item) => {
        Object.keys(item).map((key) => {
            if (col.indexOf(key) === -1 && item[key] !== '') {
                col.push(key);
            }
        })
    })

    var thead           = document.createElement('thead');
    var trow          = document.createElement('tr');

    // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
    col.map((cell)=>{
        var th   = document.createElement('th');
        th.appendChild(document.createTextNode(cell));
        trow.appendChild(th)
    })
    thead.appendChild(trow);
    tbl.appendChild(thead);

    var tbody           = document.createElement('tbody');

    data.map((item) => {
        var tr          = document.createElement('tr');

        Object.keys(item).map((key) => {
            if (item[key] !== '') {
                var td   = document.createElement('td')
                td.appendChild(document.createTextNode(item[key]))
                tr.appendChild(td)
            }
        })

        tbody.appendChild(tr);
    })

    tbl.appendChild(tbody);
    document.getElementById('empTable').appendChild(tbl);
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


/**
 * 1) Utility Functions 
 * 2) 
 * 
 */      