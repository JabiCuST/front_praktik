const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000

const app = express()

const start = () => {
    try {
        app.listen(PORT, () => console.log('server stated on port ${PORT}'))
    } catch(e) {
        console.log(e);
    }
};
start()
