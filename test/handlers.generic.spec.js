'use strict';

/* eslint new-cap: 0 */
/* eslint no-invalid-this: 0 */

/* jshint ignore:start */
/* eslint-disable */
const mocha = require('mocha'),
      should = require('should'),
      sinon = require('sinon');
/* eslint-enable */
/* jshint ignore:end */

const handlersGeneric = require('../src/handlers.generic');


describe('Generic Handlers', () => {

  it('should be a simple Object', () => {

    handlersGeneric.should.be.an.Object();

  });

  it('should have the built-in Amazon Help intent', () => {

    /* eslint no-console: 0 */

    /*
    handlersGeneric.this.response = sinon.createStubInstance(Object);
    handlersGeneric.this.response.speak = sinon.stub();
    handlersGeneric.this.response.listen = sinon.stub();
    handlersGeneric.this.response.emit = sinon.stub();
    */

    // console.log(handlersGeneric.this.response);

    const test = new handlersGeneric();

    handlersGeneric.should.have.key('AMAZON.HelpIntent');

    test['AMAZON.HelpIntent']();

    /*
    this.response.speak.should.have.been.called();
    this.response.listen.should.have.been.called();
    */

  });

});
