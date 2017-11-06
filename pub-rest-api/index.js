const express = require('express');
const pubService = require('pub-services').services.pubService;
const app = express();

app.get('/pubs', function (req, res) {
    const pubs = pubService.getPubList();
    res.send(pubs);
    res.status(200).json();
});

app.get('/openpubs', function (req, res) {
    const openPubs = pubService.getOpenPubList();
    res.send(openPubs);
    res.status(200).json();
});

app.listen(3000);
