const express = require('express');
const router = express.Router();
const structJson = require('./structJson');
const dialogflow = require('dialogflow');
const uuid = require('uuid');

const config = require('../config/keys');

const projectId = config.googleProjectID;
const sessionId = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;

// Create a new session
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

// Text query routes
router.post('/textQuery', async (req, res) => {
  // dialog에 정보 보내는 함수 -> 공식문서에 있다.

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: req.body.text, // 채팅 칠때마다 바뀌어야 되므로 req.body로 바꿔야함
        // The language used by the client (en-US)
        languageCode: languageCode,
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  
  res.send(result);
});

// Event query routes


module.exports = router;