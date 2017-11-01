/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

const sendApi = require('./send-api');

const handleMessage = (event) => {
  const message = event.message;
  const senderId = event.sender.id;

  if (!message.text) {
  	return;
  }

  // // Just echo back the message to the user
  // sendApi.sendMessage(senderId, {text: message.text});


  // Use NLP to change the message in case it's a greeting
  let text = message.text;

  //Customized responses
  // switch (text) {
  //   case 'Good morning':
  //     let response = 'Good morning to you too dear';
  //     sendApi.sendMessage(senderId, { text: response });
  // }
  if (message.nlp && message.nlp.entities.greetings) {
    let greetings = message.nlp.entities.greetings;
    let isGreeting = greetings.filter((greeting) => {
      return greeting.confidence > 0.95;  
    }).length > 0;
    if (isGreeting) {
      text = 'Welcome to the DevC Accra Messenger Session!';
    }
  }
  sendApi.sendMessage(senderId, {text: text});

};

module.exports = {
  handleMessage,
};