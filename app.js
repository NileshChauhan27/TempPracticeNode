/*jshint esversion: 6 */

const express = require('express');
const app = express();

const square = (x) => {
    debugger;
    return x * x;
}

app.get('/:number', (req, res) => {
    const squared = square(req.params.number);
    res.send('Squared is: ' + squared);
});
app.listen(9010);