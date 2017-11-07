var urlModel = require("./schema");
module.exports = function(query, callback){

  date = new Date();
  

  urlModel.create({query: query, time: date},function(err, result){
    if(err){
      callback(err);
      console.log(err);
    }
    console.log("query saved");
  });

}
