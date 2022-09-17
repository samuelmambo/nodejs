function Authenticating (req,res,next){
    console.log('Authenticating....');
    next();
  }

  function log (req,res,next){
    console.log('logging....');
    next();
  }
  module.export =log, Authenticating;
 