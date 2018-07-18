const request = require('./node_modules/request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=%20151%20Av%20Filipe%20Lobo%20Lauzane',
    json: true
}, (error, response, body) => {
    console.log(body);
});