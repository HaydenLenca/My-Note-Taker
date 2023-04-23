const express = require('express');
const routes = require('routes');
const path = require('path');
const app = require('app');


app.use(express.json());
app.use(express.urlencoded({extende: false}));
app.use(express.static('public'));
app.use('routes');
 
app.listen(process.env.PORT || PORT, () => {
    console.log("Listening on http://localhost:" + PORT);
})