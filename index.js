/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

// Import 3rd party libraries
const express = require('express');
const bodyParser = require('body-parser');

// Read enviroment variables
require('dotenv').config()

// Import app routes/modules
const webhook = require('./routes/webhook');

const app = express();
app.set('port', (process.env.PORT || 5001));


// Import middleware for parsing requests
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Attach routes to the app
app.use('/webhook', webhook);

app.listen(app.get('port'), () => {
  console.log('Hello DevC Accra!!')
  console.log('The app is running on port', app.get('port'));
});


