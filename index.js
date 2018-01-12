'use strict';

const Alexa = require('alexa-sdk'),
      path = require('path');

const handlersGeneric = require(path.join(__dirname, 'src/handlers.generic')),
      pkg = require(path.join(__dirname, 'package.json'));


/**
 * Sets up and executes the Alexa skill.
 *
 * @param {Object} event Alexa event Object passed to the skill
 * @param {Object} context Alexa context Object passed to the skill
 * @param {function} callback callback function used for asynchronous calls
 */
exports.handler = (event, context, callback) => {

  const alexa = Alexa.handler(event, context, callback);

  alexa.appId = pkg.alexa.appid;

  alexa.registerHandlers(handlersGeneric);
  alexa.execute();

};
