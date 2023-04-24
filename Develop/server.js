const express = require('express');
const routes = require('./routes');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3002;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);

 
app.listen(process.env.PORT || PORT, () => {
    console.log("Listening on http://localhost:" + PORT);
})