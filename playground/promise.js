const request = require('/home/lucas/Visual_Studio/Node/weather-app/node_modules/request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var encodedAddress = encodeURIComponent(address);

            request({
                url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
                json: true
            }, (error, response, body) => {
                if (body.status === 'OK') {
                    resolve({
                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                    });
                } else {
                    reject('Error');
                }
            });
        }, 2500)

    })
};

geocodeAddress('02443030').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
})