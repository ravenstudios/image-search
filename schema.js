var mongoose = require('mongoose');
const user = "ravenstudios";
const password = "4666basss";
var mongoDB = "mongodb://" + user + ":" + password + "@ds161245.mlab.com:61245/ravenstudios-fcc-image-search";
mongoose.connect(mongoDB, {
  useMongoClient: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var urlSchema = new Schema({

  query: String,
  time: String
  });

module.exports =mongoose.model("imageSearch", urlSchema);
