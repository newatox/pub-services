var myPubServices = require('pub-services').services.pubService;

function getPubList() {
    var allPubs = myPubServices.getPubList();
    console.log("Liste des pubs : ");
    for(var i = 0; i < allPubs.length; ++i) {
        console.log(allPubs[i]);
    }
}

function getOpenPubList() {
    var openPubs = myPubServices.getOpenPubList();
    console.log("Liste des pubs ouverts : ");
    for(var j = 0; j < openPubs.length; ++j) {
        console.log(openPubs[j]);
    }
}

module.exports = {
    getPubList: getPubList,
    getOpenPubList: getOpenPubList
}