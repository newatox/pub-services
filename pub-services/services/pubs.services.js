const moment = require('moment');
var myJson = require('../mocks/pubs.json');

function getPubList() {
    var myPubList = [];
    for (var i = 0; i < myJson.length; ++i) {
        myPubList.push(myJson[i].name);
    }
    return myPubList;
}

function getOpenPubList() {
    var currentDate = moment();
    var myOpenPubList = [];
    for (var i = 0; i < myJson.length; ++i) {
        var current = Number(currentDate.format('h'));
        var start = myJson[i].openHours.start;
        var end = myJson[i].openHours.end;
        var openDays;
        if((current >= start && current < end) || (current >= start && start >= end)) {
            openDays = myJson[i].openDays;
            for (var j = 0; j < openDays.length; ++j) {
                if (openDays[j] === currentDate.format('dddd')) {
                    myOpenPubList.push(myJson[i].name);
                }
            }
        } else if(start >= end) {
            openDays = myJson[i].openDays;
            const yesterday = currentDate.subtract(end, 'h').format('dddd');
            for (var k = 0; k < openDays.length; ++k) {
                if (openDays[k] === yesterday) {
                    myOpenPubList.push(myJson[i].name);
                }
            }
        }
    }
    return myOpenPubList;
}

module.exports = {
    getPubList: getPubList,
    getOpenPubList: getOpenPubList
};
