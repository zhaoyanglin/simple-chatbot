const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({ path: '.env' });
const messageWebhook = require('./message-webhook');

const verifyWebhook = require('./verify-webhook');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', verifyWebhook);
app.post('/', messageWebhook);

// app.get('/test', (req, res) => {
//     res.send({message:'hi'})
// })

app.listen(5000, () => console.log('Express server is listening on port 5000'));

