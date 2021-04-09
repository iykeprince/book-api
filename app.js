const express = require('express');

const app = express();


app.get('/', (req, res, next) => {
    res.send("Nice home page route");
});

app.listen(3000);