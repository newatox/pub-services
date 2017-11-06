var myJson = require('../mocks/pubs.json');

function getPubList() {
    for (var i = 0; i < myJson.length; ++i) {
        console.log(myJson[i].name);
    }
}

function getOpenPubList(date) {

}

module.exports = {
    getPubList: getPubList,
    getOpenPubList: getOpenPubList
};
