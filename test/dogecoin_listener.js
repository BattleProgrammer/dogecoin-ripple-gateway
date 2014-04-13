var DogecoinListener = require('../lib/dogecoin_listener');

describe('dogecoin listener', function() {

  before(function(){

    listener = new DogecoinListener();
    
  }); 

  it('should throw an error without required options', function(fn) {
    
    fn();

  });

});

