function log (req,res,next){
    console.log('Authenticating....');
    next();
  }

  function Authenticating(req,res,next){
    console.log('logging....');
    next();
  }
  module.exports =log, Authenticating;
 