
var dogecoin = require('node-dogecoin');
var assert = require('assert');

function DogecoinListener(opts) {

  if (!opts.dogecoinRpcUrl) { 
    throw new Error('dogecoinRpcUrl required in `opts` of `new DogecoinListener(opts)`');
  };   
  opts.dogecoinRpcUrl = opts.dogecoinRpcUrl;

  if (!opts.dogecoinRpcUsername) { 
    throw new Error('dogecoinRpcUsername required in `opts` of `new DogecoinListener(opts)`');
  };   
  opts.dogecoinRpcUsername = opts.dogecoinRpcUsername;

  if (!opts.dogecoinRpcPassword) { 
    throw new Error('dogecoinRpcPassword; required in `opts` of `new DogecoinListener(opts)`');
  };   
  opts.dogecoinRpcPassword = opts.dogecoinRpcPassword;

  if (opts.onIncomingPayment) {

    this._incomingPayment = opts.onIncomingPayment;

  } else {

    this._incomingPayment = function(payment, fn){
        
      console.log(payment);
      fn(null, 'incoming dogecoin payment logged to stdout');

    };

  };
  
};

module.exports = DogecoinListener;

