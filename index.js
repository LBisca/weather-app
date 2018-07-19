const yargs = require('./node_modules/yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
        demand: true,
        alias: 'address',
       describe: 'Address to fetch for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;



geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if (errorMessage) {
    console.log(errorMessage);
    } else {
        weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherResults) => {
            if(errorMessage){
                console.log(errorMessage);
            } else {
                console.log(results.address);
                console.log(JSON.stringify(`It's Currently: ${weatherResults.temperature}, but it feels like ${weatherResults.apparentTemperature} `, undefined, 2));
            }
        });
    }
});





