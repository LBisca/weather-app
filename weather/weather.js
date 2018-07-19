const request = require('/home/lucas/Visual_Studio/Node/weather-app/node_modules/request');

var getWeather = (lat,lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/263ce21868e564974411b4192787790c/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback (undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch Weather');
        }
    });
}

module.exports.getWeather = getWeather;