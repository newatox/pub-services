var myPubServices = require('./services/pubs.services.js');

module.exports = {
    services: {
        pubService: myPubServices
    }
};





/*
console.log("All pubs : ");
console.log(myPubServices.getPubList());
console.log("Open pubs : ");
console.log(myPubServices.getOpenPubList());
*/