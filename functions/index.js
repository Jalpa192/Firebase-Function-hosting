const functions = require('firebase-functions');
const express = require('express');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const app = express();

app.get('/timestamp',(request,response)=>{
    response.send(`new -${Date.now()}`);
});

app.get('/timestamp-cache',(request,response)=>{
    response.set('Cache-control','public, max-age=300, s-maxage=600');
    response.send(`cache -${Date.now()}`);
});

exports.app = functions.https.onRequest(app);
