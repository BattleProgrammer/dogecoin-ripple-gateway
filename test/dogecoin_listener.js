"use strict";

const DogecoinListener = require('../lib/dogecoin_listener');
const assert = require('assert');
const sinon = require('sinon');

const defaultParameters = {
  dogecoinRpcUrl: 'https://localhost:5533',
  dogecoinRpcUsername: 'somegreatusername',
  dogecoinRpcPassword: 'asupersecurep@assword'
};

describe('dogecoin listener', function() {
  before(function() {


  });

  it('should have default behavior for incoming payments', function(fn){

    let defaultListener = new DogecoinListener(defaultParameters);

    let log = console.log;
    console.log = sinon.spy();

    let payment = {
      amount: 10,
      address: 'someDogecoinAddress',
      hash: 'theDogecoinPaymentHash'
    };

    defaultListener._incomingPayment(payment, function(err, response) {
  
      assert(console.log.calledWith(payment));
      assert(!err);
      assert(response == 'incoming dogecoin payment logged to stdout');
      console.log = log;
      fn();

    });

  });

  it('should accept a custom callback function', function(fn) {
    let log = console.log;
    console.log = sinon.spy();

    let customListenerParams = new Object(defaultParameters);

    customListenerParams.onIncomingPayment = function(payment, fn){
      log('on incoming payment custom');

      console.log({
        amount: payment.amount / 2,
        address: payment.address,
        hash: payment.hash 
      });
  
      fn(null, true);

    };
    
    let customListener = new DogecoinListener(customListenerParams);

    let payment = {
      amount: 10,
      address: 'someDogecoinAddress',
      hash: 'theDogecoinPaymentHash'
    };

    customListener._incomingPayment(payment, function(err, response) {
  
      assert(console.log.calledWith({
        amount: 5,
        address: 'someDogecoinAddress',
        hash: 'theDogecoinPaymentHash'
      }));

      console.log = log;
      fn();

    });
 
  });

});

