'use strict';

/* eslint no-invalid-this: 0 */

/**
 * @var {Object} handlers manages requests and intents for the skill
 */
module.exports = {

  LaunchRequest : () => {

    this.response
      .speak('Welcome to your meal planner.  How can I help with your meals today?')
      .listen('I\'m sorry, I didn\'t understand that.  Could you please say that again?');

    this.emit(':responseReady');

  },

  'AMAZON.HelpIntent' : () => {

    const examples =
      'What is for dinner on Monday?  ' +
      'Or, what is for lunch on Wednesday?';

    this.response
      .speak(`Here are some of the things you can say: ${examples}`)
      .listen('To hear examples again, ask for help');

    this.emit(':responseReady');

  },

  'AMAZON.StopIntent' : () => {

    this.emit('exitSession');

  },

  'AMAZON.CancelIntent' : () => {

    this.emit('exitSession');

  },

  AboutIntent : () => {

    this.emit(
      ':tellWithCard',
      'The "My Meal Planner" Alexa skill was developed, with love, by Andrew Vaughan in Chicago, Illinois.',
      'My Meal Planner',
      'The "My Meal Planner" Alexa skill was developed, with love, by Andrew Vaughan in Chicago, Illinois.'
    );

  },


  // -- CUSTOM FUNCTIONS --

  exitSession : () => {

    this.response
      .speak('Be well!')
      .shouldEndSession(true);

    this.emit(':responseReady');

  }

};
