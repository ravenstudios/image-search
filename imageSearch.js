
var request = require("request");
module.exports = function(query, offset, callback){

  var result = [];

  console.log(offset);
      var options = {
        url: 'https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=' +
        query + '&count=10&offset=' + offset,
        headers: {
          'Ocp-Apim-Subscription-Key': "50697ac010cb45d2a0b339023a968a96"
        }
      }
      request(options, function(error, response, body) {
        if(error){
          console.error(error)
        }
        var info = JSON.parse(body);
        for (var i = 0; i < info.value.length; i++) {
          result.push({
            contentUrl: info.value[i].contentUrl,
            altText: info.value[i].name,
            pageUrl: info.value[i].hostPageUrl
          });
        }
        callback(JSON.stringify(result));
      });






















}
