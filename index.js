const request = require('./node_modules/request');
const yargs = require('./node_modules/yargs');
const geocode = require('./geocode/geocode');

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
    if(errorMessage){
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2))
    }
});