var urlModel = require("./schema");
module.exports = function(callback){

   urlModel.find(function(err, doc){
     
     if(err){
       callback(err);
     }
     callback(doc);
   });
 }
