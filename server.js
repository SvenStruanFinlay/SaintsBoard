var express = require('express');
var fs = require('fs');
var bodyParser=require('body-parser')
var app = express();
var bodyparser= bodyParser();
var solr = require('solr-client');
var client = solr.createClient({core: 'SaintsBoard'});

client.autoCommit = true;

var docs = [];
var i=12340;

app.use(bodyparser);

app.get('/', function(req, res){
  console.log('GET /')
  //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
  var html = fs.readFileSync('index.html');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
});

app.post('/', function(req, res){


  console.log('POST /');
  console.dir(req.body);
  /*var post = req.body;
  var doc = {
    id : i++,
    post : req.body,
    comments:[]
  }
  client.add([doc],function (err,obj) {
    if(err){
      console.log(err);
    }else{
      console.log(obj);
    }
  })*/




  docs = [],

      // Switch on "auto commit", by default `client.autoCommit = false`
      client.autoCommit = true;

  var doc = {
    id: i++,
    post: req.body.post,
  }
  docs.push(doc);

// Add documents
  console.log(docs);
client.add(docs, function (err, obj) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(obj);
    client.commit(undefined, function (err, obj) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(obj);
      }
    });
  }
});
  res.writeHead(200, {'Content-Type': 'text/html'});
  //res.end('thanks');
});

port = 8081;
app.listen(port);
console.log('Listening at http://localhost:' + port)
