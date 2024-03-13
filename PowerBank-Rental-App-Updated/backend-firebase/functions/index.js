/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

//const {onRequest} = require("firebase-functions/v2/https");
//const logger = require("firebase-functions/logger");

//import * as functions from 'firebase-functions';

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

 /*exports.helloWorld = onRequest((request, response) => {
  // logger.info("Hello logs!", {structuredData: true});
  try {
    response.send("Hello from Firebase!");
  } catch (err) {

  }
  
});*/


const functions = require('firebase-functions');

const hello = functions.https.onRequest((request, response) => {
  response.send("hii");
});

module.exports = { hello };