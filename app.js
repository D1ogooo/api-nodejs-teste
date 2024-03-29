const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./src/controllers/authController')(app)

app.listen(3000)